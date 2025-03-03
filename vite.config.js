import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Allows access from network
    port: parseInt(process.env.PORT) || 5000, // Uses env PORT or 5000 as default
  },
  build: {
    outDir: "dist", // Ensures output goes to `dist/`
    assetsDir: "assets", // Keeps static assets inside `dist/assets`
    sourcemap: true, // Helps debugging production issues
  },
  base: "./", // Ensures relative paths for deployment (use `/your-repo-name/` for GitHub Pages)
});
