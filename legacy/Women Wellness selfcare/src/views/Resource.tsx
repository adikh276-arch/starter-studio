"use client";
import { useParams, Link, Navigate, useNavigate } from "@/lib/router";
import { useTranslation } from "react-i18next";
import {
  ChevronLeft,
  ArrowUpRight,
  Lightbulb,
  Newspaper,
  BookMarked,
  HelpCircle,
  Quote,
  Sparkles,
  X,
  Check,
  Clock,
  BookOpen,
} from "lucide-react";
import { modules, type ModuleSlug } from "@/data/modules";
import { toneBg, toneFg } from "@/lib/tones";

type ResourceKey = "articles" | "tips" | "stories" | "myths";

const Resource = () => {
  const { slug, resource } = useParams<{ slug: ModuleSlug; resource: ResourceKey }>();
  const navigate = useNavigate();
  const { t } = useTranslation([slug || "core", "core"]);
  const data = slug ? modules[slug as ModuleSlug] : undefined;

  const resourceMeta: Record<
    ResourceKey,
    { title: string; tone: keyof typeof toneBg; Icon: any; tagline: string; eyebrow: string }
  > = {
    articles: {
      title: t("core:resources.articles"),
      tone: "yellow",
      Icon: Newspaper,
      tagline: t("core:resource_taglines.articles"),
      eyebrow: t("core:resource_eyebrows.articles"),
    },
    tips: {
      title: t("core:resources.tips"),
      tone: "blue",
      Icon: Lightbulb,
      tagline: t("core:resource_taglines.tips"),
      eyebrow: t("core:resource_eyebrows.tips"),
    },
    stories: {
      title: t("core:resources.stories"),
      tone: "lilac",
      Icon: BookMarked,
      tagline: t("core:resource_taglines.stories"),
      eyebrow: t("core:resource_eyebrows.stories"),
    },
    myths: {
      title: t("core:resources.myths"),
      tone: "mint",
      Icon: HelpCircle,
      tagline: t("core:resource_taglines.myths"),
      eyebrow: t("core:resource_eyebrows.myths"),
    },
  };

  const meta = resource ? resourceMeta[resource as ResourceKey] : undefined;
  if (!data || !meta) return <Navigate to="/" replace />;

  const { tone, Icon, title, tagline, eyebrow } = meta;
  const accent = `hsl(var(--pastel-${tone}-fg))`;

  return (
    <div className="min-h-screen bg-background">
      {/* Editorial hero */}
      <header className="relative overflow-hidden border-b border-border/40">
        <div className={`absolute inset-0 ${toneBg[tone]} opacity-90`} />
        <div
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
          style={{ background: accent }}
        />
        <div
          className="absolute -bottom-32 -left-16 h-64 w-64 rounded-full opacity-25 blur-3xl"
          style={{ background: accent }}
        />

        <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-8 md:px-10 md:pb-20 md:pt-10">
          <button
            onClick={() => {
              if (window.history.length > 1) navigate(-1);
              else navigate(`/module/${slug}`);
            }}
            aria-label="Back"
            className="inline-flex items-center gap-1.5 rounded-full bg-card/80 px-3 py-1.5 text-xs font-medium text-foreground/70 backdrop-blur transition-colors hover:bg-card"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            {t("core:common.back_to")} {t("title")}
          </button>

          <div className="mt-10 grid gap-6 md:grid-cols-[auto_1fr] md:items-end md:gap-10 animate-in slide-up">
            <div
              className="grid h-20 w-20 place-items-center rounded-3xl bg-card shadow-card md:h-24 md:w-24"
              style={{ boxShadow: `0 12px 40px -12px ${accent}` }}
            >
              <Icon className={`h-10 w-10 ${toneFg[tone]} md:h-11 md:w-11`} strokeWidth={1.5} />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px flex-1 max-w-[60px]" style={{ background: accent, opacity: 0.5 }} />
                <p
                  className={`text-[10px] font-bold uppercase tracking-[0.28em] ${toneFg[tone]}`}
                >
                  {eyebrow} · {t("title")}
                </p>
              </div>
              <h1 className="mt-3 font-bold tracking-tight text-foreground text-[44px] leading-[1.05] md:text-[60px]">
                {title}
              </h1>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-foreground/65 md:text-base">
                {tagline}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-14 md:px-10 md:py-20 animate-in slide-up stagger-1">
        {/* ---------- ARTICLES ---------- */}
        {resource === "articles" && (
          <div>
            {/* Section meta strip */}
            <div className="mb-8 flex items-baseline justify-between border-b border-border/60 pb-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-foreground/50">
                {String(data.articles.length).padStart(2, "0")} {t("core:resources.articles")}
              </p>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-foreground/40">
                {t("core:common.curated_for")} {t("title")}
              </p>
            </div>

            {data.articles.map((a, i) => {
              const words = (a.body?.join(" ") ?? a.summary ?? "").split(/\s+/).length;
              const mins = Math.max(2, Math.round(words / 220));
              const isFeature = i === 0;

              if (isFeature) {
                return (
                  <Link
                    key={a.title}
                    to={`/module/${slug}/articles/read/${i}`}
                    className="group relative mb-12 block overflow-hidden rounded-[28px] border border-border/50 bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
                  >
                    <div className="grid md:grid-cols-[1.4fr_1fr]">
                      {/* Left: editorial copy */}
                      <div className="relative p-8 md:p-12">
                        <div className="mb-5 flex flex-wrap items-center gap-3">
                          <span
                            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]"
                            style={{ background: `${accent}1a`, color: accent }}
                          >
                            <Sparkles className="h-3 w-3" fill="currentColor" />
                            {t("core:common.featured_read")}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-foreground/60">
                            <Clock className="h-3.5 w-3.5" />
                            {mins} {t("core:common.min_read")}
                          </span>
                        </div>
                        <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-[42px]">
                          {t(`articles.${i}.title`)}
                        </h2>
                        <p className="mt-4 text-[15px] leading-[1.7] text-foreground/70 md:text-base">
                          {t(`articles.${i}.summary`)}
                        </p>
                        <div
                          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold transition-transform group-hover:translate-x-1"
                          style={{ color: accent }}
                        >
                          {t("core:common.read_article")}
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>

                      {/* Right: tinted visual panel */}
                      <div className={`relative hidden overflow-hidden ${toneBg[tone]} md:block`}>
                        <div
                          className="absolute -right-12 -top-12 h-56 w-56 rounded-full opacity-60 blur-3xl"
                          style={{ background: accent }}
                        />
                        <div
                          className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full opacity-30 blur-3xl"
                          style={{ background: accent }}
                        />
                        <div className="relative flex h-full flex-col justify-between p-10">
                          <div className="flex justify-end">
                            <div
                              className="grid h-14 w-14 place-items-center rounded-2xl bg-card shadow-soft"
                              style={{ color: accent }}
                            >
                              <Newspaper className="h-7 w-7" strokeWidth={1.5} />
                            </div>
                          </div>
                          <div>
                            <p
                              className="font-mono text-[10px] font-bold uppercase tracking-[0.28em]"
                              style={{ color: accent }}
                            >
                              {t("core:common.issue_no")} 01
                            </p>
                            <p className="mt-2 font-mono text-6xl font-light leading-none tabular-nums text-foreground/85">
                              01
                            </p>
                            <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/50">
                              {t("title")} {t("core:common.library")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              }

              return (
                <Link
                  key={a.title}
                  to={`/module/${slug}/articles/read/${i}`}
                  className="group relative mb-4 grid grid-cols-[64px_1fr_auto] items-start gap-6 overflow-hidden rounded-2xl border border-border/50 bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card md:gap-10 md:p-7"
                >
                  {/* Soft tinted accent bar */}
                  <span
                    aria-hidden
                    className={`absolute inset-y-0 left-0 w-1.5 ${toneBg[tone]}`}
                  />
                  {/* Subtle corner glow */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40"
                    style={{ background: accent }}
                  />

                  {/* Number column */}
                  <span
                    className="relative font-mono text-2xl font-light tabular-nums leading-none md:text-3xl"
                    style={{ color: accent }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Content */}
                  <div className="relative min-w-0">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em]"
                        style={{ background: `${accent}1a`, color: accent }}
                      >
                        {t("core:common.article")}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-foreground/55">
                        <Clock className="h-3 w-3" />
                        {mins} {t("core:common.min_read")}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold leading-snug tracking-tight text-foreground transition-colors group-hover:text-foreground/70 md:text-[26px]">
                      {t(`articles.${i}.title`)}
                    </h2>
                    <p className="mt-2.5 line-clamp-2 max-w-2xl text-[14.5px] leading-[1.65] text-foreground/65">
                      {t(`articles.${i}.summary`)}
                    </p>
                  </div>

                  {/* Arrow affordance */}
                  <div
                    className="relative mt-1 grid h-10 w-10 place-items-center rounded-full border border-border/60 transition-all group-hover:translate-x-1"
                    style={{ color: accent }}
                  >
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* ---------- TIPS ---------- */}
        {resource === "tips" && (
          <div>
            <div className="mb-8 flex items-baseline justify-between border-b border-border/60 pb-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-foreground/50">
                {String(data.tips.length).padStart(2, "0")} {t("core:common.practices")}
              </p>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-foreground/40">
                {t("core:common.curated_for")} {t("title")}
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 md:grid-cols-2">
              {data.tips.map((_, i) => (
                <li
                  key={i}
                  className="group relative flex gap-5 bg-card p-7 transition-colors hover:bg-muted/30"
                >
                  <div className="flex flex-col items-center">
                    <span
                      className="font-mono text-4xl font-light leading-none tabular-nums"
                      style={{ color: accent }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="mt-2 h-12 w-px"
                      style={{ background: accent, opacity: 0.3 }}
                    />
                  </div>
                  <div className="min-w-0 flex-1 pt-1">
                    <p
                      className={`mb-2 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] ${toneFg[tone]}`}
                    >
                      <Sparkles className="h-3 w-3" fill="currentColor" />
                      {t("core:common.practice")}
                    </p>
                    <p className="text-[15px] font-medium leading-[1.65] text-foreground/85">
                      {t(`tips.${i}`)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ---------- STORIES ---------- */}
        {resource === "stories" && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {data.stories.map((s, i) => {
              const translatedName = t(`stories.${i}.name`);
              const initials = translatedName
                .split(/\s+/)
                .slice(0, 2)
                .map((w) => w[0])
                .join("")
                .toUpperCase();
              return (
                <Link
                  key={s.name}
                  to={`/module/${slug}/stories/read/${i}`}
                  className="group relative flex flex-col overflow-hidden rounded-[28px] border border-border/50 bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card md:p-9"
                >
                  <Quote
                    className={`absolute -right-3 -top-3 h-28 w-28 ${toneFg[tone]} opacity-[0.08]`}
                    fill="currentColor"
                  />
                  <div
                    className="mb-6 h-1 w-10 rounded-full"
                    style={{ background: accent }}
                  />
                  <p className="relative line-clamp-5 text-[17px] font-medium leading-[1.6] tracking-tight text-foreground/85">
                    “{t(`stories.${i}.quote`)}”
                  </p>
                  <div className="mt-auto flex items-center gap-4 pt-7">
                    <div
                      className={`grid h-12 w-12 place-items-center rounded-full ${toneBg[tone]} text-sm font-bold ${toneFg[tone]} ring-2 ring-card`}
                      style={{ boxShadow: `0 0 0 1px ${accent}33` }}
                    >
                      {initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[15px] font-semibold tracking-tight text-foreground">
                        {translatedName}
                      </p>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/45">
                        {t("core:common.community_story")} · № {String(i + 1).padStart(2, "0")}
                      </p>
                    </div>
                    <div
                      className="grid h-9 w-9 place-items-center rounded-full transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      style={{ background: accent, color: "white" }}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* ---------- MYTHS ---------- */}
        {resource === "myths" && (
          <div className="space-y-6">
            {data.myths.map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-[28px] border border-border/50 bg-card shadow-soft"
              >
                <div className="flex items-center justify-between border-b border-border/50 bg-muted/30 px-6 py-3 md:px-8">
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-foreground/50">
                    {t("core:common.misconception_no")} {String(i + 1).padStart(2, "0")}
                  </p>
                  <BookOpen className="h-3.5 w-3.5 text-foreground/40" />
                </div>
                <div className="grid md:grid-cols-2">
                  {/* Myth side */}
                  <div className="relative bg-pastel-rose/40 p-7 md:p-9">
                    <div className="mb-4 flex items-center gap-2.5">
                      <div className="grid h-7 w-7 place-items-center rounded-full bg-pastel-rose-foreground/10">
                        <X className="h-3.5 w-3.5 text-pastel-rose-foreground" strokeWidth={3} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-pastel-rose-foreground">
                        {t("core:common.the_myth")}
                      </span>
                    </div>
                    <p className="text-[16px] font-medium leading-[1.6] text-foreground/80 line-through decoration-pastel-rose-foreground/40 decoration-[1.5px]">
                      {t(`myths.${i}.myth`)}
                    </p>
                  </div>
                  {/* Fact side */}
                  <div className="relative bg-pastel-mint/40 p-7 md:p-9">
                    <div className="mb-4 flex items-center gap-2.5">
                      <div className="grid h-7 w-7 place-items-center rounded-full bg-pastel-mint-foreground/10">
                        <Check className="h-3.5 w-3.5 text-pastel-mint-foreground" strokeWidth={3} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-pastel-mint-foreground">
                        {t("core:common.the_truth")}
                      </span>
                    </div>
                    <p className="text-[16px] font-medium leading-[1.6] text-foreground/85">
                      {t(`myths.${i}.fact`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Resource;
