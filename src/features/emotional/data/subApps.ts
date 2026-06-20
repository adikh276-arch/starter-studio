import {
  Wind, Sparkles, Heart, ScrollText, Activity, Lightbulb, Brain,
  Moon, Apple, Compass, MessageCircle, BookOpen, ClipboardList,
  Play, FileText, Info, type LucideIcon,
} from "lucide-react";
import type { SubApp } from "../../_shared/types";

const tracker = "trackers";
const breath  = "breath_grounding";
const cog     = "cognitive";
const grief   = "grief";
const sleep   = "sleep";
const food    = "food_body";
const relate  = "relationships";
const learn   = "learn";
const exercises = "exercises";

export const emotionalSubApps: SubApp[] = [
  // Breath & grounding
  { id: "4-6-8-breathing",        label: "4-6-8 Breathing",       description: "Calm the nervous system with 4-6-8 breath.", icon: Wind,    category: breath },
  { id: "box-breathing",          label: "Box Breathing",         description: "A 4×4 breathing rhythm for focus.",          icon: Wind,    category: breath },
  { id: "5-4-3-2-1-grounding",    label: "5-4-3-2-1 Grounding",   description: "Senses-based grounding exercise.",           icon: Sparkles,category: breath },
  { id: "grounding-technique",    label: "Grounding Technique",   description: "Quick grounding to return to the body.",     icon: Sparkles,category: breath },
  { id: "the-pause-practice",     label: "The Pause Practice",    description: "A short pause to reset.",                    icon: Sparkles,category: breath },
  { id: "compassion-break",       label: "Compassion Break",      description: "A brief self-compassion break.",             icon: Heart,   category: breath },
  { id: "safe-space",             label: "Safe Space",            description: "Imagine and rest in your safe space.",       icon: Sparkles,category: breath },
  { id: "window-of-tolerance",    label: "Window of Tolerance",   description: "Stay inside your window of tolerance.",      icon: Activity,category: breath },
  { id: "guided-series",          label: "Guided Series",         description: "Guided audio series for emotional care.",    icon: Sparkles,category: breath },

  // Cognitive / journaling
  { id: "name-your-mind",         label: "Name Your Mind",        description: "Name the storyteller in your head.",         icon: Brain,   category: cog },
  { id: "diffusion-technique",    label: "Defusion Technique",    description: "Step back from sticky thoughts.",            icon: Brain,   category: cog },
  { id: "mind-reading-check",     label: "Mind-Reading Check",    description: "Catch mind-reading distortions.",            icon: Brain,   category: cog },
  { id: "prediction-vs-reality",  label: "Prediction vs Reality", description: "Check predictions against reality.",         icon: Brain,   category: cog },
  { id: "why-brain-gets-stuck",   label: "Why Your Brain Gets Stuck", description: "Learn why looping happens.",            icon: Lightbulb, category: cog },
  { id: "the-anger-shame-cycle",  label: "Anger-Shame Cycle",     description: "Understand and break the anger-shame loop.", icon: Brain,   category: cog },
  { id: "understanding-control",  label: "Understanding Control", description: "What you can and can't control.",            icon: Compass, category: cog },
  { id: "brain-dump-and-sort",    label: "Brain Dump & Sort",     description: "Empty your mind, then sort it.",             icon: ScrollText, category: cog },
  { id: "doodle-burst",           label: "Doodle Burst",          description: "Quick doodle to discharge tension.",         icon: ScrollText, category: cog },
  { id: "a-letter-to-self",       label: "Letter to Self",        description: "Write a letter to yourself.",                icon: ScrollText, category: cog },
  { id: "the-unsent-letter",      label: "The Unsent Letter",     description: "Write the letter you won't send.",           icon: ScrollText, category: cog },
  { id: "write-your-narrative",   label: "Write Your Narrative",  description: "Re-author your personal story.",             icon: ScrollText, category: cog },
  { id: "personal-mission-statement", label: "Personal Mission Statement", description: "Draft a mission for your life.",   icon: Compass,    category: cog },
  { id: "know-your-values",       label: "Know Your Values",      description: "Identify and rank your values.",             icon: Compass,    category: cog },
  { id: "what-do-i-need",         label: "What Do I Need?",       description: "Surface what you actually need.",            icon: Lightbulb,  category: cog },

  // Grief
  { id: "continuing-bonds",       label: "Continuing Bonds",      description: "Maintain a healthy bond with the lost.",     icon: Heart,    category: grief },
  { id: "memory-box",             label: "Memory Box",            description: "Build a digital memory box.",                icon: BookOpen, category: grief },
  { id: "missing-someone",        label: "Missing Someone",       description: "Tend to moments of missing.",                icon: Heart,    category: grief },
  { id: "grief-journey-map",      label: "Grief Journey Map",     description: "Map your grief journey over time.",          icon: Compass,  category: grief },
  { id: "a-gentle-wish",          label: "A Gentle Wish",         description: "Offer a gentle wish to your loss.",          icon: Heart,    category: grief },
  { id: "a-pause-for-appreciation", label: "Pause for Appreciation", description: "Pause and appreciate what remains.",     icon: Heart,    category: grief },

  // Sleep
  { id: "sleep-audit",            label: "Sleep Audit",           description: "Audit your sleep hygiene.",                  icon: Moon, category: sleep },
  { id: "sleep-cycle-guide",      label: "Sleep Cycle Guide",     description: "Understand your sleep cycles.",              icon: Moon, category: sleep },
  { id: "sleep-guide",            label: "Sleep Guide",           description: "A practical guide to better sleep.",         icon: Moon, category: sleep },
  { id: "sleep-window-planner",   label: "Sleep Window Planner",  description: "Plan your ideal sleep window.",              icon: Moon, category: sleep },
  { id: "environment-optimization", label: "Environment Optimization", description: "Tune your sleep environment.",         icon: Moon, category: sleep },

  // Food / body
  { id: "challenging-food-rules", label: "Challenge Food Rules",  description: "Identify and challenge food rules.",         icon: Apple, category: food },
  { id: "food-emotion-map",       label: "Food-Emotion Map",      description: "Map food to emotions.",                      icon: Apple, category: food },
  { id: "physical-activity-log",  label: "Physical Activity Log", description: "Log movement and energy.",                   icon: Activity, category: food },

  // Relationships
  { id: "redraw-your-circle",     label: "Redraw Your Circle",    description: "Reshape your inner circle.",                 icon: MessageCircle, category: relate },
  { id: "relationship-patterns-unpacked", label: "Relationship Patterns", description: "Unpack repeating relationship patterns.", icon: MessageCircle, category: relate },
  { id: "repair-and-reconnect",   label: "Repair & Reconnect",    description: "Repair a rupture and reconnect.",            icon: MessageCircle, category: relate },

  // Trackers
  { id: "care-tracker",           label: "Care Tracker",          description: "Track acts of self-care.",                   icon: Activity, category: tracker },
  { id: "energy-tracker",         label: "Energy Tracker",        description: "Track energy across the day.",               icon: Activity, category: tracker },
  { id: "vibe-tracker",           label: "Vibe Tracker",          description: "Tag the vibe of each moment.",               icon: Activity, category: tracker },
  { id: "gratitude-tracker",      label: "Gratitude Tracker",     description: "Daily gratitude tracking.",                  icon: Heart,    category: tracker },
  { id: "daily-gratitude-diary",  label: "Gratitude Diary",       description: "A diary devoted to gratitude.",              icon: ScrollText, category: tracker },
  { id: "joyful-activities",      label: "Joyful Activities",     description: "Plan and track joyful activities.",          icon: Sparkles, category: tracker },
  { id: "self-care-bingo",        label: "Self-Care Bingo",       description: "Self-care bingo for the week.",              icon: Sparkles, category: tracker },
  { id: "concerns",               label: "Concerns",              description: "Capture and triage concerns.",               icon: ClipboardList, category: tracker },
  { id: "what-are-your-habits",   label: "Your Habits",           description: "Reflect on your current habits.",            icon: Activity, category: tracker },
  { id: "affirmations",           label: "Affirmations",          description: "Daily affirmations practice.",               icon: Heart,    category: tracker },

  // Learn
  { id: "anger-facts-myths",      label: "Anger Facts & Myths",   description: "Common anger myths, busted.",                icon: Lightbulb, category: learn },
  { id: "anxiety-tips",           label: "Anxiety Tips",          description: "Quick tips for anxiety.",                    icon: Lightbulb, category: learn },
  { id: "depression-tips",        label: "Depression Tips",       description: "Practical tips for depression.",             icon: Lightbulb, category: learn },
  { id: "stress-tips",            label: "Stress Tips",           description: "Quick stress-relief tips.",                  icon: Lightbulb, category: learn },
  { id: "real-stories-to-overcome-anxiety", label: "Stories: Overcoming Anxiety", description: "Real stories from real people.", icon: ScrollText, category: learn },
  { id: "topics",                 label: "Topics",                description: "Browse all emotional topics.",               icon: BookOpen,  category: learn },

  // Added for Depression Page
  { id: "guided-imagery",         label: "Guided Imagery",        description: "Visualizing a peaceful place.",              icon: Play,    category: exercises },
  { id: "daily-self-care",        label: "Daily Self Care",       description: "Track your daily self-care habits.",         icon: Heart,   category: tracker },
  { id: "depression-articles",    label: "Depression Articles",   description: "Read articles about managing depression.",   icon: FileText,category: learn },
  { id: "depression-stories",     label: "Depression Stories",    description: "Real stories of overcoming depression.",      icon: BookOpen,category: learn },
  { id: "depression-myths",       label: "Depression Myths",      description: "Busting common myths about depression.",    icon: Info,    category: learn },
];
