const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const dirToRefactor = 'src/features/substance';

walkDir(dirToRefactor, function(filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let original = content;

        // Replace the window.parent.postMessage block with navigate(-1)
        content = content.replace(/if\s*\(\s*window\.parent\s*!==\s*window\s*\)\s*\{\s*window\.parent\.postMessage[^}]+\}\s*else\s*\{\s*window\.location\.href\s*=[^}]+\}/g, "navigate(-1)");

        if (original !== content) {
            fs.writeFileSync(filePath, content);
            console.log(`Replaced postMessage in ${filePath}`);
        }
    }
});
