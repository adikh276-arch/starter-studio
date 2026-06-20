const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const dirsToRefactor = [
    'src/features/fitness/activities',
    'src/features/fitness/lib'
];

dirsToRefactor.forEach(dir => {
    walkDir(dir, function(filePath) {
        if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
            let content = fs.readFileSync(filePath, 'utf8');
            let original = content;

            // Replace next/navigation and react-router-dom if needed
            content = content.replace(/import\s+{\s*useRouter\s*}\s+from\s+["']next\/navigation["'];?/g, 'import { useNavigate } from "react-router";');
            content = content.replace(/const\s+router\s*=\s*useRouter\(\);?/g, 'const navigate = useNavigate();');
            content = content.replace(/router\.push\(/g, 'navigate(');

            // Replace paths
            content = content.replace(/@\/lib\//g, '@/features/fitness/lib/');
            // The components were originally in src/app/components. Now they are in src/features/fitness/activities.
            // Wait, BMICalculator was in src/app/components and imported from '@/lib/...'.
            // Also, did it import from '@/components/ui/...'?
            // If it did, it should now import from '../ui/...' or similar since 'ui' is now in 'activities/ui'.
            // Let's just replace '@/components/' with '@/features/fitness/activities/'
            content = content.replace(/@\/components\//g, '@/features/fitness/activities/');

            if (original !== content) {
                fs.writeFileSync(filePath, content);
                console.log(`Updated ${filePath}`);
            }
        }
    });
});
