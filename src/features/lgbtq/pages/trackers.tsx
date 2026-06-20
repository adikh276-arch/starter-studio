import { Smile, Moon, Sparkles, Activity, HeartPulse } from "lucide-react";
import { DailyLogPage } from "../../_shared/DailyLogPage";

/**
 * In-app replacements for the previous external tracker links on the LGBTQ+
 * self-care hub. Each tracker is a thin instance of the shared `DailyLogPage`
 * with its own storage key, intensity label and tag vocabulary.
 */
const BACK = "/lgbtq";

export const MoodTrackerPage = () => (
  <DailyLogPage
    title="Mood Tracker"
    subtitle="Log how you're feeling, what shaped today, and spot patterns over time."
    icon={Smile}
    storageKey="lgbtq:mood-log"
    backTo={BACK}
    ratingLabel="Mood"
    tagOptions={["Joyful", "Calm", "Anxious", "Low", "Angry", "Hopeful", "Lonely", "Proud", "Tired", "Energised"]}
  />
);

export const SleepTrackerPage = () => (
  <DailyLogPage
    title="Sleep Tracker"
    subtitle="Track sleep quality and what helped or got in the way."
    icon={Moon}
    storageKey="lgbtq:sleep-log"
    backTo={BACK}
    ratingLabel="Sleep quality"
    tagOptions={["Slept deeply", "Restless", "Woke up tired", "Stress dreams", "Late night", "Early wake", "Naps", "Screen before bed"]}
    notesPlaceholder="Bedtime, wake time, anything notable…"
  />
);

export const GratitudeTrackerPage = () => (
  <DailyLogPage
    title="Gratitude Tracker"
    subtitle="Capture small things that meant something today."
    icon={Sparkles}
    storageKey="lgbtq:gratitude-log"
    backTo={BACK}
    ratingLabel="Gratitude"
    tagOptions={["A person", "A moment", "Myself", "My body", "Community", "A win", "Nature", "Rest"]}
    notesPlaceholder="One small thing you're grateful for…"
  />
);

export const VibeTrackerPage = () => (
  <DailyLogPage
    title="Vibe Tracker"
    subtitle="A quick read on your overall energy and vibe today."
    icon={Activity}
    storageKey="lgbtq:vibe-log"
    backTo={BACK}
    ratingLabel="Vibe"
    tagOptions={["Grounded", "Scattered", "Playful", "Heavy", "Sharp", "Fuzzy", "Open", "Guarded"]}
  />
);

export const DailyCareTrackerPage = () => (
  <DailyLogPage
    title="Daily Self-Care"
    subtitle="Tick the small acts of care that made it into your day."
    icon={HeartPulse}
    storageKey="lgbtq:daily-care-log"
    backTo={BACK}
    ratingLabel="Care today"
    tagOptions={[
      "Movement", "Hydration", "Nourishing meal", "Time outside",
      "Connected with someone", "Rest", "Boundaries", "Creative time",
      "Therapy / journaling", "Affirmation",
    ]}
    notesPlaceholder="One care choice you're proud of today…"
  />
);