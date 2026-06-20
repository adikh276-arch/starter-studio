"use client";
import { pcosData } from "@/modules/pcos/data";
import { reproductiveHealthData } from "@/modules/reproductive-health/data";
import { medicalConditionsData } from "@/modules/medical-conditions/data";
import { nutritionWeightData } from "@/modules/nutrition-weight/data";
import { pregnancyPostpartumData } from "@/modules/pregnancy-postpartum/data";
import { mentalHealthData } from "@/modules/mental-health/data";
import { fertilityData } from "@/modules/fertility/data";
import { menopauseData } from "@/modules/menopause/data";

export type ModuleSlug =
  | "pcos"
  | "reproductive-health"
  | "medical-conditions"
  | "nutrition-weight"
  | "pregnancy-postpartum"
  | "mental-health"
  | "fertility"
  | "menopause";

export type PastelTone =
  | "pink" | "lilac" | "slate" | "peach" | "mint" | "blue" | "yellow" | "rose";

export interface Article {
  title: string;
  summary: string;
  body: string[];
}

export interface Story {
  name: string;
  quote: string;
  body: string[];
}

export interface ModuleContent {
  slug: ModuleSlug;
  title: string;
  subtitle: string;
  iconKey: string;
  tone: PastelTone;
  understanding: { label: string; tone: "peach" | "blue" | "rose" | "mint"; body: string[] }[];
  articles: Article[];
  tips: string[];
  stories: Story[];
  myths: { myth: string; fact: string }[];
}

const trackersBase = ["Energy", "Sleep", "Self Care", "BMI", "Physical Activity", "Mood"];
export const TRACKERS = trackersBase;

export const modules: Record<ModuleSlug, ModuleContent> = {
  pcos: pcosData,
  "reproductive-health": reproductiveHealthData,
  "medical-conditions": medicalConditionsData,
  "nutrition-weight": nutritionWeightData,
  "pregnancy-postpartum": pregnancyPostpartumData,
  "mental-health": mentalHealthData,
  fertility: fertilityData,
  menopause: menopauseData,
};

export const supportCards: { slug: ModuleSlug; title: string; tone: PastelTone; iconKey: string }[] = [
  { slug: "pcos", title: "PCOS", tone: "pink", iconKey: "Flower" },
  { slug: "reproductive-health", title: "Reproductive Health", tone: "lilac", iconKey: "Flower2" },
  { slug: "medical-conditions", title: "Medical Conditions", tone: "slate", iconKey: "ClipboardPlus" },
  { slug: "nutrition-weight", title: "Nutrition & Weight", tone: "peach", iconKey: "Salad" },
  { slug: "pregnancy-postpartum", title: "Pregnancy & Postpartum", tone: "mint", iconKey: "Baby" },
  { slug: "mental-health", title: "Mental Health", tone: "blue", iconKey: "Brain" },
  { slug: "fertility", title: "Fertility", tone: "rose", iconKey: "Sprout" },
  { slug: "menopause", title: "Menopause", tone: "mint", iconKey: "HeartPulse" },
];

export const tipCards = [
  { title: "Hair & Skin", slug: "hair-skin", gradient: "bg-tip-teal", iconKey: "Wind" },
  { title: "Food", slug: "food", gradient: "bg-tip-orange", iconKey: "UtensilsCrossed" },
  { title: "Weight Loss", slug: "weight-loss", gradient: "bg-tip-pink", iconKey: "Scale" },
  { title: "PMS", slug: "pms", gradient: "bg-tip-purple", iconKey: "Flower" },
] as const;
