import {
  Brain, Syringe, Flower2, Dumbbell, Stethoscope, Heart, ActivitySquare,
  Leaf, Sparkles, CigaretteOff, Footprints, Wallet, RefreshCw, Rainbow,
  PhoneCall, ClipboardList, Lightbulb, Headphones, Music, BarChart3,
  Pencil, BookOpen, Video, Droplet, Trophy, Target, Salad, Award, Star,
  Smile, Meh, Frown, Annoyed, Laugh, type LucideIcon,
} from "lucide-react";

/**
 * Mapping of emoji → Lucide icon component.
 * Use <EmojiIcon emoji="📋" /> at render sites instead of inlining emoji glyphs.
 * Falls back to rendering the emoji char if no mapping exists.
 */
const MAP: Record<string, LucideIcon> = {
  "🧠": Brain,
  "💉": Syringe,
  "🌸": Flower2,
  "💪": Dumbbell,
  "🩺": Stethoscope,
  "❤️": Heart, "❤": Heart,
  "🏋️": Dumbbell, "🏋": Dumbbell,
  "🧘": Leaf,
  "🕉️": Sparkles,
  "🚭": CigaretteOff,
  "👟": Footprints,
  "💰": Wallet,
  "🔄": RefreshCw,
  "🏳️‍🌈": Rainbow, "🏳": Rainbow, "🌈": Rainbow,
  "📞": PhoneCall, "☎️": PhoneCall, "☎": PhoneCall,
  "📋": ClipboardList,
  "💡": Lightbulb,
  "🎧": Headphones,
  "🎵": Music,
  "📊": BarChart3,
  "✍️": Pencil, "✍": Pencil,
  "📖": BookOpen,
  "🎥": Video,
  "💧": Droplet,
  "🏆": Trophy,
  "🎯": Target,
  "🥗": Salad,
  "🦴": ActivitySquare,
  "💼": Award,
  "👨‍⚕️": Stethoscope,
  "⭐": Star, "★": Star,
  "😊": Laugh, "🙂": Smile, "😐": Meh, "😟": Frown, "😢": Annoyed,
};

interface Props {
  emoji?: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function EmojiIcon({ emoji, className, size = 20, strokeWidth = 2 }: Props) {
  if (!emoji) return null;
  const Icon = MAP[emoji];
  if (!Icon) return <span className={className} aria-hidden>{emoji}</span>;
  return <Icon className={className} size={size} strokeWidth={strokeWidth} aria-hidden />;
}

export function getIconForEmoji(emoji: string): LucideIcon | null {
  return MAP[emoji] ?? null;
}
