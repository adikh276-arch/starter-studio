import { useParams } from "react-router";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { PageHeader } from "@/shared/components";
import { coachingAreas } from "../data/coachingAreas";
import { slugify } from "../lib/slug";

/**
 * Placeholder exercise/tracker page. The legacy `_src` mini-apps that powered
 * these trackers will be ported into `src/features/coaching/trackers/<slug>/`
 * one at a time. For now this surface keeps navigation working.
 */
export function CoachingExercisePage() {
  const { areaId, exerciseSlug } = useParams<{ areaId: string; exerciseSlug: string }>();
  const area = coachingAreas.find((a) => a.id === areaId);
  const exercise = area?.exercises.find((e) => slugify(e.title) === exerciseSlug);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <MobileNav />
      <main className="flex-1 max-w-[1000px] mx-auto px-4 md:px-6 py-4 md:py-8 pt-[72px] md:pt-8">
        <PageHeader
          title={exercise?.title ?? "Exercise"}
          subtitle={area ? `${area.name} coaching` : undefined}
          backTo={area ? `/coaching/${area.id}` : "/coaching-areas"}
        />
        <div className="bg-card border border-border rounded-2xl p-8 text-center">
          <p className="text-sm text-muted-foreground">
            Interactive tracker for <span className="font-medium text-foreground">{exercise?.title}</span> is coming soon.
          </p>
        </div>
      </main>
    </div>
  );
}