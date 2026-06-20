import { useParams, Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { PageHeader } from "@/shared/components";
import { financialSubApps } from "../data/subApps";

/**
 * Generic landing for a financial sub-app whose interactive page has not yet
 * been ported. Keeps navigation cohesive while content is filled in.
 */
export function FinancialSubAppPage() {
  const { subAppId } = useParams<{ subAppId: string }>();
  const sub = financialSubApps.find((s) => s.id === subAppId);
  const Icon = sub?.icon;

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <MobileNav />
      <main className="flex-1 max-w-[820px] mx-auto px-4 md:px-6 py-4 md:py-8 pt-[72px] md:pt-8">
        <PageHeader
          title={sub?.label ?? "Financial tool"}
          subtitle={sub?.description}
          icon={Icon}
          backTo="/financial-wellbeing"
        />
        <div className="rounded-2xl border border-border bg-card p-8 text-center">
          <p className="text-sm text-muted-foreground">
            The interactive {sub?.label ?? "tool"} experience is being ported into the app.
          </p>
          <Link
            to="/financial-wellbeing"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            See all financial tools <ArrowRight size={14} />
          </Link>
        </div>
      </main>
    </div>
  );
}
