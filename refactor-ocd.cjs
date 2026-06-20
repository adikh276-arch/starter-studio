const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const dir = 'src/features/ocd/activities';

walkDir(dir, function(filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let original = content;

        // Replace next/navigation
        content = content.replace(/import\s+{\s*useRouter\s*}\s+from\s+["']next\/navigation["'];?/g, 'import { useNavigate } from "react-router";');
        content = content.replace(/import\s+{\s*usePathname\s*}\s+from\s+["']next\/navigation["'];?/g, 'import { useLocation } from "react-router";');
        
        content = content.replace(/const\s+router\s*=\s*useRouter\(\);?/g, 'const navigate = useNavigate();');
        content = content.replace(/const\s+pathname\s*=\s*usePathname\(\);?/g, 'const { pathname } = useLocation();');
        
        content = content.replace(/router\.push\(\s*['"]\/['"]\s*\+\s*window\.location\.search\s*\)/g, 'navigate("/ocd" + window.location.search)');
        content = content.replace(/router\.push\(/g, 'navigate(');

        // Replace next/router if any
        content = content.replace(/import\s+{\s*useRouter\s*}\s+from\s+["']next\/router["'];?/g, 'import { useNavigate } from "react-router";');

        // Replace dynamicMinis
        content = content.replace(/@\/app\/actions\/dynamicMinis/g, '@/features/lgbtq/lib/dynamicMinisShim'); // Reusing lgbtq's shim for now, or maybe create one for ocd? I'll use lgbtq's shim since it's generic. Wait, better to create `src/features/ocd/lib/dynamicMinisShim.ts`!
        content = content.replace(/@\/app\/actions\/dynamicMinis/g, '@/features/ocd/lib/dynamicMinisShim');

        // Replace @/app/<tool>/_src/ with @/features/ocd/activities/<tool>/
        content = content.replace(/@\/app\/([^/]+)\/_src\//g, '@/features/ocd/activities/$1/');

        if (original !== content) {
            fs.writeFileSync(filePath, content);
            console.log(`Updated ${filePath}`);
        }
    }
});
