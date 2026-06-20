import { useParams } from "react-router";
import { motion } from "motion/react";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { PageHeader } from "@/shared/components";
import { coachingAreas } from "../data/coachingAreas";
import { learnContent } from "../data/learnContent";

/**
 * Renders a long-form coaching lesson. Paragraphs are heuristically formatted
 * into headings / call-outs / body copy, mirroring the legacy LearnDetail UI.
 */
export function CoachingLearnPage() {
  const { areaId, index } = useParams<{ areaId: string; index: string }>();
  const area = coachingAreas.find((a) => a.id === areaId);
  const idx = Number(index);
  const item = area?.learn[idx];
  const article = areaId ? learnContent[areaId]?.[idx] : undefined;

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <MobileNav />
      <main className="flex-1 max-w-[820px] mx-auto px-4 md:px-6 py-4 md:py-8 pt-[72px] md:pt-8">
        <PageHeader
          title={article?.title ?? item?.title ?? "Lesson"}
          subtitle={area ? `${area.name} · Learn` : undefined}
          backTo={area ? `/coaching/${area.id}` : "/coaching-areas"}
        />

        {!article ? (
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <p className="text-sm text-muted-foreground">
              Lesson content for <strong>{item?.title}</strong> isn't available yet.
            </p>
          </div>
        ) : (
          <article className="flex flex-col gap-4 pb-12">
            {article.paragraphs.map((paragraph, i) => {
              const isHeading =
                paragraph.length < 80 && !paragraph.endsWith(".") && !paragraph.includes("\n");
              const boldMatch = paragraph.match(/^([A-Z][\w\s-]+:)\s(.+)$/);

              if (isHeading) {
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.02 }}
                    className="mt-3"
                  >
                    {i > 0 && (
                      <div className="mb-3 h-px bg-gradient-to-r from-primary/30 via-primary/10 to-transparent" />
                    )}
                    <h2 className="text-base font-bold text-foreground">{paragraph}</h2>
                  </motion.div>
                );
              }

              if (boldMatch) {
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.02 }}
                    className="rounded-xl border-l-[3px] border-primary/40 bg-card/60 border border-border/60 py-3 pl-4 pr-3"
                  >
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      <span className="font-bold text-foreground">{boldMatch[1]}</span>{" "}
                      {boldMatch[2]}
                    </p>
                  </motion.div>
                );
              }

              return (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.02 }}
                  className="text-sm leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </motion.p>
              );
            })}
          </article>
        )}
      </main>
    </div>
  );
}