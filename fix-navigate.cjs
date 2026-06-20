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
    if (filePath.endsWith('.tsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let original = content;

        // Replace `/resources/` with `/emotional/resources/` in strings or template literals
        content = content.replace(/['"`]\/resources\/([^'"`]*)['"`]/g, (match, p1) => {
            return match[0] + '/emotional/resources/' + p1 + match[match.length - 1];
        });

        // Replace `/guided-series/` with `/emotional/guided-series/`
        content = content.replace(/['"`]\/guided-series\/([^'"`]*)['"`]/g, (match, p1) => {
            return match[0] + '/emotional/guided-series/' + p1 + match[match.length - 1];
        });
        
        // Also fix `/?lang=` to `/emotional-wellness-self-care?lang=` or `/self-care?lang=`
        content = content.replace(/['"`]\/\?lang=/g, '"/self-care?lang=');

        if (original !== content) {
            fs.writeFileSync(filePath, content);
            console.log(`Updated URLs in ${filePath}`);
        }
    }
});
