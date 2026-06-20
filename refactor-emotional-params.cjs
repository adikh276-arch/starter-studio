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
    if (filePath.endsWith('index.tsx') || filePath.endsWith('GuidedActivityClient.tsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let original = content;

        // Pattern 1: async function SomePage({ params }: { params: Promise<{...}> }) { const { x } = await params; }
        if (content.includes('await params')) {
            content = content.replace(/export\s+default\s+async\s+function\s+([A-Za-z0-9_]+)\s*\(\s*\{\s*params\s*,?\s*\}\s*:\s*\{\s*params:\s*Promise<\{[^}]+\}>\s*;?\s*\}\s*\)\s*\{/, 'import { useParams } from "react-router";\nexport default function $1() {');
            content = content.replace(/const\s+(\{[^}]+\})\s*=\s*await\s+params\s*;/, 'const $1 = useParams();');
        }

        // Pattern 2: export default function SomePage({ params }: { params: Promise<{...}> }) { const { x } = use(params); }
        if (content.includes('use(params)')) {
            content = content.replace(/export\s+default\s+function\s+([A-Za-z0-9_]+)\s*\(\s*\{\s*params\s*,?\s*\}\s*:\s*\{\s*params:\s*Promise<\{[^}]+\}>\s*;?\s*\}\s*\)\s*\{/, 'import { useParams } from "react-router";\nexport default function $1() {');
            content = content.replace(/const\s+(\{[^}]+\})\s*=\s*use\(params\)\s*;/, 'const $1 = useParams();');
        }

        if (original !== content) {
            fs.writeFileSync(filePath, content);
            console.log(`Updated ${filePath}`);
        }
    }
});
