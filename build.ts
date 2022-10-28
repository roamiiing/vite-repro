import { build } from "vite";
import vue from "@vitejs/plugin-vue";
build({
  plugins: [vue()],
  build: {
    outDir: "dist-script",
  },
});
