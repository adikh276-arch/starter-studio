const fs = require('fs');
const filePath = 'src/features/emotional/components/hub/SelfCareHub.tsx';

let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/url:\s*["'](\/[^"']+)["']/g, (match, p1) => {
    if (p1.startsWith('/emotional/')) {
        return match;
    }
    return `url: "/emotional${p1}"`;
});

fs.writeFileSync(filePath, content);
console.log('Fixed URLs in SelfCareHub.tsx');
