const fs = require('fs');
const path = require('path');

const srcDir = 'legacy/ocd selfcare/src/app';
const destDir = 'src/features/ocd/activities';

const tools = [
  'mood_tracker', 'vibe_tracker', 'gratitude_logs', 'progress_tracker', 'mirror_moments',
  'urge_surfing', 'thought_diffusion', 'thought_truth', 'thought_surfing', 'reframe_thoughts', 
  'reassurance_resistance', 'ritual_cost', 'trigger_map', 'discard_it', 'clutter_journal', 
  'letter_to_ocd', 'self_compassion', 'one_thing_out', 'brave_steps', 'daily_life', 
  'did_you_know', 'fear_ladder', 'feelings_fact', 'grounded_techniques', 'guided_imagery', 
  'metta_heart_guide', 'mindfulness', 'ocd_moments', 'quiet-focus-tool', 'response_guide', 
  'truth_seeker_quiz', 'uncertainity_acceptance', 'uncertainity_tolerance', 'ocd_tips', 
  'ocd_success_stories', 'cognitive_distortions', 'anxiety_cycle', 'ocd_cycle'
];

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true });
  fs.readdirSync(from).forEach(element => {
    if (fs.lstatSync(path.join(from, element)).isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    } else {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
}

tools.forEach(tool => {
  const toolSrc = path.join(srcDir, tool, '_src');
  if (fs.existsSync(toolSrc)) {
    const toolDest = path.join(destDir, tool);
    copyFolderSync(toolSrc, toolDest);
    console.log(`Copied ${tool}`);
    
    // Create index.tsx
    fs.writeFileSync(path.join(toolDest, 'index.tsx'), 'export { default } from "./pages/Index";\n');
  } else {
    console.log(`Warning: ${toolSrc} does not exist`);
  }
});
