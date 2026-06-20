import { useParams } from "react-router";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { PageHeader } from "@/shared/components";
import { coachingAreas } from "../data/coachingAreas";

export function CoachingLearnPage() {
  const { areaId, index } = useParams<{ areaId: string; index: string }>();
  const area = coachingAreas.find((a) => a.id === areaId);
  const item = area?.learn[Number(index)];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <MobileNav />
      <main className="flex-1 max-w-[1000px] mx-auto px-4 md:px-6 py-4 md:py-8 pt-[72px] md:pt-8">
        <PageHeader
          title={item?.title ?? "Lesson"}
          subtitle={area ? `${area.name} coaching` : undefined}
          backTo={area ? `/coaching/${area.id}` : "/coaching-areas"}
        />
        <article className="prose prose-sm max-w-none bg-card border border-border rounded-2xl p-6">
          <p className="text-muted-foreground">
            Lesson content for <strong>{item?.title}</strong> will be ported from the legacy coaching content.
          </p>
        </article>
      </main>
    </div>
  );
}