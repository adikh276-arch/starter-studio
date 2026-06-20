import type { FeatureModule } from "../registry";
import { GenericHub } from "./GenericHub";
import { GenericSubAppPage } from "./GenericSubAppPage";
import type { VerticalConfig } from "./types";

/**
 * Turns a `VerticalConfig` into a `FeatureModule` registered with the app.
 * Each vertical becomes two routes: the hub and a polymorphic sub-app page.
 */
export function createVerticalFeature(config: VerticalConfig): FeatureModule {
  return {
    id: config.id,
    label: config.label,
    description: config.description,
    entryPath: config.hubPath,
    routes: [
      { path: config.hubPath, element: <GenericHub config={config} />, entry: true },
      { path: `${config.routePrefix}/:subAppId`, element: <GenericSubAppPage config={config} /> },
    ],
  };
}
