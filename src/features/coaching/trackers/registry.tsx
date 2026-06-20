/**
 * Registry mapping each `specialExercises` kind (defined in
 * `data/exerciseTemplates.ts`) to the React component that renders it.
 *
 * Every tracker is a standalone module that takes `{ onBack }` (and, for the
 * two self-care templates, a `template` prop). Adding a new tracker = drop a
 * file in this folder + add one entry here.
 */
import type { ComponentType } from "react";
import type { specialExercises } from "../data/exerciseTemplates";
import { selfCareQuiz, selfCareCheckin } from "../data/wellnessExercises";

import BigRocksExercise from "./BigRocksExercise";
import DiscoverYourselfExercise from "./DiscoverYourselfExercise";
import GetMotivatedExercise from "./GetMotivatedExercise";
import GratitudeDiaryExercise from "./GratitudeDiaryExercise";
import IntuitionExercise from "./IntuitionExercise";
import LoveAndLoatheExercise from "./LoveAndLoatheExercise";
import RockingChairExercise from "./RockingChairExercise";
import SelfCareCheckinExercise from "./SelfCareCheckinExercise";
import SelfCareQuizExercise from "./SelfCareQuizExercise";
import SmartGoalsExercise from "./SmartGoalsExercise";
import StopProcrastinatingExercise from "./StopProcrastinatingExercise";
import WackyWildGoalExercise from "./WackyWildGoalExercise";
import WeeklySuccessPlannerExercise from "./WeeklySuccessPlannerExercise";

export type SpecialKind = (typeof specialExercises)[keyof typeof specialExercises];

/**
 * Renders a special tracker. Wrapped uniformly so callers don't need to know
 * which trackers require extra props (`template`).
 */
export interface TrackerComponentProps {
  onBack: () => void;
}

type TrackerEntry = ComponentType<TrackerComponentProps>;

function wrapQuiz(): TrackerEntry {
  return (props) => <SelfCareQuizExercise template={selfCareQuiz} {...props} />;
}

function wrapCheckin(): TrackerEntry {
  return (props) => <SelfCareCheckinExercise template={selfCareCheckin} {...props} />;
}

export const trackerRegistry: Record<SpecialKind, TrackerEntry> = {
  "big-rocks": BigRocksExercise,
  "discover-yourself": DiscoverYourselfExercise,
  "get-motivated": GetMotivatedExercise,
  "gratitude-diary": GratitudeDiaryExercise,
  intuition: IntuitionExercise,
  "love-loathe": LoveAndLoatheExercise,
  "rocking-chair": RockingChairExercise,
  checkin: wrapCheckin(),
  quiz: wrapQuiz(),
  "smart-goals": SmartGoalsExercise,
  procrastinating: StopProcrastinatingExercise,
  "wacky-wild-goal": WackyWildGoalExercise,
  planner: WeeklySuccessPlannerExercise,
};
