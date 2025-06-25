// Vite configuration file for ai
// This file sets up Vite for React, path aliases, and GitHub Pages deployment
// Each line is commented for clarity

import { defineConfig } from "vite"; // Vite config helper
import react from "@vitejs/plugin-react-swc"; // React plugin
import path from "path"; // Node path module
import { componentTagger } from "lovable-tagger"; // Component tagger plugin

// https://vitejs.dev/config/
// Export the Vite config using defineConfig
export default defineConfig(({ mode }) => ({ // Export Vite config
  base: "/ai/", // Base path for GitHub Pages (updated)
  server: { // Dev server config
    host: "::", // Listen on all IPv6 addresses
    port: 8080, // Dev server port
  },
  plugins: [ // Vite plugins array
    react(), // React plugin
    mode === 'development' && // Only in development
    componentTagger(), // Component tagger plugin
  ].filter(Boolean), // Remove false values
  resolve: { // Module resolution config
    alias: { // Path aliases
      "@": path.resolve(__dirname, "./src"), // '@' maps to './src'
    },
  },
})); // End of Vite config
