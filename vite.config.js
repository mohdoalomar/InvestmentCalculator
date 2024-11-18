import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Investment Calculator",
        short_name: "Investment Calculator",
        description:
          "Investment Calculator - Your go-to app for all your Investment needs.",
        start_url: "/InvestmentCalculator",
        display: "standalone",
        background_color: "#303b37",
        theme_color: "#c2e9e0",
        orientation: "portrait",
        scope: "/",
        icons: [
          {
            src: "icons/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "icons/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "icons/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "icons/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        screenshots: [
          {
            src: "screenshots/mobile.PNG",
            sizes: "546x1171",
            type: "image/png",
            form_factor: "narrow",
          },
          {
            src: "screenshots/desktopScreenshot.PNG",
            sizes: "2559x1290",
            type: "image/png",
            form_factor: "wide",
          },
        ],
        related_applications: [],
        prefer_related_applications: false,
      },
      registerType: "autoUpdate", // Automatically register service worker
      devOptions: {
        enabled: true, // Enable for dev mode],
      },
    }),
  ],
  base: "/InvestmentCalculator",
});
