import axios from 'axios';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.Google_TRANSLATOR_KEY;
const moduleName = process.argv[2];

if (!API_KEY) {
  console.error('API Key not found in .env');
  process.exit(1);
}

if (!moduleName) {
  console.error('Please provide a module name (e.g. pcos)');
  process.exit(1);
}

const languages = [
  "es", "fr", "de", "pt", "ru",
  "zh-Hans", "zh-Hant", "ja", "ko",
  "ar", "hi", "bn", "id", "tr", "vi",
  "it", "pl", "th", "tl", "nl", "sv",
  "no", "da", "fi", "cs", "el", "ro",
  "hu", "uk", "he", "ms", "ta", "te", "ur"
];

const moduleDir = path.join(process.cwd(), 'src', 'modules', moduleName, 'i18n');
const enPath = path.join(moduleDir, 'en.json');

if (!fs.existsSync(enPath)) {
  console.error(`English translation file not found: ${enPath}`);
  process.exit(1);
}

const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));

async function translateObject(obj, targetLang) {
  const result = Array.isArray(obj) ? [] : {};
  
  for (const key in obj) {
    const value = obj[key];
    
    if (typeof value === 'string') {
      // Don't translate if it's already a key (like in the failed extraction)
      // or if it looks like an interpolation placeholder {{...}}
      if (value === key) {
        result[key] = value;
        continue;
      }
      
      try {
        const response = await axios.post(
          `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
          {
            q: value,
            target: targetLang,
            source: 'en',
            format: 'text'
          }
        );
        result[key] = response.data.data.translations[0].translatedText;
        console.log(`Translated [${targetLang}] ${key}`);
      } catch (error) {
        console.error(`Failed to translate ${key} to ${targetLang}:`, error.message);
        result[key] = value; // Fallback to English
      }
      
      // Basic rate limiting to avoid hitting quotas too hard during testing
      await new Promise(resolve => setTimeout(resolve, 100));
    } else if (typeof value === 'object' && value !== null) {
      result[key] = await translateObject(value, targetLang);
    } else {
      result[key] = value;
    }
  }
  
  return result;
}

async function run() {
  for (const lang of languages) {
    console.log(`\n--- Translating module ${moduleName} to ${lang} ---`);
    const translated = await translateObject(enData, lang);
    const outputPath = path.join(moduleDir, `${lang}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(translated, null, 2));
    console.log(`Saved ${lang}.json`);
  }
}

run().catch(console.error);
