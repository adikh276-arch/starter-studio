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

        content = content.replace(/['"]react-router-dom['"]/g, '"react-router"');

        if (original !== content) {
            fs.writeFileSync(filePath, content);
            console.log(`Replaced react-router-dom in ${filePath}`);
        }
    }
});
