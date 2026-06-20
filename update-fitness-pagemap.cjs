const fs = require('fs');
const path = require('path');

const activitiesDir = 'src/features/fitness/activities';

let mapEntries = [];

function walkDir(dir) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (fs.statSync(dirPath).isDirectory()) {
            if (f !== 'figma' && f !== 'ui') {
                walkDir(dirPath);
            }
        } else if (f.endsWith('.tsx') && !f.includes('AuthWrapper') && !f.includes('HistorySheet') && !f.includes('NavLink')) {
            const relPath = path.relative(activitiesDir, dirPath).replace(/\\/g, '/');
            const key = relPath.replace(/\.tsx$/, '').toLowerCase().replace(/\//g, '-');
            const importPath = `./activities/${relPath.replace(/\.tsx$/, '')}`;
            mapEntries.push(`  "${key}": () => import("${importPath}"),`);
        }
    });
}

walkDir(activitiesDir);

const indexContent = `import { lazy, Suspense } from "react";
import type { FeatureModule } from "../registry";
// Note: You must manually create or import a FitnessSubAppPage if you want to use the polymorphic route
import { useParams } from "react-router";

const pageMap: Record<string, () => Promise<{ default: React.ComponentType<any> }>> = {
${mapEntries.join('\n')}
};

// Auto-generate routes from pageMap
const overrideRoutes = Object.entries(pageMap).map(([id, loader]) => {
  const C = lazy(loader);
  return {
    path: \`/fitness/\${id}\`,
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
`;

fs.writeFileSync('src/features/fitness/index.tsx', indexContent);
console.log('Created Fitness index.tsx');
