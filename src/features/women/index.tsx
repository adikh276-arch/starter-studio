import { Flower2 } from "lucide-react";
import { createVerticalFeature } from "../_shared/createFeature";
import { womenSubApps } from "./data/subApps";

export const womenFeature = createVerticalFeature({
  id: "women",
  label: "Women's Wellness",
  description: "Cycle, fertility, menopause, mental health and more",
  hubPath: "/women",
  routePrefix: "/women",
  icon: Flower2,
  categoryOrder: ["core", "wellbeing", "conditions", "learn"],
  categoryTitles: { core: "Core care", wellbeing: "Wellbeing", conditions: "Conditions", learn: "Learn" },
  subApps: womenSubApps,
});
