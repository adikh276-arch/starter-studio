import { useParams } from "react-router";
import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { BookOpenCheck } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { PageHeader } from "@/shared/components";
import { coachingAreas } from "../data/coachingAreas";
import { resourcesContent } from "../data/resourcesContent";

type ResourceKind = "tips" | "quotes" | "ebooks";

/** Tips / quotes / ebooks for a single coaching area. */
export function CoachingResourcePage() {
  const { areaId, resourceType } = useParams<{ areaId: string; resourceType: string }>();
  const area = coachingAreas.find((a) => a.id === areaId);
  const kind = resourceType as ResourceKind;
  const resources = areaId ? resourcesContent[areaId] : undefined;
  const meta = area?.resources.find((r) => r.type === kind);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <MobileNav />
      <main className="flex-1 max-w-[820px] mx-auto px-4 md:px-6 py-4 md:py-8 pt-[72px] md:pt-8">
        <PageHeader
          title={meta?.title ?? "Resource"}
          subtitle={area ? `${area.name} · ${meta?.subtitle ?? ""}` : meta?.subtitle}
          backTo={area ? `/coaching/${area.id}` : "/coaching-areas"}
        />

        {!resources ? (
          <EmptyState label={meta?.title ?? "Resource"} areaName={area?.name} />
        ) : kind === "tips" ? (
          <div className="flex flex-col gap-3">
            {resources.tips.map((tip, i) => {
              const IconComp =
                (Icons[tip.icon as keyof typeof Icons] as React.ComponentType<{ className?: string; strokeWidth?: number }>) ??
                Icons.Lightbulb;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="flex items-start gap-4 rounded-2xl bg-card border border-border p-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <IconComp className="h-6 w-6 text-primary" strokeWidth={1.8} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground">{tip.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{tip.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : kind === "quotes" ? (
          <div className="flex flex-col gap-3">
            {resources.quotes.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="rounded-2xl border border-border p-5"
                style={{ borderLeft: `4px solid ${q.borderColor}`, backgroundColor: q.bgColor }}
              >
                <p className="text-sm italic leading-relaxed text-foreground">&ldquo;{q.text}&rdquo;</p>
                <p className="mt-3 text-right text-xs font-semibold" style={{ color: q.borderColor }}>
                  – {q.author}
                </p>
              </motion.div>
            ))}
          </div>
        ) : kind === "ebooks" ? (
          <div className="flex flex-col gap-3">
            {resources.ebooks.map((book, i) => {
              const Wrapper = book.url ? "a" : "div";
              const linkProps = book.url
                ? { href: book.url, target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <Wrapper
                    {...(linkProps as Record<string, string>)}
                    className="flex w-full items-center gap-4 rounded-2xl bg-card border border-border p-4 transition-all hover:border-primary/40 hover:scale-[1.01] active:scale-[0.99] cursor-pointer text-left"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <BookOpenCheck className="h-6 w-6 text-primary" strokeWidth={1.8} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground">{book.title}</p>
                      <p className="mt-1 text-xs font-medium text-primary">by {book.author}</p>
                    </div>
                    {book.url && (
                      <span className="shrink-0 text-xs font-semibold text-primary whitespace-nowrap">
                        Read Now →
                      </span>
                    )}
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <EmptyState label={meta?.title ?? "Resource"} areaName={area?.name} />
        )}
      </main>
    </div>
  );
}

function EmptyState({ label, areaName }: { label: string; areaName?: string }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-8 text-center">
      <p className="text-sm text-muted-foreground">
        {label}
        {areaName ? ` for ${areaName}` : ""} coming soon.
      </p>
    </div>
  );
}