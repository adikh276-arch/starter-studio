const fs = require('fs');
const path = require('path');

const activitiesDir = 'src/features/emotional/activities';
let routesArray = [];

function walkDir(dir, relPath = '') {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (fs.statSync(dirPath).isDirectory()) {
            walkDir(dirPath, path.join(relPath, f));
        } else if (f === 'index.tsx') {
            // Found a route!
            let routePath = relPath.replace(/\\/g, '/');
            // convert [slug] to :slug
            routePath = routePath.replace(/\[([^\]]+)\]/g, ':$1');
            
            // For import path, we just use the original directory name
            const importPath = `./activities/${relPath.replace(/\\/g, '/')}`;
            routesArray.push(`    {
      path: "/emotional/${routePath}",
      element: (
        <Suspense fallback={null}>
          {(() => {
            const C = lazy(() => import("${importPath}"));
            return <C />;
          })()}
        </Suspense>
      )
    },`);
        }
    });
}

walkDir(activitiesDir);

const indexContent = `import React, { lazy, Suspense } from "react";
import type { FeatureModule } from "../registry";

// Note: Ensure your hub (e.g. src/pages/EmotionalWellnessSelfCare.tsx) points here
export const emotionalFeature: FeatureModule = {
  id: "emotional",
  label: "Emotional Wellbeing",
  description: "Tools for anxiety, sleep, and emotional health",
  entryPath: "/emotional-wellness-self-care",
  routes: [
${routesArray.join('\n')}
  ],
};
`;

fs.writeFileSync('src/features/emotional/index.tsx', indexContent);
console.log('Created emotional index.tsx');
