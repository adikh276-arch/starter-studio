import type { LucideIcon } from "lucide-react";

/** A single sub-app within a vertical (a tracker, tool, lesson, etc.). */
export interface SubApp {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
  category: string;
}

/** Configuration for an auto-generated vertical built from a `SubApp[]`. */
export interface VerticalConfig {
  id: string;
  label: string;
  description: string;
  hubPath: string;          // e.g. "/lgbtq-selfcare"
  routePrefix: string;      // e.g. "/lgbtq" – sub-apps mount at `${routePrefix}/:subAppId`
  icon: LucideIcon;
  categoryOrder: readonly string[];
  categoryTitles: Record<string, string>;
  subApps: SubApp[];
}
