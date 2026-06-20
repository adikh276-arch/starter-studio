import { lazy, Suspense } from "react";
import type { FeatureModule } from "../registry";
// Note: You must manually create or import a FitnessSubAppPage if you want to use the polymorphic route
import { useParams } from "react-router";

const pageMap: Record<string, () => Promise<{ default: React.ComponentType<any> }>> = {
  "bmicalculator": () => import("./activities/BMICalculator"),
  "calorieburner": () => import("./activities/CalorieBurner"),
  "diabetesdietguide": () => import("./activities/DiabetesDietGuide"),
  "fasttimer": () => import("./activities/FastTimer"),
  "flexibilitymobilityguide": () => import("./activities/FlexibilityMobilityGuide"),
  "guthealthguide": () => import("./activities/GutHealthGuide"),
  "hearthealthguide": () => import("./activities/HeartHealthGuide"),
  "hiitcardioguide": () => import("./activities/HIITCardioGuide"),
  "homeworkoutsguide": () => import("./activities/HomeWorkoutsGuide"),
  "intermittentfastingguide": () => import("./activities/IntermittentFastingGuide"),
  "ketobasicsguide": () => import("./activities/KetoBasicsGuide"),
  "macrocalculator": () => import("./activities/MacroCalculator"),
  "macroeducationmodule": () => import("./activities/MacroEducationModule"),
  "musclegainguide": () => import("./activities/MuscleGainGuide"),
  "others-dailysugarease-dailysugareaseexercise": () => import("./activities/Others/DailySugarEase/DailySugarEaseExercise"),
  "others-dailysugarease-feedbackscreen": () => import("./activities/Others/DailySugarEase/FeedbackScreen"),
  "others-dailysugarease-foodloggingscreen": () => import("./activities/Others/DailySugarEase/FoodLoggingScreen"),
  "others-dailysugarease-startscreen": () => import("./activities/Others/DailySugarEase/StartScreen"),
  "others-dailysugarease-summaryscreen": () => import("./activities/Others/DailySugarEase/SummaryScreen"),
  "others-fooddiary-feelingsscreen": () => import("./activities/Others/FoodDiary/FeelingsScreen"),
  "others-fooddiary-fooddiaryexercise": () => import("./activities/Others/FoodDiary/FoodDiaryExercise"),
  "others-fooddiary-historyscreen": () => import("./activities/Others/FoodDiary/HistoryScreen"),
  "others-fooddiary-introscreen": () => import("./activities/Others/FoodDiary/IntroScreen"),
  "others-fooddiary-meallogscreen": () => import("./activities/Others/FoodDiary/MealLogScreen"),
  "others-fooddiary-progressdots": () => import("./activities/Others/FoodDiary/ProgressDots"),
  "others-fooddiary-reflectionscreen": () => import("./activities/Others/FoodDiary/ReflectionScreen"),
  "others-healthyrecipelog-healthyrecipelogexercise": () => import("./activities/Others/HealthyRecipeLog/HealthyRecipeLogExercise"),
  "others-healthyrecipelog-historydrawer": () => import("./activities/Others/HealthyRecipeLog/HistoryDrawer"),
  "others-healthyrecipelog-progressbar": () => import("./activities/Others/HealthyRecipeLog/ProgressBar"),
  "others-healthyrecipelog-screen1welcome": () => import("./activities/Others/HealthyRecipeLog/Screen1Welcome"),
  "others-healthyrecipelog-screen2recipe": () => import("./activities/Others/HealthyRecipeLog/Screen2Recipe"),
  "others-healthyrecipelog-screen3rating": () => import("./activities/Others/HealthyRecipeLog/Screen3Rating"),
  "others-healthyrecipelog-screen4done": () => import("./activities/Others/HealthyRecipeLog/Screen4Done"),
  "others-healthyrecipelog-screenclosing": () => import("./activities/Others/HealthyRecipeLog/ScreenClosing"),
  "others-planyourplate-planyourplateexercise": () => import("./activities/Others/PlanYourPlate/PlanYourPlateExercise"),
  "posturecorrectionguide": () => import("./activities/PostureCorrectionGuide"),
  "steptracker": () => import("./activities/StepTracker"),
  "strengthtrainingguide": () => import("./activities/StrengthTrainingGuide"),
  "vegannutritionguide": () => import("./activities/VeganNutritionGuide"),
  "waterintaketracker": () => import("./activities/WaterIntakeTracker"),
  "weightlossguide": () => import("./activities/WeightLossGuide"),
  "yogaflexibilityguide": () => import("./activities/YogaFlexibilityGuide"),
};

// Auto-generate routes from pageMap
const overrideRoutes = Object.entries(pageMap).map(([id, loader]) => {
  const C = lazy(loader);
  return {
    path: `/fitness/${id}`,
    element: (
      <Suspense fallback={null}>
        <C onBack={() => window.history.back()} />
      </Suspense>
    ),
  };
});

export const fitnessFeature: FeatureModule = {
  id: "fitness",
  label: "Fitness Wellbeing",
  description: "Workouts, guides, and trackers",
  entryPath: "/fitness-wellness-self-care", // Points to the global hub route
  routes: [
    ...overrideRoutes,
  ],
};
