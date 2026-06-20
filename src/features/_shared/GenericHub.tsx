import { motion } from "motion/react";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { PageHeader } from "@/shared/components";
import type { VerticalConfig } from "./types";

/**
 * Vertical hub generated from a `VerticalConfig`. Renders sub-apps grouped
 * by category as navigable tiles. One component covers every vertical.
 */
export function GenericHub({ config }: { config: VerticalConfig }) {
  const groups = config.categoryOrder
    .map((cat) => ({ cat, items: config.subApps.filter((s) => s.category === cat) }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <MobileNav />
      <main className="flex-1 max-w-[1000px] mx-auto px-4 md:px-6 py-4 md:py-8 pt-[72px] md:pt-8">
        <PageHeader
          title={config.label}
          subtitle={config.description}
          icon={config.icon}
          backTo="/"
        />
        <div className="flex flex-col gap-10 pb-12">
          {groups.map(({ cat, items }) => (
            <section key={cat}>
              <h2 className="mb-4 text-lg font-semibold text-foreground">
                {config.categoryTitles[cat] ?? cat}
              </h2>
              <motion.div
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
              >
                {items.map((s) => {
                  const Icon = s.icon;
                  return (
                    <motion.div
                      key={s.id}
                      variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                    >
                      <Link
                        to={`${config.routePrefix}/${s.id}`}
                        className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-sm"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" strokeWidth={1.8} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-foreground">{s.label}</p>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            {s.description}
                          </p>
                        </div>
                        <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground/60" />
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
