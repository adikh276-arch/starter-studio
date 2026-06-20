const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const dir = 'src/features/financial/activities';

walkDir(dir, function(filePath) {
    if (path.basename(filePath) === 'page.tsx') {
        const newPath = path.join(path.dirname(filePath), 'index.tsx');
        fs.renameSync(filePath, newPath);
        console.log(`Renamed ${filePath} to ${newPath}`);
    }
});
