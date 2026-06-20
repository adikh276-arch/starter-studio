import {
  RefreshCcw, Footprints, Boxes, Brain, Sparkles, ClipboardList, Heart,
  Lightbulb, ScrollText, Wind, Activity, Compass, Eye, BookOpen, MessageCircle,
  ShieldCheck, type LucideIcon,
} from "lucide-react";
import type { SubApp } from "../../_shared/types";

export const ocdSubApps: SubApp[] = [
  // OCD types (educational)
  { id: "contamination-ocd",  label: "Contamination OCD", description: "Understand and manage contamination OCD.", icon: BookOpen, category: "types" },
  { id: "hoarding-ocd",       label: "Hoarding OCD",      description: "Understand and manage hoarding OCD.",      icon: BookOpen, category: "types" },
  { id: "health-ocd",         label: "Health OCD",        description: "Understand and manage health-anxiety OCD.",icon: BookOpen, category: "types" },
  { id: "pure-o-ocd",         label: "Pure-O OCD",        description: "Understand and manage Pure-O OCD.",        icon: BookOpen, category: "types" },
  { id: "trichotillomania",   label: "Trichotillomania",  description: "Tools for trichotillomania (hair-pulling).", icon: BookOpen, category: "types" },

  // Trackers
  { id: "mood_tracker",        label: "Mood Tracker",         description: "Track mood throughout the day.",                 icon: Activity, category: "trackers" },
  { id: "vibe_tracker",        label: "Vibe Tracker",         description: "Tag the vibe of each moment.",                   icon: Activity, category: "trackers" },
  { id: "progress_tracker",    label: "Progress Tracker",     description: "Visualise your OCD progress over time.",         icon: Activity, category: "trackers" },
  { id: "ocd_moments",         label: "OCD Moments",          description: "Log specific OCD moments and triggers.",         icon: ClipboardList, category: "trackers" },
  { id: "trigger_map",         label: "Trigger Map",          description: "Map and rate your common triggers.",             icon: Compass,  category: "trackers" },
  { id: "ritual_cost",         label: "Ritual Cost",          description: "Tally the cost of compulsions.",                 icon: ClipboardList, category: "trackers" },
  { id: "gratitude_logs",      label: "Gratitude Logs",       description: "Daily gratitude entries for resilience.",        icon: Heart,    category: "trackers" },
  { id: "daily_life",          label: "Daily Life",           description: "A simple daily-life journal.",                   icon: ScrollText, category: "trackers" },

  // Exercises
  { id: "anxiety_cycle",        label: "Anxiety Cycle",        description: "See and break the anxiety cycle.",              icon: RefreshCcw, category: "exercises" },
  { id: "ocd_cycle",            label: "OCD Cycle",            description: "Visualise the OCD cycle.",                       icon: RefreshCcw, category: "exercises" },
  { id: "brave_steps",          label: "Brave Steps",          description: "Take small brave steps against OCD.",            icon: Footprints, category: "exercises" },
  { id: "fear_ladder",          label: "Fear Ladder",          description: "Build an exposure ladder.",                      icon: Footprints, category: "exercises" },
  { id: "clutter_journal",      label: "Clutter Journal",      description: "Journal clutter and progress (hoarding).",       icon: Boxes,      category: "exercises" },
  { id: "discard_it",           label: "Discard It",           description: "Practice gentle discarding.",                    icon: Boxes,      category: "exercises" },
  { id: "one_thing_out",        label: "One Thing Out",        description: "Remove one item at a time.",                     icon: Boxes,      category: "exercises" },
  { id: "cognitive_distortions",label: "Cognitive Distortions",description: "Spot and reframe distortions.",                  icon: Brain,      category: "exercises" },
  { id: "reframe_thoughts",     label: "Reframe Thoughts",     description: "Reframe unhelpful thoughts.",                    icon: Brain,      category: "exercises" },
  { id: "thought_diffusion",    label: "Thought Diffusion",    description: "Defuse from sticky thoughts.",                   icon: Brain,      category: "exercises" },
  { id: "thought_surfing",      label: "Thought Surfing",      description: "Surf urges rather than fight them.",             icon: Wind,       category: "exercises" },
  { id: "thought_truth",        label: "Thought Truth-Check",  description: "Examine the truth of a thought.",                icon: Eye,        category: "exercises" },
  { id: "urge_surfing",         label: "Urge Surfing",         description: "Surf the wave of a compulsion urge.",            icon: Wind,       category: "exercises" },
  { id: "uncertainity_tolerance", label: "Uncertainty Tolerance", description: "Build tolerance to uncertainty.",            icon: ShieldCheck, category: "exercises" },
  { id: "uncertainity_acceptance",label: "Uncertainty Acceptance",description: "Accept uncertainty with care.",              icon: ShieldCheck, category: "exercises" },
  { id: "reassurance_resistance", label: "Resist Reassurance", description: "Reduce reassurance-seeking.",                    icon: ShieldCheck, category: "exercises" },
  { id: "response_guide",       label: "Response Guide",       description: "Choose a healthier response.",                   icon: Compass,    category: "exercises" },
  { id: "self_compassion",      label: "Self Compassion",      description: "Compassion practice for OCD.",                   icon: Heart,      category: "exercises" },
  { id: "metta_heart_guide",    label: "Metta Heart Guide",    description: "Loving-kindness meditation.",                    icon: Heart,      category: "exercises" },
  { id: "compassion-break",     label: "Compassion Break",     description: "A brief self-compassion break.",                 icon: Heart,      category: "exercises" },
  { id: "mindfulness",          label: "Mindfulness",          description: "Mindful awareness practices.",                   icon: Sparkles,   category: "exercises" },
  { id: "grounded_techniques",  label: "Grounding Techniques", description: "5-4-3-2-1 and other grounding tools.",           icon: Sparkles,   category: "exercises" },
  { id: "guided_imagery",       label: "Guided Imagery",       description: "Guided imagery for calming.",                    icon: Sparkles,   category: "exercises" },
  { id: "mirror_moments",       label: "Mirror Moments",       description: "Mirror affirmation practice.",                   icon: Eye,        category: "exercises" },
  { id: "letter_to_ocd",        label: "Letter to OCD",        description: "Write a letter to OCD.",                         icon: MessageCircle, category: "exercises" },
  { id: "quiet-focus-tool",     label: "Quiet Focus",          description: "Quiet focus session tool.",                      icon: Sparkles,   category: "exercises" },

  // Quizzes / learn
  { id: "truth_seeker_quiz",   label: "Truth-Seeker Quiz",     description: "Quiz: how reliable is the thought?",            icon: ClipboardList, category: "learn" },
  { id: "did_you_know",        label: "Did You Know",          description: "Bite-sized facts about OCD.",                   icon: Lightbulb,     category: "learn" },
  { id: "feelings_fact",       label: "Feelings vs Facts",     description: "Separate feelings from facts.",                 icon: Lightbulb,     category: "learn" },
  { id: "ocd_tips",            label: "OCD Tips",              description: "Quick OCD self-care tips.",                     icon: Lightbulb,     category: "learn" },
  { id: "ocd_success_stories", label: "Success Stories",       description: "Real stories of OCD recovery.",                 icon: ScrollText,    category: "learn" },
  { id: "ocd_management",      label: "OCD Management",        description: "A long-form management guide.",                 icon: BookOpen,      category: "learn" },
  { id: "ocd-treatment-guide", label: "Treatment Guide",       description: "Understand OCD treatment options.",             icon: BookOpen,      category: "learn" },
  { id: "what_is_health_ocd",  label: "What Is Health OCD",    description: "An intro to health-anxiety OCD.",               icon: BookOpen,      category: "learn" },

  // Hub
  { id: "hub",                 label: "OCD Hub",               description: "All OCD self-care in one place.",               icon: Compass,       category: "learn" },
];
