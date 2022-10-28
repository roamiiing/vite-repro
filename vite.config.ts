import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    FLAG: "'THIS_IS_THE_FLAG'",
  },
  build: {
    outDir: "dist-config",
  },
});
