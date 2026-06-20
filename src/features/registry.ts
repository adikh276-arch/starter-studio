import type { ComponentType, ReactNode } from "react";

/**
 * Single source of truth for everything a self-care vertical contributes to
 * the app: its routes, its dashboard tile, and any trackers it exposes.
 *
 * Adding a new vertical = create `src/features/<name>/` and append one entry
 * to `featureRegistry`. The router, dashboard, and tracker lists all read
 * from this registry – do not hardcode vertical routes anywhere else.
 */

export interface FeatureRoute {
  path: string;
  element: ReactNode;
  /** Optional – mark the canonical entry point of the vertical. */
  entry?: boolean;
}

export interface FeatureTracker {
  id: string;
  label: string;
  description?: string;
  /** Route a tracker tile should navigate to. */
  path: string;
  /** Lucide icon component – kept loose to avoid a hard dep here. */
  icon?: ComponentType<{ size?: number; className?: string }>;
}

export interface FeatureModule {
  /** Stable kebab-case id (e.g. "fitness", "ocd"). */
  id: string;
  /** Human label for nav / cards. */
  label: string;
  /** One-line description shown on the self-care hub. */
  description: string;
  /** Canonical path users land on when picking this vertical. */
  entryPath: string;
  /** All routes this vertical owns. */
  routes: FeatureRoute[];
  /** Trackers/quick-actions exposed by this vertical, if any. */
  trackers?: FeatureTracker[];
}

import { coachingFeature } from "./coaching";
import { financialFeature } from "./financial";

/**
 * Verticals register themselves here as they get ported in Phase B.
 */
export const featureRegistry: FeatureModule[] = [
  coachingFeature,
  financialFeature,
];

export function getFeatureRoutes(): FeatureRoute[] {
  return featureRegistry.flatMap((f) => f.routes);
}

export function getAllTrackers(): FeatureTracker[] {
  return featureRegistry.flatMap((f) => f.trackers ?? []);
}

export function getFeature(id: string): FeatureModule | undefined {
  return featureRegistry.find((f) => f.id === id);
}