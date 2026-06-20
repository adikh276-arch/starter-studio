import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  // The `legacy/` folder holds 8 parked sub-apps (their own tsconfigs, index.html
  // files, public assets, etc.). Without this, Vite watches every file in there
  // and fires full-page reloads + tsconfig-changed warnings continuously,
  // which makes the preview feel like it's crashing.
  server: {
    watch: {
      ignored: [
        '**/legacy/**',
        '**/node_modules/**',
      ],
    },
    fs: {
      // Don't let Vite serve files from legacy/ at all.
      deny: ['**/legacy/**'],
    },
  },
  optimizeDeps: {
    entries: ['index.html', 'src/**/*.{ts,tsx}'],
  },
})
