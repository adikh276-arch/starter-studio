import React, { lazy, Suspense } from "react";
import type { FeatureModule } from "../registry";

// Note: Ensure your hub (e.g. src/pages/EmotionalWellnessSelfCare.tsx) points here
export const emotionalFeature: FeatureModule = {
  id: "emotional",
  label: "Emotional Wellbeing",
  description: "Tools for anxiety, sleep, and emotional health",
  entryPath: "/self-care",
  routes: [
    {
      path: "/emotional/4-6-8-breathing",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/4-6-8-breathing"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/4_6_8_breathing/breathe",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/4_6_8_breathing/breathe"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/4_6_8_breathing/complete",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/4_6_8_breathing/complete"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/4_6_8_breathing",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/4_6_8_breathing"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/5-4-3-2-1-grounding",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/5-4-3-2-1-grounding"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/5_4_3_2_1_grounding",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/5_4_3_2_1_grounding"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/a-gentle-wish",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/a-gentle-wish"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/a-letter-to-self",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/a-letter-to-self"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/a-pause-for-appreciation",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/a-pause-for-appreciation"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/affirmations",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/affirmations"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/anger-facts-myths",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/anger-facts-myths"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/anxiety-tips",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/anxiety-tips"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/box-breathing",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/box-breathing"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/brain-dump-and-sort",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/brain-dump-and-sort"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/care-tracker",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/care-tracker"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/challenging-food-rules",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/challenging-food-rules"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/compassion-break",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/compassion-break"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/concerns/:concern/:type",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/concerns/_concern/_type"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/continuing-bonds",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/continuing-bonds"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/daily-gratitude-diary",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/daily-gratitude-diary"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/depression-tips",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/depression-tips"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/diffusion-technique",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/diffusion-technique"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/doodle-burst",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/doodle-burst"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/energy-tracker",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/energy-tracker"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/environment-optimization",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/environment-optimization"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/food-emotion-map",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/food-emotion-map"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/gratitude-tracker",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/gratitude-tracker"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/grief-journey-map",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/grief-journey-map"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/grounding-technique",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/grounding-technique"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/guided-series/:concern",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/guided-series/_concern"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/guided-series/:concern/:activityName",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/guided-series/_concern/_activityName"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/joyful-activities",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/joyful-activities"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/know-your-values",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/know-your-values"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/memory-box",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/memory-box"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/mind-reading-check",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/mind-reading-check"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/missing-someone",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/missing-someone"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/name-your-mind",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/name-your-mind"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/personal-mission-statement",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/personal-mission-statement"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/physical-activity-log",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/physical-activity-log"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/prediction-vs-reality",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/prediction-vs-reality"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/real-stories-to-overcome-anxiety",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/real-stories-to-overcome-anxiety"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/redraw-your-circle",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/redraw-your-circle"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/relationship-patterns-unpacked",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/relationship-patterns-unpacked"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/repair-and-reconnect",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/repair-and-reconnect"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/resources/:concern/:type",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/resources/_concern/_type"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/resources/:concern/:type/:id",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/resources/_concern/_type/_id"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/safe-space",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/safe-space"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/self-care-bingo",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/self-care-bingo"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/sleep-audit",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/sleep-audit"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/sleep-cycle-guide",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/sleep-cycle-guide"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/sleep-guide",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/sleep-guide"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/sleep-window-planner",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/sleep-window-planner"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/stress-tips",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/stress-tips"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/the-anger-shame-cycle",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/the-anger-shame-cycle"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/the-pause-practice",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/the-pause-practice"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/the-unsent-letter",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/the-unsent-letter"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/topics/:topicId",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/topics/_topicId"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/understanding-control",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/understanding-control"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/vibe-tracker",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/vibe-tracker"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/what-are-your-habits",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/what-are-your-habits"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/what-do-i-need",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/what-do-i-need"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/why-brain-gets-stuck",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/why-brain-gets-stuck"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/window-of-tolerance",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/window-of-tolerance"));
            return <C />;
          })()}
        </Suspense>
      )
    },
    {
      path: "/emotional/write-your-narrative",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("./activities/write-your-narrative"));
            return <C />;
          })()}
        </Suspense>
      )
    },
  ],
};
