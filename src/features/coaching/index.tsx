import type { FeatureModule } from "../registry";
import { CoachingAreaPage } from "./pages/CoachingAreaPage";
import { CoachingExercisePage } from "./pages/CoachingExercisePage";
import { CoachingLearnPage } from "./pages/CoachingLearnPage";
import { CoachingResourcePage } from "./pages/CoachingResourcePage";

export { coachingAreas } from "./data/coachingAreas";
export { slugify as slugifyCoachingExercise } from "./lib/slug";

export const coachingFeature: FeatureModule = {
  id: "coaching",
  label: "Coaching",
  description: "16 coaching areas with exercises, lessons and resources",
  entryPath: "/coaching-areas",
  routes: [
    { path: "/coaching/:areaId", element: <CoachingAreaPage />, entry: true },
    { path: "/coaching/:areaId/exercise/:exerciseSlug", element: <CoachingExercisePage /> },
    { path: "/coaching/:areaId/learn/:index", element: <CoachingLearnPage /> },
    { path: "/coaching/:areaId/resource/:resourceType", element: <CoachingResourcePage /> },
  ],
};