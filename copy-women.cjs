const fs = require('fs');
const path = require('path');

const srcDir = 'legacy/Women Wellness selfcare/src';
const destDir = 'src/features/women';

const foldersToCopy = ['components', 'data', 'hooks', 'i18n', 'lib', 'modules', 'views'];

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

foldersToCopy.forEach(folder => {
  copyFolderSync(path.join(srcDir, folder), path.join(destDir, folder));
});

console.log('Copied women files!');
