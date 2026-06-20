import { useMemo, useState } from "react";
import { useParams } from "react-router";
import { motion } from "motion/react";
import {
  ChevronDown,
  ChevronUp,
  Clock,
  History,
  Plus,
  Send,
  X,
} from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { PageHeader } from "@/shared/components";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { coachingAreas } from "../data/coachingAreas";
import {
  exerciseTemplates,
  exerciseTitleToTemplateId,
  specialExercises,
  type ExerciseField,
  type ExerciseTemplate,
} from "../data/exerciseTemplates";
import { slugify } from "../lib/slug";
import { SuccessDialog } from "../components/SuccessDialog";
import { legacyExerciseHistoryKey, listExerciseHistory } from "../lib/storage";

interface HistoryEntry {
  id: string;
  date: string;
  fields: Record<string, string>;
}

/**
 * Renders any coaching exercise:
 *  - If the title maps to a `specialExercises` entry, a dedicated tracker
 *    component will be loaded (placeholder until ports land in Group C).
 *  - Otherwise renders the template-driven form with text / list / table /
 *    rated-list fields and a per-exercise history drawer (localStorage).
 */
export function CoachingExercisePage() {
  const { areaId, exerciseSlug } = useParams<{ areaId: string; exerciseSlug: string }>();
  const area = coachingAreas.find((a) => a.id === areaId);
  const exercise = area?.exercises.find((e) => slugify(e.title) === exerciseSlug);

  const specialKind = exercise ? specialExercises[exercise.title] : null;
  const template: ExerciseTemplate | null = useMemo(() => {
    if (!exercise || specialKind) return null;
    const templateId = exerciseTitleToTemplateId[exercise.title];
    return templateId ? exerciseTemplates[templateId] ?? null : null;
  }, [exercise, specialKind]);

  const backTo = area ? `/coaching/${area.id}` : "/coaching-areas";
  const title = exercise?.title ?? "Exercise";
  const subtitle = area ? `${area.name} · Exercise` : undefined;

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <MobileNav />
      <main className="flex-1 max-w-[820px] mx-auto px-4 md:px-6 py-4 md:py-8 pt-[72px] md:pt-8">
        <PageHeader title={title} subtitle={subtitle} backTo={backTo} />

        {!exercise ? (
          <EmptyCard message="This exercise isn't available." />
        ) : specialKind ? (
          <EmptyCard
            message={
              <>
                Interactive tracker for <span className="font-medium text-foreground">{exercise.title}</span>{" "}
                is being ported. Open it from the area page once available.
              </>
            }
          />
        ) : template ? (
          <TemplateExercise template={template} />
        ) : (
          <EmptyCard
            message={
              <>
                No template is mapped to <span className="font-medium text-foreground">{exercise.title}</span> yet.
              </>
            }
          />
        )}
      </main>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/*  Template-driven exercise form                                     */
/* ---------------------------------------------------------------- */

function TemplateExercise({ template }: { template: ExerciseTemplate }) {
  const storageKey = legacyExerciseHistoryKey(template.id);
  const [values, setValues] = useState<Record<string, string>>({});
  const [listValues, setListValues] = useState<Record<string, string[]>>({});
  const [tableValues, setTableValues] = useState<Record<string, string[][]>>({});
  const [ratedValues, setRatedValues] = useState<Record<string, Record<string, string>>>({});
  const [showHistory, setShowHistory] = useState(false);
  const [expandedEntry, setExpandedEntry] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [historyVersion, setHistoryVersion] = useState(0);

  const history = useMemo<HistoryEntry[]>(
    () => (listExerciseHistory(template.id) as unknown) as HistoryEntry[],
    [template.id, historyVersion],
  );

  const getListItems = (id: string) => listValues[id] ?? [""];
  const getTableRows = (id: string, cols: number) =>
    tableValues[id] ?? [Array(cols).fill("")];

  const handleSubmit = () => {
    const merged: Record<string, string> = { ...values };
    template.fields.forEach((field) => {
      if (field.type === "list") {
        const items = (listValues[field.id] ?? []).filter((v) => v.trim());
        if (items.length > 0) merged[field.id] = JSON.stringify(items);
      } else if (field.type === "table") {
        const rows = (tableValues[field.id] ?? []).filter((r) => r.some((c) => c.trim()));
        if (rows.length > 0) merged[field.id] = JSON.stringify({ columns: field.columns, rows });
      } else if (field.type === "rated-list") {
        const ratings = ratedValues[field.id];
        if (ratings && Object.values(ratings).some((v) => v.trim())) {
          merged[field.id] = JSON.stringify(ratings);
        }
      }
    });

    if (!Object.values(merged).some((v) => v.trim())) {
      toast({ title: "Please fill in at least one field", variant: "destructive" });
      return;
    }

    const entry: HistoryEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleString(),
      fields: merged,
    };
    try {
      const prev = JSON.parse(window.localStorage.getItem(storageKey) || "[]") as HistoryEntry[];
      window.localStorage.setItem(storageKey, JSON.stringify([entry, ...prev].slice(0, 50)));
    } catch {
      /* ignore quota errors in frontend-only mode */
    }

    setValues({});
    setListValues({});
    setTableValues({});
    setRatedValues({});
    setHistoryVersion((v) => v + 1);
    setShowSuccess(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col gap-5 pb-12"
    >
      {/* Description / meta */}
      <div className="flex items-start gap-3">
        <div className="flex-1 rounded-xl border border-border bg-card/60 p-4">
          <p className="text-sm leading-relaxed text-muted-foreground italic">{template.description}</p>
          <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Clock size={12} /> 10–15 min</span>
            <span className="flex items-center gap-1">
              <History size={12} /> {history.length} {history.length === 1 ? "session" : "sessions"}
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setShowHistory((v) => !v)}
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors ${
            showHistory
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-card text-foreground border-border hover:border-primary/40"
          }`}
          aria-label="Toggle history"
        >
          <History className="h-5 w-5" />
        </button>
      </div>

      {template.importantNote && (
        <div className="rounded-xl border border-indigo-200 bg-indigo-50/60 p-4 text-xs text-indigo-900">
          <p className="font-bold mb-1">Important Note:</p>
          {template.importantNote}
        </div>
      )}

      {showHistory && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="overflow-hidden rounded-2xl border border-border bg-muted/30"
        >
          <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-3">
            <h3 className="text-sm font-semibold text-foreground">Previous entries</h3>
            <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">
              {history.length} saved
            </span>
          </div>
          {history.length === 0 ? (
            <div className="p-8 text-center">
              <History className="mx-auto mb-2 h-10 w-10 text-muted-foreground/40" />
              <p className="text-xs text-muted-foreground">No history yet. Submit your first entry.</p>
            </div>
          ) : (
            <div className="divide-y divide-border max-h-[320px] overflow-y-auto">
              {history.map((entry) => (
                <button
                  key={entry.id}
                  type="button"
                  onClick={() => setExpandedEntry(expandedEntry === entry.id ? null : entry.id)}
                  className="w-full p-4 text-left transition-colors hover:bg-card"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground">{entry.date}</span>
                    {expandedEntry === entry.id ? (
                      <ChevronUp className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                  {expandedEntry === entry.id && (
                    <div className="mt-3 flex flex-col gap-2">
                      {template.fields.map((field) => (
                        <div key={field.id}>
                          <p className="text-xs font-semibold" style={{ color: field.color }}>
                            {field.label}
                          </p>
                          <HistoryValue raw={entry.fields[field.id]} />
                        </div>
                      ))}
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}
        </motion.div>
      )}

      {/* Fields */}
      <div className="flex flex-col gap-6">
        {template.fields.map((field, i) => (
          <motion.div
            key={field.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.02 }}
          >
            <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-foreground">
              <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: field.color }} />
              {field.label}
            </h3>
            {field.subtitle && (
              <p className="mb-2 whitespace-pre-line text-sm text-muted-foreground">{field.subtitle}</p>
            )}
            {Array.isArray(field.prompts) && field.prompts.length > 0 && (
              <ul className="mb-3 ml-5 flex list-disc flex-col gap-1">
                {field.prompts.map((p, j) => (
                  <li key={j} className="text-sm text-muted-foreground">
                    {p}
                  </li>
                ))}
              </ul>
            )}

            {field.type === "list" ? (
              <ListField
                color={field.color}
                items={getListItems(field.id)}
                onChange={(idx, val) =>
                  setListValues((prev) => {
                    const items = [...(prev[field.id] ?? [""])];
                    items[idx] = val;
                    return { ...prev, [field.id]: items };
                  })
                }
                onAdd={() =>
                  setListValues((prev) => ({
                    ...prev,
                    [field.id]: [...(prev[field.id] ?? [""]), ""],
                  }))
                }
                onRemove={(idx) =>
                  setListValues((prev) => {
                    const items = [...(prev[field.id] ?? [""])];
                    if (items.length <= 1) return prev;
                    items.splice(idx, 1);
                    return { ...prev, [field.id]: items };
                  })
                }
              />
            ) : field.type === "table" && field.columns ? (
              <TableField
                color={field.color}
                columns={field.columns}
                rows={getTableRows(field.id, field.columns.length)}
                onChange={(rowIdx, colIdx, val) =>
                  setTableValues((prev) => {
                    const cols = field.columns!.length;
                    const rows = [...(prev[field.id] ?? [Array(cols).fill("")])].map((r) => [...r]);
                    if (!rows[rowIdx]) rows[rowIdx] = Array(cols).fill("");
                    rows[rowIdx][colIdx] = val;
                    return { ...prev, [field.id]: rows };
                  })
                }
                onAdd={() =>
                  setTableValues((prev) => ({
                    ...prev,
                    [field.id]: [
                      ...(prev[field.id] ?? [Array(field.columns!.length).fill("")]),
                      Array(field.columns!.length).fill(""),
                    ],
                  }))
                }
                onRemove={(rowIdx) =>
                  setTableValues((prev) => {
                    const rows = [...(prev[field.id] ?? [])];
                    if (rows.length <= 1) return prev;
                    rows.splice(rowIdx, 1);
                    return { ...prev, [field.id]: rows };
                  })
                }
              />
            ) : field.type === "rated-list" && field.items ? (
              <RatedListField
                items={field.items}
                ratings={ratedValues[field.id] ?? {}}
                onChange={(item, val) =>
                  setRatedValues((prev) => ({
                    ...prev,
                    [field.id]: { ...(prev[field.id] ?? {}), [item]: val },
                  }))
                }
              />
            ) : (
              <Textarea
                value={values[field.id] ?? ""}
                onChange={(e) => setValues((prev) => ({ ...prev, [field.id]: e.target.value }))}
                placeholder="Enter your response…"
                className="min-h-[100px] rounded-xl border-border bg-background text-sm resize-y focus:ring-2 focus:ring-primary/30"
              />
            )}
          </motion.div>
        ))}
      </div>

      {template.footerNote && (
        <p className="whitespace-pre-line text-xs italic leading-relaxed text-muted-foreground">
          {template.footerNote}
        </p>
      )}

      <motion.button
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.98 }}
        type="button"
        onClick={handleSubmit}
        className="flex items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
      >
        <Send className="h-4 w-4" /> Submit
      </motion.button>

      <p className="text-center text-[11px] text-muted-foreground">
        Your responses are stored privately on this device.
      </p>

      <SuccessDialog open={showSuccess} onClose={() => setShowSuccess(false)} />
    </motion.div>
  );
}

/* ---------------------------------------------------------------- */
/*  Field sub-components                                              */
/* ---------------------------------------------------------------- */

function ListField({
  color,
  items,
  onChange,
  onAdd,
  onRemove,
}: {
  color: string;
  items: string[];
  onChange: (idx: number, val: string) => void;
  onAdd: () => void;
  onRemove: (idx: number) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item, idx) => (
        <div key={idx} className="flex gap-2">
          <Input
            value={item}
            onChange={(e) => onChange(idx, e.target.value)}
            placeholder={`Item ${idx + 1}…`}
            className="rounded-xl border-border bg-background text-sm focus:ring-2 focus:ring-primary/30"
          />
          <button
            type="button"
            onClick={() => onRemove(idx)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
          >
            <X size={16} />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={onAdd}
        className="flex items-center gap-2 self-start text-xs font-semibold transition-opacity hover:opacity-80"
        style={{ color }}
      >
        <Plus size={14} /> Add item
      </button>
    </div>
  );
}

function TableField({
  color,
  columns,
  rows,
  onChange,
  onAdd,
  onRemove,
}: {
  color: string;
  columns: string[];
  rows: string[][];
  onChange: (rowIdx: number, colIdx: number, val: string) => void;
  onAdd: () => void;
  onRemove: (rowIdx: number) => void;
}) {
  return (
    <div className="flex flex-col gap-3 overflow-hidden rounded-2xl border border-border bg-muted/20 p-4">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[500px]">
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th
                  key={i}
                  className="px-2 pb-3 text-left text-[10px] font-bold uppercase tracking-wider text-muted-foreground"
                >
                  {col}
                </th>
              ))}
              <th className="w-10" />
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row, rowIdx) => (
              <tr key={rowIdx}>
                {row.map((cell, colIdx) => (
                  <td key={colIdx} className="px-1 py-2">
                    <Input
                      value={cell}
                      onChange={(e) => onChange(rowIdx, colIdx, e.target.value)}
                      className="h-9 rounded-lg border-border bg-background text-xs"
                    />
                  </td>
                ))}
                <td className="py-2 pl-2">
                  <button
                    type="button"
                    onClick={() => onRemove(rowIdx)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                  >
                    <X size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        type="button"
        onClick={onAdd}
        className="mt-1 flex items-center gap-2 self-start text-xs font-semibold transition-opacity hover:opacity-80"
        style={{ color }}
      >
        <Plus size={14} /> Add row
      </button>
    </div>
  );
}

function RatedListField({
  items,
  ratings,
  onChange,
}: {
  items: string[];
  ratings: Record<string, string>;
  onChange: (item: string, val: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      {items.map((item) => (
        <div key={item} className="flex items-center justify-between border-b border-border/60 py-2">
          <p className="text-sm font-medium text-foreground">{item}</p>
          <Input
            value={ratings[item] ?? ""}
            onChange={(e) => onChange(item, e.target.value)}
            placeholder="—"
            className="w-20 rounded-lg border-border bg-background text-center text-sm"
          />
        </div>
      ))}
    </div>
  );
}

function HistoryValue({ raw }: { raw: string | undefined }) {
  if (!raw) return <span className="text-sm text-muted-foreground">—</span>;
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return (
        <ul className="ml-4 flex list-disc flex-col gap-0.5">
          {parsed.map((item: string, idx: number) => (
            <li key={idx} className="text-sm text-foreground">
              {item}
            </li>
          ))}
        </ul>
      );
    }
    if (parsed && typeof parsed === "object") {
      if (parsed.columns && parsed.rows) {
        return (
          <div className="mt-1 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  {parsed.columns.map((col: string, i: number) => (
                    <th key={i} className="pb-1 pr-3 text-left text-xs font-semibold text-muted-foreground">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {parsed.rows.map((row: string[], ri: number) => (
                  <tr key={ri}>
                    {row.map((cell: string, ci: number) => (
                      <td key={ci} className="py-0.5 pr-3 text-foreground">
                        {cell || "—"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      return (
        <div className="mt-1 flex flex-col gap-0.5">
          {Object.entries(parsed).map(([key, val]) => (
            <div key={key} className="flex justify-between text-sm">
              <span className="text-foreground">{key}</span>
              <span className="font-semibold text-primary">{val as string}</span>
            </div>
          ))}
        </div>
      );
    }
  } catch {
    /* fallthrough – plain text */
  }
  return <span className="whitespace-pre-wrap text-sm text-foreground">{raw}</span>;
}

function EmptyCard({ message }: { message: React.ReactNode }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-8 text-center">
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  );
}

// Silence unused-import warning for ExerciseField when types are inferred only.
void (null as unknown as ExerciseField | undefined);