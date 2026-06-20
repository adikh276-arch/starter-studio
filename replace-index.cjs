const fs = require('fs');
const path = require('path');

const dir = 'src/features/ocd/activities';

fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
        let indexPath = path.join(dirPath, 'index.tsx');
        if (fs.existsSync(indexPath)) {
            fs.writeFileSync(indexPath, 'export { default } from "./pages/Index";\n');
            console.log(`Replaced ${indexPath}`);
        }
    }
});
