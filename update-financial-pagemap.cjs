const fs = require('fs');
const path = require('path');

const activitiesDir = 'src/features/financial/activities';
const indexFile = 'src/features/financial/index.tsx';

let mapEntries = [];

function walkDir(dir) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (fs.statSync(dirPath).isDirectory()) {
            walkDir(dirPath);
        } else if (f === 'index.tsx') {
            const relPath = path.relative(activitiesDir, dirPath).replace(/\\/g, '/');
            const key = relPath.replace(/\/index\.tsx$/, '').replace(/^index\.tsx$/, '');
            if (key) {
                mapEntries.push(`  "${key}": () => import("./activities/${key}/index"),`);
            }
        }
    });
}

walkDir(activitiesDir);

let pageMapStr = 'const pageMap: Record<string, () => Promise<{ default: React.ComponentType<any> }>> = {\n' + mapEntries.join('\n') + '\n};\n';

let content = fs.readFileSync(indexFile, 'utf8');
content = content.replace(/const pageMap: Record<string, \(\) => Promise<{ default: React\.ComponentType<any> }>> = {[\s\S]*?};\n/g, pageMapStr);

fs.writeFileSync(indexFile, content);
console.log('Updated Financial index.tsx');
