const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const dirToRefactor = 'src/features/women';

walkDir(dirToRefactor, function(filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let original = content;

        // Replace Next.js navigation with react-router
        content = content.replace(/import\s+{\s*useRouter\s*}\s+from\s+["']next\/navigation["'];?/g, 'import { useNavigate } from "react-router";');
        content = content.replace(/const\s+router\s*=\s*useRouter\(\);?/g, 'const navigate = useNavigate();');
        content = content.replace(/router\.push\(/g, 'navigate(');
        content = content.replace(/router\.back\(\)/g, 'navigate(-1)');

        // Replace paths
        content = content.replace(/@\/components\//g, '@/features/women/components/');
        content = content.replace(/@\/data\//g, '@/features/women/data/');
        content = content.replace(/@\/hooks\//g, '@/features/women/hooks/');
        content = content.replace(/@\/i18n\//g, '@/features/women/i18n/');
        content = content.replace(/@\/lib\//g, '@/features/women/lib/');
        content = content.replace(/@\/modules\//g, '@/features/women/modules/');
        content = content.replace(/@\/views\//g, '@/features/women/views/');
        
        // Also fix next/link if it exists
        content = content.replace(/import\s+Link\s+from\s+["']next\/link["'];?/g, 'import { Link } from "react-router";');

        if (original !== content) {
            fs.writeFileSync(filePath, content);
            console.log(`Updated ${filePath}`);
        }
    }
});
