"use client";
import { Link, useNavigate } from "@/features/women/lib/router";
import { ChevronLeft, MessageCircle } from "lucide-react";
import { iconMap } from "@/features/women/lib/icons";
import { supportCards, tipCards } from "@/features/women/data/modules";

import { useTranslation } from "react-i18next";
import i18n from "@/features/women/i18n/config";

const Index = () => {
  const { t } = useTranslation("core");
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-14">
        {/* Header */}
        <header className="mb-12 flex items-center justify-between animate-in slide-up">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              aria-label={t("common.back")}
              className="mt-1 grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary">
              <MessageCircle className="h-5 w-5 text-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {t("header.title")}
              </h1>
              <p className="mt-1 text-muted-foreground">
                {t("header.subtitle")}
              </p>
            </div>
          </div>

        </header>



        {/* Tips */}
        <section className="mb-14 animate-in slide-up stagger-1">
          <h2 className="mb-5 text-2xl font-bold tracking-tight text-foreground">{t("sections.tips")}</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {tipCards.map((tip) => {
              const Icon = iconMap[tip.iconKey as keyof typeof iconMap];
              return (
                <Link
                  key={tip.title}
                  to={`/tips/${tip.slug}`}
                  className={`group relative flex h-32 flex-col justify-between overflow-hidden rounded-2xl ${tip.gradient} p-5 text-left text-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                >
                  <Icon className="h-7 w-7 opacity-95 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
                  <span className="text-base font-semibold">{t(`tips.${tip.slug}`)}</span>
                  <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/15 blur-xl transition-all duration-500 group-hover:scale-150" />
                </Link>
              );
            })}
          </div>
        </section>

        {/* Find support */}
        <section className="animate-in slide-up stagger-2">
          <h2 className="mb-5 text-2xl font-bold tracking-tight text-foreground">
            {t("sections.support")}
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {supportCards.map((card) => {
              const Icon = iconMap[card.iconKey as keyof typeof iconMap];
              return (
                <Link
                  key={card.slug}
                  to={`/module/${card.slug}`}
                  className="group flex flex-col items-center gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <div
                    className={`grid h-16 w-16 place-items-center rounded-2xl bg-pastel-${card.tone}`}
                  >
                    <Icon
                      className={`h-7 w-7 text-pastel-${card.tone}-foreground`}
                      strokeWidth={1.75}
                    />
                  </div>
                  <span className="text-center text-sm font-semibold leading-snug text-foreground">
                    {t(`modules.${card.slug}`)}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
