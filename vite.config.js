import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
// import vitePluginString from "vite-plugin-string";

// https://vitejs.dev/config/
export default defineConfig({
  //base: '/360/',
  plugins: [svelte()],
  optimizeDeps: {
    exclude: ["svelte-navigator"],
  },
});
