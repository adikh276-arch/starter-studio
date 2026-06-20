import { Wine, Cigarette, Leaf, Pill, Brain, FlaskConical, Activity, type LucideIcon } from "lucide-react";
import type { SubApp } from "../../_shared/types";

export const substanceSubApps: SubApp[] = [
  { id: "alcohol",         label: "Alcohol",          description: "Reduce, track and recover from alcohol use.",    icon: Wine,         category: "substances" },
  { id: "tobacco",         label: "Tobacco & Nicotine", description: "Quit-smoking support, cravings and tracking.", icon: Cigarette,    category: "substances" },
  { id: "cannabis",        label: "Cannabis",         description: "Awareness and reduction tools for cannabis.",    icon: Leaf,         category: "substances" },
  { id: "opioids",         label: "Opioids",          description: "Recovery support for opioid use.",               icon: Pill,         category: "substances" },
  { id: "stimulants",      label: "Stimulants",       description: "Tools for stimulant awareness and recovery.",    icon: Activity,     category: "substances" },
  { id: "benzodiazepines", label: "Benzodiazepines",  description: "Taper and recovery support for benzos.",         icon: Pill,         category: "substances" },
  { id: "kratom",          label: "Kratom",           description: "Tracking and support for kratom use.",           icon: Leaf,         category: "substances" },
  { id: "mdma",            label: "MDMA",             description: "Harm reduction and recovery for MDMA.",          icon: FlaskConical, category: "substances" },
  { id: "dashboard",       label: "Recovery Dashboard", description: "Your sobriety streaks, mood and milestones.", icon: Brain,        category: "tools" },
];
