const fs = require('fs');
const path = require('path');

const activitiesDir = 'src/features/ocd/activities';
const indexFile = 'src/features/ocd/index.tsx';

const folders = fs.readdirSync(activitiesDir).filter(f => fs.statSync(path.join(activitiesDir, f)).isDirectory());

let pageMapStr = 'const pageMap: Record<string, () => Promise<{ default: React.ComponentType }>> = {\n';
folders.forEach(f => {
    pageMapStr += `  "${f}": () => import("./activities/${f}/index"),\n`;
});
pageMapStr += '};\n';

let content = fs.readFileSync(indexFile, 'utf8');

content = content.replace(/const pageMap: Record<string, \(\) => Promise<{ default: React\.ComponentType }>> = {[\s\S]*?};\n/g, pageMapStr);

fs.writeFileSync(indexFile, content);
console.log('Updated OCD index.tsx');
