"use client";
import type { PastelTone } from "@/features/women/data/modules";

// Static class maps so Tailwind's JIT picks them up.
export const toneBg: Record<PastelTone, string> = {
  pink: "bg-pastel-pink",
  lilac: "bg-pastel-lilac",
  slate: "bg-pastel-slate",
  peach: "bg-pastel-peach",
  mint: "bg-pastel-mint",
  blue: "bg-pastel-blue",
  yellow: "bg-pastel-yellow",
  rose: "bg-pastel-rose",
};

export const toneFg: Record<PastelTone, string> = {
  pink: "text-pastel-pink-foreground",
  lilac: "text-pastel-lilac-foreground",
  slate: "text-pastel-slate-foreground",
  peach: "text-pastel-peach-foreground",
  mint: "text-pastel-mint-foreground",
  blue: "text-pastel-blue-foreground",
  yellow: "text-pastel-yellow-foreground",
  rose: "text-pastel-rose-foreground",
};

export const toneBorder: Record<PastelTone, string> = {
  pink: "border-l-pastel-pink-foreground",
  lilac: "border-l-pastel-lilac-foreground",
  slate: "border-l-pastel-slate-foreground",
  peach: "border-l-pastel-peach-foreground",
  mint: "border-l-pastel-mint-foreground",
  blue: "border-l-pastel-blue-foreground",
  yellow: "border-l-pastel-yellow-foreground",
  rose: "border-l-pastel-rose-foreground",
};

// Tones used inside understanding cards — solid filled icon tile + tinted text
export const understandingTile: Record<"peach" | "blue" | "rose" | "mint", { wrap: string; tile: string; icon: string; text: string }> = {
  peach: { wrap: "bg-pastel-peach", tile: "bg-[hsl(22_90%_55%)]", icon: "text-white", text: "text-pastel-peach-foreground" },
  blue:  { wrap: "bg-pastel-blue",  tile: "bg-[hsl(215_85%_60%)]", icon: "text-white", text: "text-pastel-blue-foreground" },
  rose:  { wrap: "bg-pastel-rose",  tile: "bg-[hsl(335_75%_62%)]", icon: "text-white", text: "text-pastel-rose-foreground" },
  mint:  { wrap: "bg-pastel-mint",  tile: "bg-[hsl(155_55%_42%)]", icon: "text-white", text: "text-pastel-mint-foreground" },
};
