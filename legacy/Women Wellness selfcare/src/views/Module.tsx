"use client";
import { useParams, Link, Navigate, useNavigate } from "@/lib/router";
import { ChevronLeft, ChevronRight, BookOpen, CircleDot, Heart, Lightbulb, Star, Moon, HeartHandshake, Bike, Smile, Newspaper, BookMarked, HelpCircle } from "lucide-react";
import { modules, type ModuleSlug, TRACKERS } from "@/data/modules";
import { iconMap } from "@/lib/icons";
import { toneBg, toneFg, understandingTile } from "@/lib/tones";

import { useTranslation } from "react-i18next";

const understandingIcons = [BookOpen, CircleDot, Heart, Lightbulb];

const trackerStyles: Record<string, { tone: string; Icon: any; href: string }> = {
  Energy: { tone: "rose", Icon: Star, href: "https://platform.mantracare.com/therapy/trackers/energy-tracker" },
  Sleep: { tone: "lilac", Icon: Moon, href: "https://web.mantracare.com/app/sleep" },
  "Self Care": { tone: "pink", Icon: Heart, href: "https://platform.mantracare.com/therapy/trackers/care-tracker" },
  BMI: { tone: "mint", Icon: HeartHandshake, href: "https://platform.mantracare.com/bmi-calculator-new" },
  "Physical Activity": { tone: "peach", Icon: Bike, href: "https://platform.mantracare.com/therapy/trackers/physical-activity-log" },
  Mood: { tone: "yellow", Icon: Smile, href: "https://web.mantracare.com/app/mood_tracker" },
};

const resourceStyles = [
  { key: "Articles", path: "articles", tone: "yellow", Icon: Newspaper },
  { key: "Tips", path: "tips", tone: "blue", Icon: Lightbulb },
  { key: "Stories", path: "stories", tone: "lilac", Icon: BookMarked },
  { key: "Myths", path: "myths", tone: "mint", Icon: HelpCircle },
] as const;

const Module = () => {
  const { slug } = useParams<{ slug: ModuleSlug }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation([slug as string, 'core']); // Namespace for the module and core for general UI
  
  const data = slug ? modules[slug as ModuleSlug] : undefined;
  if (!data) return <Navigate to="/" replace />;

  const HeaderIcon = iconMap[data.iconKey as keyof typeof iconMap] || iconMap.Flower;

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-14">
        {/* Header */}
        <header className="mb-12 flex items-start gap-4 animate-in slide-up">
          <button
            onClick={() => {
              if (window.history.length > 1) navigate(-1);
              else navigate("/");
            }}
            aria-label={t('core:common.back')}
            className="mt-1 grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className={`grid h-11 w-11 place-items-center rounded-2xl ${toneBg[data.tone]}`}>
            <HeaderIcon className={`h-5 w-5 ${toneFg[data.tone]}`} strokeWidth={1.75} />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{t(data.title)}</h1>
            <p className="mt-1 text-muted-foreground">{t(data.subtitle)}</p>
          </div>
        </header>

        {/* Understanding */}
        <section className="mb-12 animate-in slide-up stagger-1">
          <h2 className="mb-5 text-2xl font-bold tracking-tight">{t('core:sections.understanding')} {t(data.title)}</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {data.understanding.map((u, i) => {
              const Icon = understandingIcons[i] || BookOpen;
              const s = understandingTile[u.tone];
              return (
                <Link
                  key={u.label}
                  to={`/module/${slug}/understanding/${i}`}
                  className={`group flex flex-col gap-6 rounded-2xl p-5 shadow-soft ${s.wrap} transition-all duration-300 hover:-translate-y-1 hover:shadow-card`}
                >
                  <div className={`grid h-12 w-12 place-items-center rounded-xl ${s.tile} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className={`h-6 w-6 ${s.icon}`} strokeWidth={2} />
                  </div>
                  <span className={`text-sm font-semibold leading-snug ${s.text}`}>{t(u.label)}</span>
                </Link>
              );
            })}
          </div>
        </section>





        {/* Trackers */}
        <section className="mb-12 animate-in slide-up stagger-2">
          <h2 className="mb-5 text-2xl font-bold tracking-tight">{t('core:sections.trackers')}</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {TRACKERS.map((tName) => {
              const meta = trackerStyles[tName];
              const tone = meta.tone as keyof typeof toneBg;
              const Icon = meta.Icon;
              
              let finalHref = meta.href;
              try {
                const url = new URL(meta.href);
                if (i18n.language) {
                  url.searchParams.set("lang", i18n.language);
                }
                finalHref = url.toString();
              } catch (e) {
                // fallback if URL is invalid
              }

              return (
                <a
                  key={tName}
                  href={finalHref}
                  className={`group flex items-center justify-between rounded-2xl border border-border/60 ${toneBg[tone]}/50 px-4 py-3 text-left shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`grid h-10 w-10 place-items-center rounded-xl ${toneBg[tone]} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className={`h-4 w-4 ${toneFg[tone]}`} strokeWidth={2} />
                    </div>
                    <span className={`text-sm font-medium ${toneFg[tone]}`}>{t(`core:trackers.${tName.toLowerCase().replace(/\s+/g, '_')}`)}</span>
                  </div>
                  <ChevronRight className={`h-4 w-4 ${toneFg[tone]} transition-transform duration-300 group-hover:translate-x-1`} />
                </a>
              );
            })}
          </div>
        </section>

        {/* Resources — link to dedicated pages */}
        <section className="mb-12 animate-in slide-up stagger-3">
          <h2 className="mb-5 text-2xl font-bold tracking-tight">{t('core:sections.resources')}</h2>
          <div className="space-y-3">
            {resourceStyles.map((r) => {
              const tone = r.tone as keyof typeof toneBg;
              const Icon = r.Icon;
              return (
                <Link
                  key={r.key}
                  to={`/module/${slug}/${r.path}`}
                  className={`flex items-center justify-between rounded-2xl border-l-4 ${toneBg[tone]}/60 px-4 py-3 shadow-soft transition-transform hover:translate-x-0.5`}
                  style={{ borderLeftColor: `hsl(var(--pastel-${tone}-fg))` }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`grid h-9 w-9 place-items-center rounded-xl ${toneBg[tone]}`}>
                      <Icon className={`h-4 w-4 ${toneFg[tone]}`} strokeWidth={2} />
                    </div>
                    <span className={`text-sm font-medium underline decoration-2 underline-offset-4 ${toneFg[tone]}`}>
                      {t(`core:resources.${r.key.toLowerCase()}`)}
                    </span>
                  </div>
                  <div className={`grid h-7 w-7 place-items-center rounded-full ${toneBg[tone]}`}>
                    <ChevronRight className={`h-4 w-4 ${toneFg[tone]}`} />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};


export default Module;
