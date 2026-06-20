"use client";
import { useState } from "react";
import { useParams, Link, Navigate, useNavigate } from "@/lib/router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { tipPages, type TipSlug } from "@/data/tips";
import { iconMap } from "@/lib/icons";

const toneStyles: Record<string, { headerBg: string; tile: string; icon: string; subtitle: string; ring: string }> = {
  teal: {
    headerBg: "bg-[hsl(185_55%_94%)]",
    tile: "bg-[hsl(185_55%_92%)]",
    icon: "text-[hsl(185_60%_38%)]",
    subtitle: "text-[hsl(185_55%_42%)]",
    ring: "ring-[hsl(185_60%_55%)]",
  },
  orange: {
    headerBg: "bg-[hsl(35_95%_94%)]",
    tile: "bg-[hsl(35_95%_92%)]",
    icon: "text-[hsl(28_85%_50%)]",
    subtitle: "text-[hsl(28_85%_55%)]",
    ring: "ring-[hsl(28_90%_55%)]",
  },
  pink: {
    headerBg: "bg-[hsl(335_85%_95%)]",
    tile: "bg-[hsl(335_85%_94%)]",
    icon: "text-[hsl(335_75%_55%)]",
    subtitle: "text-[hsl(335_70%_60%)]",
    ring: "ring-[hsl(335_75%_62%)]",
  },
  purple: {
    headerBg: "bg-[hsl(265_70%_95%)]",
    tile: "bg-[hsl(265_70%_94%)]",
    icon: "text-[hsl(265_60%_55%)]",
    subtitle: "text-[hsl(265_55%_60%)]",
    ring: "ring-[hsl(265_65%_60%)]",
  },
};

const Tip = () => {
  const { slug } = useParams<{ slug: TipSlug }>();
  const navigate = useNavigate();
  const { t } = useTranslation(["tips", "core"]);
  const data = slug ? tipPages[slug as TipSlug] : undefined;
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  if (!data) return <Navigate to="/" replace />;

  const s = toneStyles[data.tone];
  const HeaderIcon = iconMap[data.iconKey as keyof typeof iconMap] || iconMap.Lightbulb;

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-10 md:px-10 md:py-14">
        {/* Header */}
        <header className="mb-10 flex items-start gap-4 animate-in slide-up">
          <button
            onClick={() => {
              if (window.history.length > 1) navigate(-1);
              else navigate("/");
            }}
            aria-label="Back"
            className="mt-1 grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className={`grid h-11 w-11 place-items-center rounded-2xl ${s.headerBg} transition-transform duration-300 hover:scale-110`}>
            <HeaderIcon className={`h-5 w-5 ${s.icon}`} strokeWidth={1.75} />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{t(`${data.slug}.title`)}</h1>
            <p className={`mt-1 text-sm ${s.subtitle}`}>{t(`${data.slug}.subtitle`)}</p>
          </div>
        </header>

        <div className="space-y-3 animate-in slide-up stagger-1">
          {data.items.map((item, i) => {
            const Icon = iconMap[item.iconKey as keyof typeof iconMap] ?? iconMap.Lightbulb;
            const open = openIdx === i;
            return (
              <div
                key={item.title}
                className={`overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft transition-all duration-300 ${open ? `ring-1 ${s.ring} shadow-card` : "hover:shadow-md"}`}
              >
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center gap-4 px-4 py-4 text-left transition-colors hover:bg-black/[0.02]"
                >
                  <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${s.tile} transition-transform duration-300 ${open ? "scale-105" : ""}`}>
                    <Icon className={`h-5 w-5 ${s.icon}`} strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary">{t(`${data.slug}.items.${i}.title`)}</h3>
                    <p className={`mt-0.5 text-xs ${s.subtitle}`}>{t(`${data.slug}.items.${i}.subtitle`)}</p>
                  </div>
                  <ChevronRight
                    className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-90" : ""}`}
                  />
                </button>
                {open && (
                  <div className="animate-in fade-in border-t border-border/40 px-4 pb-4 pt-3 md:px-5">
                    <p className="pl-15 text-sm leading-relaxed text-muted-foreground" style={{ paddingLeft: "3.75rem" }}>
                      {t(`${data.slug}.items.${i}.detail`)}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tip;
