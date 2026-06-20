import { useParams } from "react-router";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { PageHeader } from "@/shared/components";
import { coachingAreas } from "../data/coachingAreas";

export function CoachingResourcePage() {
  const { areaId, resourceType } = useParams<{ areaId: string; resourceType: string }>();
  const area = coachingAreas.find((a) => a.id === areaId);
  const resource = area?.resources.find((r) => r.type === resourceType);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <MobileNav />
      <main className="flex-1 max-w-[1000px] mx-auto px-4 md:px-6 py-4 md:py-8 pt-[72px] md:pt-8">
        <PageHeader
          title={resource?.title ?? "Resource"}
          subtitle={resource?.subtitle}
          backTo={area ? `/coaching/${area.id}` : "/coaching-areas"}
        />
        <div className="bg-card border border-border rounded-2xl p-8 text-center">
          <p className="text-sm text-muted-foreground">
            {resource?.title} for <span className="font-medium text-foreground">{area?.name}</span> coming soon.
          </p>
        </div>
      </main>
    </div>
  );
}