"use client";
import { useParams, Link, Navigate, useNavigate } from "@/lib/router";
import { ChevronLeft, BookOpen, CircleDot, Heart, Lightbulb, Clock, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { modules, type ModuleSlug } from "@/data/modules";
import { understandingTile } from "@/lib/tones";

const understandingIcons = [BookOpen, CircleDot, Heart, Lightbulb];

const Understanding = () => {
  const { slug, index } = useParams<{ slug: ModuleSlug; index: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation([slug || "core", "core"]);
  const data = slug ? modules[slug as ModuleSlug] : undefined;
  const i = Number(index);
  if (!data || isNaN(i) || !data.understanding[i]) return <Navigate to="/" replace />;

  const item = data.understanding[i];
  const s = understandingTile[item.tone];
  const Icon = understandingIcons[i] ?? BookOpen;

  // Reading metadata
  const wordCount = item.body.join(" ").split(/\s+/).length;
  const readMinutes = Math.max(1, Math.round(wordCount / 220));

  // First paragraph is lead; the rest are article body
  const [lead, ...rest] = item.body;

  // Promote ~1/3 of remaining paragraphs to pull-quotes for visual rhythm
  const pullQuoteIndex = rest.length >= 4 ? Math.floor(rest.length / 2) : -1;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero band */}
      <div className={`${s.wrap} border-b border-border/40 animate-in fade-in`}>
        <div className="mx-auto max-w-3xl px-6 pb-12 pt-8 md:px-10 md:pb-16 md:pt-10">
          <button
            onClick={() => {
              if (window.history.length > 1) navigate(-1);
              else navigate(`/module/${slug}`);
            }}
            aria-label="Back"
            className="mb-8 inline-flex items-center gap-1.5 rounded-full bg-card/70 px-3 py-1.5 text-xs font-medium text-foreground/70 backdrop-blur transition-all duration-300 hover:bg-card hover:-translate-y-0.5"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            {t("core:common.back_to")} {t("title")}
          </button>

          <div className="flex items-start gap-4 animate-in slide-up">
            <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${s.tile} shadow-soft transition-transform duration-500 hover:rotate-6`}>
              <Icon className={`h-7 w-7 ${s.icon}`} strokeWidth={2} />
            </div>
            <div className="min-w-0">
              <p className={`text-[11px] font-bold uppercase tracking-[0.18em] ${s.text}`}>
                {t("title")} · {t("core:common.chapter")} {i + 1}
              </p>
              <h1 className="mt-2 text-3xl font-bold leading-[1.15] tracking-tight md:text-[40px]">
                {t(`understanding.${i}.label`)}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-foreground/60">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {readMinutes} {t("core:common.min_read")}
                </span>
                <span className="h-1 w-1 rounded-full bg-foreground/30" />
                <span className="inline-flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5" />
                  {item.body.length} {t("core:common.sections")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="mx-auto max-w-3xl px-6 py-12 md:px-10 md:py-16 animate-in slide-up stagger-1">
        {/* Lead paragraph */}
        {item.body[0] && (
          <p className={`mb-12 text-xl font-medium leading-[1.6] tracking-[-0.005em] text-foreground md:text-[22px] first-letter:float-left first-letter:mr-3 first-letter:text-[64px] first-letter:font-bold first-letter:leading-[0.9] first-letter:${s.text}`}>
            {t(`understanding.${i}.body.0`)}
          </p>
        )}

        {/* Numbered sections */}
        <div className="space-y-10 md:space-y-12">
          {item.body.slice(1).map((_, idx) => {
            const p = t(`understanding.${i}.body.${idx + 1}`);
            if (idx + 1 === pullQuoteIndex) {
              return (
                <figure key={idx} className="my-2 animate-in fade-in stagger-2">
                  <div className={`relative rounded-2xl ${s.wrap} px-6 py-7 md:px-9 md:py-9 transition-transform duration-500 hover:scale-[1.02]`}>
                    <Sparkles className={`absolute -top-3 left-6 h-6 w-6 ${s.text}`} fill="currentColor" />
                    <blockquote className={`text-lg font-semibold leading-[1.55] md:text-xl ${s.text}`}>
                      “{p}”
                    </blockquote>
                  </div>
                </figure>
              );
            }
            return (
              <section key={idx} className="group flex gap-5 md:gap-6">
                <div className="flex flex-col items-center pt-1.5">
                  <span className={`text-xs font-bold tabular-nums ${s.text} transition-transform duration-300 group-hover:scale-110`}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className={`mt-2 h-full w-px bg-border group-hover:bg-primary/30 transition-colors`} aria-hidden />
                </div>
                <p className="text-[17px] leading-[1.85] text-foreground/85 md:text-[18px] transition-colors duration-300 group-hover:text-foreground">
                  {p}
                </p>
              </section>
            );
          })}
        </div>

        {/* Closing card */}
        <div className={`mt-16 rounded-2xl border border-border/50 ${s.wrap} p-6 md:p-8 animate-in slide-up stagger-2`}>
          <p className={`text-[11px] font-bold uppercase tracking-[0.18em] ${s.text}`}>
            {t("core:common.keep_exploring")}
          </p>
          <h3 className="mt-2 text-xl font-bold tracking-tight md:text-2xl">
            {t("core:common.more_on")} {t("title")}
          </h3>
          <p className="mt-1.5 text-sm text-foreground/70">
            {t("core:common.browse_more")}
          </p>
          <button
            onClick={() => {
              if (window.history.length > 1) navigate(-1);
              else navigate(`/module/${slug}`);
            }}
            className={`mt-5 inline-flex items-center gap-2 rounded-full ${s.tile} px-5 py-2.5 text-sm font-semibold ${s.icon} shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card`}
          >
            <ChevronLeft className="h-4 w-4" />
            {t("core:common.back_to")} {t("title")}
          </button>
        </div>
      </article>
    </div>
  );
};

export default Understanding;
