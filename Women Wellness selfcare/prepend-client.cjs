const fs = require('fs');
const path = require('path');

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let p = path.join(dir, f);
    if (fs.statSync(p).isDirectory() && f !== 'node_modules') {
      walk(p);
    } else if (p.endsWith('.tsx') || p.endsWith('.ts')) {
      let c = fs.readFileSync(p, 'utf8');
      if (!c.includes('use client') && !p.includes('next.config') && !p.includes('vite.config')) {
        fs.writeFileSync(p, '"use client";\n' + c);
      }
    }
  });
}

walk('src');
