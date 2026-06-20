import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const moduleName = process.argv[2];

if (!moduleName) {
  console.error('Please provide a module name (e.g. pcos)');
  process.exit(1);
}

const modulePath = path.join(process.cwd(), 'src', 'modules', moduleName);

if (!fs.existsSync(modulePath)) {
  console.error(`Module path not found: ${modulePath}`);
  process.exit(1);
}

console.log(`Extracting translations for module: ${moduleName}...`);

try {
  // We use the CLI but override the input and namespace
  // i18next-parser doesn't natively support $NAMESPACE in input from CLI easily
  // so we'll generate a temporary config or just use the API
  
  const configPath = path.join(process.cwd(), 'i18next-parser.config.cjs');

  
  const command = `npx i18next-parser "src/modules/${moduleName}/**/*.{ts,tsx,js,jsx}" --config "${configPath}" --output "src/modules/${moduleName}/i18n/$LOCALE.json"`;

  
  execSync(command, { stdio: 'inherit' });
  
  console.log(`Extraction complete for ${moduleName}. Check src/modules/${moduleName}/i18n/en.json`);
} catch (error) {
  console.error('Extraction failed:', error.message);
  process.exit(1);
}
