const fs = require('fs');
const path = require('path');

const srcApp = 'legacy/Financial Wellbeing selfcare/src/app';
const destActivities = 'src/features/financial/activities';

const srcComponents = 'legacy/Financial Wellbeing selfcare/src/components';
const destComponents = 'src/features/financial/components';

const srcLib = 'legacy/Financial Wellbeing selfcare/src/lib';
const destLib = 'src/features/financial/lib';

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

// Copy components and lib
copyFolderSync(srcComponents, destComponents);
copyFolderSync(srcLib, destLib);
console.log('Copied components and lib');

// Copy activities
fs.readdirSync(srcApp).forEach(element => {
  const fromPath = path.join(srcApp, element);
  if (fs.lstatSync(fromPath).isDirectory() && element !== 'api') {
    const toPath = path.join(destActivities, element);
    copyFolderSync(fromPath, toPath);
    
    // Rename page.tsx to index.tsx if it exists
    const pageFile = path.join(toPath, 'page.tsx');
    if (fs.existsSync(pageFile)) {
      fs.renameSync(pageFile, path.join(toPath, 'index.tsx'));
    }
    console.log(`Copied activity ${element}`);
  }
});
