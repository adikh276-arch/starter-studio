import {
  Heart, MessageCircle, Users, BookOpen, Sparkles, ShieldCheck, Activity,
  Smile, HelpCircle, ScrollText, Compass, Lightbulb, type LucideIcon,
} from "lucide-react";
import type { SubApp } from "../../_shared/types";

export const lgbtqSubApps: SubApp[] = [
  // Identity guides
  { id: "lesbian-guide",     label: "Lesbian Guide",          description: "Comprehensive guide for lesbian wellbeing.", icon: BookOpen, category: "guides" },
  { id: "gay-guide",         label: "Gay Guide",              description: "Comprehensive guide for gay wellbeing.",     icon: BookOpen, category: "guides" },
  { id: "bisexual-guide",    label: "Bisexual Guide",         description: "Comprehensive guide for bisexual wellbeing.",icon: BookOpen, category: "guides" },
  { id: "trans-guide",       label: "Trans Guide",            description: "Comprehensive guide for trans wellbeing.",   icon: BookOpen, category: "guides" },

  // Coming-out & identity
  { id: "bi-coming-out",         label: "Bi Coming Out",            description: "Support and tools for bi coming-out journeys.", icon: Sparkles, category: "identity" },
  { id: "trans-coming-out",      label: "Trans Coming Out",         description: "Support and tools for trans coming-out journeys.", icon: Sparkles, category: "identity" },
  { id: "honor-your-identity",   label: "Honor Your Identity",      description: "Affirming reflections to honor who you are.",   icon: Heart,    category: "identity" },
  { id: "identity-exploration",  label: "Identity Exploration",     description: "Guided prompts to explore your identity.",       icon: Compass,  category: "identity" },
  { id: "identity-journey",      label: "Identity Journey",         description: "Track milestones on your identity journey.",     icon: Compass,  category: "identity" },
  { id: "identity-reflection",   label: "Identity Reflection",      description: "Reflect on identity moments and meaning.",       icon: Compass,  category: "identity" },
  { id: "bi-identity-affirmations", label: "Bi Identity Affirmations", description: "Daily affirmations for bi identity.",         icon: Heart,    category: "identity" },
  { id: "joy-pride-trans",       label: "Joy & Pride (Trans)",      description: "Capture trans joy and pride moments.",           icon: Smile,    category: "identity" },
  { id: "pride-spectrum",        label: "Pride Spectrum",           description: "Explore the full spectrum of pride.",            icon: Sparkles, category: "identity" },
  { id: "pride-mirror-moments",  label: "Pride Mirror Moments",     description: "Mirror affirmation practice for pride.",         icon: Heart,    category: "identity" },
  { id: "pride-journal",         label: "Pride Journal",            description: "Journal your pride and progress.",               icon: ScrollText, category: "identity" },

  // Check-ins & trackers
  { id: "gentle-check-in",       label: "Gentle Check-in",          description: "A soft, low-pressure mood and wellness check-in.", icon: Activity, category: "checkins" },
  { id: "lgbtq-assessments",     label: "LGBTQ+ Assessments",       description: "Short assessments tailored for LGBTQ+ wellbeing.", icon: Activity, category: "checkins" },
  { id: "trackers",              label: "All Trackers",             description: "Browse every LGBTQ+ tracker.",                    icon: Activity, category: "checkins" },

  // Conversations & relationships
  { id: "bi-family-friends-convo", label: "Family & Friends Talks", description: "Scripts and prep for family & friends talks.",   icon: MessageCircle, category: "relationships" },
  { id: "find-your-community",     label: "Find Your Community",    description: "Connect with affirming communities.",            icon: Users,         category: "relationships" },
  { id: "create-safe-spaces",      label: "Create Safe Spaces",     description: "Practical guidance for creating safe spaces.",   icon: ShieldCheck,   category: "relationships" },
  { id: "set-gentle-boundaries",   label: "Set Gentle Boundaries",  description: "Tools to set and hold healthy boundaries.",      icon: ShieldCheck,   category: "relationships" },
  { id: "affirming-self-talk",     label: "Affirming Self-Talk",    description: "Rewire inner dialogue with affirmation.",        icon: Heart,         category: "relationships" },

  // Wellbeing
  { id: "bi-mental-health",        label: "Bi Mental Health",       description: "Mental-health support tailored for bi folks.",   icon: Activity, category: "wellbeing" },
  { id: "trans-and-mental-health", label: "Trans Mental Health",    description: "Mental-health support tailored for trans folks.", icon: Activity, category: "wellbeing" },
  { id: "dealing-with-dysphoria",  label: "Dealing With Dysphoria", description: "Coping practices for dysphoric episodes.",        icon: Heart,    category: "wellbeing" },
  { id: "medical-transition",      label: "Medical Transition",     description: "Information and support for medical transition.", icon: Activity, category: "wellbeing" },
  { id: "process-grief-loss",      label: "Process Grief & Loss",   description: "Move through grief and loss with care.",          icon: Heart,    category: "wellbeing" },
  { id: "find-your-right-time",    label: "Find Your Right Time",   description: "Decide when (and if) to disclose.",               icon: Compass,  category: "wellbeing" },

  // Learn & stories
  { id: "lgbtq-articles",       label: "Articles",          description: "Articles for the LGBTQ+ community.",        icon: BookOpen,  category: "learn" },
  { id: "lgbtq-myths-facts",    label: "Myths & Facts",     description: "Bust common myths with evidence.",          icon: Lightbulb, category: "learn" },
  { id: "lgbtq-tips",           label: "Tips",              description: "Quick, actionable wellbeing tips.",         icon: Lightbulb, category: "learn" },
  { id: "bisexual-stories",     label: "Bisexual Stories",  description: "Real stories from the bi community.",       icon: ScrollText, category: "learn" },
  { id: "lgbtq-hub",            label: "Resource Hub",      description: "All LGBTQ+ resources in one place.",        icon: HelpCircle, category: "learn" },
];
