/**
 * Shared content types for the self-care quiz and check-in exercises.
 * Lives next to the data so the data file has no dependency on the
 * components that consume it.
 */

export interface QuizQuestion {
  text: string;
  options: string[];
}

export interface QuizTemplate {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
}

export interface CheckinCategory {
  label: string;
  color: string;
}

export interface CheckinTemplate {
  id: string;
  title: string;
  description: string;
  categories: CheckinCategory[];
}