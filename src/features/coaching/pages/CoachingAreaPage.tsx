import { useParams, useNavigate, Link } from "react-router";
import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { PageHeader } from "@/shared/components";
import { coachingAreas, exerciseColorMap } from "../data/coachingAreas";
import { slugify } from "../lib/slug";

/**
 * One page handles every coaching area – the area is selected by URL param.
 * Route: `/coaching/:areaId`
 */
export function CoachingAreaPage() {
  const { areaId } = useParams<{ areaId: string }>();
  const navigate = useNavigate();
  const area = coachingAreas.find((a) => a.id === areaId);

  if (!area) {
    return (
      <div className="flex min-h-screen bg-background">
        <Sidebar />
        <MobileNav />
        <main className="flex-1 max-w-[1000px] mx-auto px-6 py-8 pt-[72px] md:pt-8">
          <PageHeader title="Coaching area not found" />
          <button onClick={() => navigate("/coaching-areas")} className="text-primary hover:underline">
            Back to all areas
          </button>
        </main>
      </div>
    );
  }

  const AreaIcon = (Icons[area.lucideIcon as keyof typeof Icons] as React.ComponentType<{ size?: number; className?: string }>) ?? Icons.Target;

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <MobileNav />

      <div className="flex-1 flex flex-col min-w-0">
        <main className="max-w-[1000px] w-full mx-auto px-4 md:px-6 py-4 md:py-8 pt-[72px] md:pt-8">
          <PageHeader
            title={area.name}
            subtitle="Coaching exercises, lessons and resources"
            icon={AreaIcon}
            backTo="/coaching-areas"
          />

          {/* Exercises */}
          <section className="mb-10">
            <h2 className="text-lg font-semibold text-foreground mb-4">Exercises</h2>
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3"
            >
              {area.exercises.map((ex) => {
                const ExIcon = (Icons[ex.lucideIcon as keyof typeof Icons] as React.ComponentType<{ size?: number; className?: string }>) ?? Icons.Activity;
                return (
                  <motion.div
                    key={ex.title}
                    variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                  >
                    <Link
                      to={`/coaching/${area.id}/exercise/${slugify(ex.title)}`}
                      className={`${exerciseColorMap[ex.color]} text-white rounded-2xl p-4 h-32 flex flex-col justify-between hover:scale-[1.02] transition-transform`}
                    >
                      <ExIcon size={24} className="text-white/90" />
                      <span className="text-sm font-medium leading-tight">{ex.title}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </section>

          {/* Learn */}
          <section className="mb-10">
            <h2 className="text-lg font-semibold text-foreground mb-4">Learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {area.learn.map((item, i) => (
                <Link
                  key={item.title}
                  to={`/coaching/${area.id}/learn/${i}`}
                  className="flex items-center justify-between bg-card border border-border rounded-xl px-4 py-3 hover:border-primary/40 transition-colors"
                >
                  <span className="text-sm font-medium text-foreground">{item.title}</span>
                  <Icons.ChevronRight size={16} className="text-muted-foreground" />
                </Link>
              ))}
            </div>
          </section>

          {/* Resources */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-4">Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {area.resources.map((res) => (
                <Link
                  key={res.type}
                  to={`/coaching/${area.id}/resource/${res.type}`}
                  className="bg-card border border-border rounded-xl p-4 hover:border-primary/40 transition-colors"
                >
                  <p className="text-sm font-semibold text-foreground">{res.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{res.subtitle}</p>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}