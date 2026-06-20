const fs = require('fs');
const path = require('path');

const srcAppDir = 'legacy/emotional wellbeing selfcare/app';
const destActivitiesDir = 'src/features/emotional/activities';

const srcBaseDir = 'legacy/emotional wellbeing selfcare';
const destBaseDir = 'src/features/emotional';

const foldersToCopy = ['components', 'data', 'lib'];

function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true });
  fs.readdirSync(from).forEach(element => {
    const fromPath = path.join(from, element);
    const toPath = path.join(to, element);
    if (fs.lstatSync(fromPath).isFile()) {
      fs.copyFileSync(fromPath, toPath);
    } else {
      copyFolderSync(fromPath, toPath);
    }
  });
}

// Copy shared folders
foldersToCopy.forEach(folder => {
  copyFolderSync(path.join(srcBaseDir, folder), path.join(destBaseDir, folder));
});

// Copy activities
if (!fs.existsSync(destActivitiesDir)) fs.mkdirSync(destActivitiesDir, { recursive: true });

fs.readdirSync(srcAppDir).forEach(f => {
  const fullPath = path.join(srcAppDir, f);
  if (fs.statSync(fullPath).isDirectory() && f !== 'api') {
    copyFolderSync(fullPath, path.join(destActivitiesDir, f));
    // Check if it contains page.tsx, if so rename to index.tsx
    const pagePath = path.join(destActivitiesDir, f, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      fs.renameSync(pagePath, path.join(destActivitiesDir, f, 'index.tsx'));
    }
    // Also recursively look for page.tsx inside nested folders like topics/[slug]
    function renamePageTsx(dir) {
      fs.readdirSync(dir).forEach(sub => {
        const subPath = path.join(dir, sub);
        if (fs.statSync(subPath).isDirectory()) {
          renamePageTsx(subPath);
          const pageTsx = path.join(subPath, 'page.tsx');
          if (fs.existsSync(pageTsx)) {
             fs.renameSync(pageTsx, path.join(subPath, 'index.tsx'));
          }
        }
      });
    }
    renamePageTsx(path.join(destActivitiesDir, f));
  }
});

console.log('Copied emotional files!');
