import { useParams, Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { PageHeader } from "@/shared/components";
import type { VerticalConfig } from "./types";

/**
 * Polymorphic detail page for any sub-app inside a vertical. Used for sub-apps
 * whose interactive content has not yet been deep-ported.
 *
 * Once a sub-app gets a custom page, override the registry route in the
 * vertical's `index.tsx` so this generic fallback is bypassed for that id.
 */
export function GenericSubAppPage({ config }: { config: VerticalConfig }) {
  const { subAppId } = useParams<{ subAppId: string }>();
  const sub = config.subApps.find((s) => s.id === subAppId);
  const Icon = sub?.icon ?? config.icon;

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <MobileNav />
      <main className="flex-1 max-w-[820px] mx-auto px-4 md:px-6 py-4 md:py-8 pt-[72px] md:pt-8">
        <PageHeader
          title={sub?.label ?? config.label}
          subtitle={sub?.description}
          icon={Icon}
          backTo={config.hubPath}
        />
        <div className="rounded-2xl border border-border bg-card p-8 text-center">
          <p className="text-sm text-muted-foreground">
            The interactive {sub?.label ?? "experience"} is being ported into the app.
          </p>
          <Link
            to={config.hubPath}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            See all {config.label.toLowerCase()} tools <ArrowRight size={14} />
          </Link>
        </div>
      </main>
    </div>
  );
}
