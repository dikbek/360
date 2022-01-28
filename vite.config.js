import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
// import vitePluginString from "vite-plugin-string";
import glsl from "vite-plugin-glsl";

// https://vitejs.dev/config/
export default defineConfig({
  //base: '/360/',
  plugins: [svelte(), glsl() /*, vitePluginString() */],
  optimizeDeps: {
    exclude: ["svelte-navigator"],
  },
});
