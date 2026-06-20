const fs = require('fs');
const path = require('path');

const modulesDir = path.join(__dirname, '../src/modules');
const outputFile = path.join(__dirname, '../src/i18n/resources.ts');

const modules = fs.readdirSync(modulesDir).filter(f => fs.statSync(path.join(modulesDir, f)).isDirectory());

let imports = '';
let resourcesObj = 'export const resources: any = {};\nexport const namespaces: string[] = [];\n\n';

modules.forEach(mod => {
  const i18nDir = path.join(modulesDir, mod, 'i18n');
  if (fs.existsSync(i18nDir)) {
    resourcesObj += `namespaces.push("${mod}");\n`;
    const langs = fs.readdirSync(i18nDir).filter(f => f.endsWith('.json'));
    langs.forEach(langFile => {
      const lang = langFile.replace('.json', '');
      const varName = `${mod}_${lang}`.replace(/-/g, '_');
      imports += `import ${varName} from "../modules/${mod}/i18n/${langFile}";\n`;
      resourcesObj += `if (!resources["${lang}"]) resources["${lang}"] = {};\n`;
      resourcesObj += `resources["${lang}"]["${mod}"] = ${varName};\n`;
    });
  }
});

fs.writeFileSync(outputFile, `${imports}\n${resourcesObj}`);
console.log('Generated resources.ts');
