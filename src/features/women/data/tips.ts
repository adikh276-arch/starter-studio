"use client";
import { tipPagesData } from "@/features/women/modules/tips/data";

export type TipSlug = "hair-skin" | "food" | "weight-loss" | "pms";

export interface TipItem {
  title: string;
  subtitle: string;
  iconKey: string;
  detail: string;
}

export interface TipPage {
  slug: TipSlug;
  title: string;
  subtitle: string;
  iconKey: string;
  tone: "teal" | "orange" | "pink" | "purple";
  items: TipItem[];
}

export const tipPages: Record<TipSlug, TipPage> = tipPagesData;
