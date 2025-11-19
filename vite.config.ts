import { defineConfig } from "vite";
import { resolve } from "path";

import legacy from "@vitejs/plugin-legacy";
import PluginCritical from "rollup-plugin-critical";
import sass from "sass";

export default defineConfig({
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    PluginCritical({
      criticalUrl: "http://localhost:4173/", //
      criticalBase: "dist/",
      criticalPages: [
        { uri: "", template: "index" },
        { uri: "contacts/index.html", template: "contacts/index" },
      ],
      criticalConfig: {
        inline: true,
        extract: false,
        dimensions: [
          { height: 900, width: 375 },
          { height: 1080, width: 1920 },
        ],
      },
    }),
  ],
  root: "./src",
  base: "./",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "src/index.html",
        contacts: "src/contacts/index.html",
      },
    },
    modulePreload: false,
  },
  css: {
    postcss: "./postcss.config.ts",
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/css/base/_mixins.scss" as *;
        `,
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});
