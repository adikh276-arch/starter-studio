import { Heart } from "lucide-react";
import { createVerticalFeature } from "../_shared/createFeature";
import { emotionalSubApps } from "./data/subApps";

export const emotionalFeature = createVerticalFeature({
  id: "emotional",
  label: "Emotional Wellbeing",
  description: "Breath, grounding, journaling and trackers for emotional self-care",
  hubPath: "/emotional-wellbeing",
  routePrefix: "/emotional",
  icon: Heart,
  categoryOrder: ["breath_grounding", "cognitive", "grief", "sleep", "food_body", "relationships", "trackers", "learn"],
  categoryTitles: {
    breath_grounding: "Breath & grounding",
    cognitive: "Cognitive & journaling",
    grief: "Grief & loss",
    sleep: "Sleep",
    food_body: "Food & body",
    relationships: "Relationships",
    trackers: "Trackers",
    learn: "Learn",
  },
  subApps: emotionalSubApps,
});
