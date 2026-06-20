import { Rainbow } from "lucide-react";
import { createVerticalFeature } from "../_shared/createFeature";
import { lgbtqSubApps } from "./data/subApps";

export const lgbtqFeature = createVerticalFeature({
  id: "lgbtq",
  label: "LGBTQ+ Self-Care",
  description: "Identity tools, guides, check-ins and community support",
  hubPath: "/lgbtq",
  routePrefix: "/lgbtq",
  icon: Rainbow,
  categoryOrder: ["guides", "identity", "checkins", "relationships", "wellbeing", "learn"],
  categoryTitles: {
    guides: "Identity guides",
    identity: "Identity & pride",
    checkins: "Check-ins & trackers",
    relationships: "Conversations & community",
    wellbeing: "Mental & physical wellbeing",
    learn: "Learn & stories",
  },
  subApps: lgbtqSubApps,
});
