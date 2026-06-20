const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const dirsToRefactor = [
    'src/features/financial/activities',
    'src/features/financial/components',
    'src/features/financial/lib'
];

dirsToRefactor.forEach(dir => {
    walkDir(dir, function(filePath) {
        if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
            let content = fs.readFileSync(filePath, 'utf8');
            let original = content;

            // Replace next/navigation
            content = content.replace(/import\s+{\s*useRouter\s*}\s+from\s+["']next\/navigation["'];?/g, 'import { useNavigate } from "react-router";');
            content = content.replace(/import\s+{\s*usePathname\s*}\s+from\s+["']next\/navigation["'];?/g, 'import { useLocation } from "react-router";');
            
            content = content.replace(/const\s+router\s*=\s*useRouter\(\);?/g, 'const navigate = useNavigate();');
            content = content.replace(/const\s+pathname\s*=\s*usePathname\(\);?/g, 'const { pathname } = useLocation();');
            
            content = content.replace(/router\.push\(\s*['"]\/['"]\s*\+\s*window\.location\.search\s*\)/g, 'navigate("/financial" + window.location.search)');
            content = content.replace(/router\.push\(/g, 'navigate(');

            // Replace next/router if any
            content = content.replace(/import\s+{\s*useRouter\s*}\s+from\s+["']next\/router["'];?/g, 'import { useNavigate } from "react-router";');

            // Fix image imports? Next.js next/image might be used. Let's replace next/image with regular img or our ImageWithFallback
            if (content.includes('next/image')) {
                content = content.replace(/import Image from ["']next\/image["'];?/g, 'import { ImageWithFallback as Image } from "@/components/figma/ImageWithFallback";');
            }

            // Replace @/components/ and @/lib/ with our new paths
            // Wait, is it `@/components/` or `@/components/shared` etc.?
            content = content.replace(/@\/components\//g, '@/features/financial/components/');
            content = content.replace(/@\/lib\//g, '@/features/financial/lib/');
            // Be careful if it refers to other global components like `@/components/Sidebar`. Financial legacy app didn't have Sidebar.
            
            if (original !== content) {
                fs.writeFileSync(filePath, content);
                console.log(`Updated ${filePath}`);
            }
        }
    });
});
