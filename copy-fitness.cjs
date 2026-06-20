const fs = require('fs');
const path = require('path');

const srcComponents = 'legacy/Fitness selfcare/src/app/components';
const destActivities = 'src/features/fitness/activities';

const srcLib = 'legacy/Fitness selfcare/src/lib';
const destLib = 'src/features/fitness/lib';

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

// Copy components to activities
copyFolderSync(srcComponents, destActivities);

// Copy lib
copyFolderSync(srcLib, destLib);

console.log('Copied fitness files!');
