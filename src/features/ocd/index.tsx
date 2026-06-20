import { Brain } from "lucide-react";
import { createVerticalFeature } from "../_shared/createFeature";
import { ocdSubApps } from "./data/subApps";

export const ocdFeature = createVerticalFeature({
  id: "ocd",
  label: "OCD Self-Care",
  description: "Trackers, exposure exercises and learning for OCD",
  hubPath: "/ocd-selfcare",
  routePrefix: "/ocd",
  icon: Brain,
  categoryOrder: ["types", "trackers", "exercises", "learn"],
  categoryTitles: {
    types: "OCD types",
    trackers: "Trackers",
    exercises: "Exercises & practices",
    learn: "Learn",
  },
  subApps: ocdSubApps,
});
