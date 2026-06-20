import { Heart, Flower2, Activity, Baby, Sparkles, Apple, Lightbulb, Stethoscope, Brain, type LucideIcon } from "lucide-react";
import type { SubApp } from "../../_shared/types";

export const womenSubApps: SubApp[] = [
  { id: "fertility",             label: "Fertility",             description: "Cycle tracking, ovulation insights and fertility tools.",       icon: Flower2,    category: "core" },
  { id: "pregnancy-postpartum",  label: "Pregnancy & Postpartum", description: "Trimester-by-trimester support and postpartum care.",            icon: Baby,        category: "core" },
  { id: "menopause",             label: "Menopause",             description: "Symptom tracking and guidance through menopause.",               icon: Sparkles,    category: "core" },
  { id: "pcos",                  label: "PCOS",                  description: "PCOS-aware tools, tracking and education.",                      icon: Activity,    category: "conditions" },
  { id: "reproductive-health",   label: "Reproductive Health",   description: "Whole-cycle reproductive wellbeing.",                            icon: Heart,       category: "core" },
  { id: "mental-health",         label: "Mental Health",         description: "Mood, anxiety and emotional support for women.",                 icon: Brain,       category: "wellbeing" },
  { id: "nutrition-weight",      label: "Nutrition & Weight",    description: "Cycle-aware nutrition and weight wellbeing.",                    icon: Apple,       category: "wellbeing" },
  { id: "medical-conditions",    label: "Medical Conditions",    description: "Information on common women's health conditions.",               icon: Stethoscope, category: "conditions" },
  { id: "tips",                  label: "Tips",                  description: "Quick tips for women's everyday wellbeing.",                     icon: Lightbulb,   category: "learn" },
];
