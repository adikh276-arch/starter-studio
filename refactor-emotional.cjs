const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const dirToRefactor = 'src/features/emotional';

walkDir(dirToRefactor, function(filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let original = content;

        // Replace Next.js navigation with react-router
        content = content.replace(/import\s+{\s*useRouter\s*(?:,\s*useSearchParams)?\s*}\s+from\s+["']next\/navigation["'];?/g, 'import { useNavigate, useSearchParams } from "react-router";');
        content = content.replace(/import\s+{\s*useRouter\s*}\s+from\s+["']next\/router["'];?/g, 'import { useNavigate } from "react-router";');
        content = content.replace(/const\s+router\s*=\s*useRouter\(\);?/g, 'const navigate = useNavigate();');
        content = content.replace(/router\.push\(/g, 'navigate(');
        content = content.replace(/router\.back\(\)/g, 'navigate(-1)');

        // Next.js Link
        content = content.replace(/import\s+Link\s+from\s+["']next\/link["'];?/g, 'import { Link } from "react-router";');
        content = content.replace(/<Link\s+href=/g, '<Link to=');

        // Next.js Image
        content = content.replace(/import\s+Image\s+from\s+["']next\/image["'];?/g, '');
        content = content.replace(/<Image([^>]+)src=\{([^}]+)\}([^>]*)\/>/g, '<img$1src={$2}$3/>');
        content = content.replace(/<Image([^>]+)src=(["'][^"']+["'])([^>]*)\/>/g, '<img$1src=$2$3/>');

        // Imports
        content = content.replace(/@\/components\//g, '@/features/emotional/components/');
        content = content.replace(/@\/data\//g, '@/features/emotional/data/');
        content = content.replace(/@\/lib\//g, '@/features/emotional/lib/');
        content = content.replace(/@\/hooks\//g, '@/features/emotional/hooks/');

        if (original !== content) {
            fs.writeFileSync(filePath, content);
            console.log(`Updated ${filePath}`);
        }
    }
});
