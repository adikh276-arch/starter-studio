const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const dirToRefactor = 'src/features/emotional/activities';

walkDir(dirToRefactor, function(filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let original = content;

        if (content.includes('fetch(apiPath')) {
            content = content.replace(/fetch\(apiPath/g, 'mockFetch(apiPath');
            // ensure mockFetch is imported
            content = content.replace(/import\s+\{\s*apiPath\s*\}\s+from\s+["']@\/features\/emotional\/lib\/apiPath["'];?/g, 'import { apiPath, mockFetch } from "@/features/emotional/lib/apiPath";');
        }

        if (original !== content) {
            fs.writeFileSync(filePath, content);
            console.log(`Updated ${filePath}`);
        }
    }
});
