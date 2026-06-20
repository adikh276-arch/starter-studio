import { Wine } from "lucide-react";
import { createVerticalFeature } from "../_shared/createFeature";
import { substanceSubApps } from "./data/subApps";

export const substanceFeature = createVerticalFeature({
  id: "substance",
  label: "Substance Use Self-Care",
  description: "Substance-specific recovery support and tracking",
  hubPath: "/substance",
  routePrefix: "/substance",
  icon: Wine,
  categoryOrder: ["substances", "tools"],
  categoryTitles: { substances: "By substance", tools: "Tools" },
  subApps: substanceSubApps,
});
