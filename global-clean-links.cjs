const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const dirToRefactor = 'src/features';

walkDir(dirToRefactor, function(filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let original = content;

        // Replace window.parent.postMessage({ action: 'exit' }...)
        content = content.replace(/window\.parent\.postMessage\(\s*\{\s*action:\s*['"]exit['"]\s*\}\s*,\s*['"][^'"]+['"]\s*\);?/g, "window.history.back();");
        
        // Replace window.parent.postMessage({ action: 'mindful' }...)
        content = content.replace(/window\.parent\.postMessage\(\s*\{\s*action:\s*['"]mindful['"]\s*\}\s*,\s*['"][^'"]+['"]\s*\);?/g, "window.history.back();");

        // Replace window.parent.postMessage({ action: 'ocd' }...)
        content = content.replace(/window\.parent\.postMessage\(\s*\{\s*action:\s*['"]ocd['"]\s*\}\s*,\s*['"][^'"]+['"]\s*\);?/g, "window.history.back();");

        // Replace window.parent.postMessage("exit_activity", "*")
        content = content.replace(/window\.parent\.postMessage\(\s*['"]exit_activity['"]\s*,\s*['"][^'"]+['"]\s*\);?/g, "window.history.back();");

        // Replace ReactNativeWebView.postMessage(...)
        content = content.replace(/\(window as any\)\.ReactNativeWebView\.postMessage\([^\)]+\);?/g, "");

        // Replace window.location.href = 'https://web.mantracare.com...'
        content = content.replace(/window\.location\.href\s*=\s*['"]https:\/\/web\.mantracare\.com[^'"]*['"];?/g, "window.history.back();");
        
        // Clean up empty else blocks if any
        content = content.replace(/if\s*\([^)]+\)\s*\{\s*\}\s*else\s*\{\s*window\.history\.back\(\);\s*\}/g, "window.history.back();");
        
        // Clean up redundant history back
        content = content.replace(/window\.history\.back\(\);\s*window\.history\.back\(\);/g, "window.history.back();");

        if (original !== content) {
            fs.writeFileSync(filePath, content);
            console.log(`Cleaned external links in ${filePath}`);
        }
    }
});
