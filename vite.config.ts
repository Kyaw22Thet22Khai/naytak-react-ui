import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: "127.0.0.1", // 👈 force IPv4
  //   port: 3000,
  //   strictPort: true,
  // },
  server: {
    port: 5173,
    strictPort: true, // fail if 5173 is busy
  },
  build: {
    outDir: "dist-vite", // optional, for preview only
    emptyOutDir: false,
  },
  // build: {
  //   cssMinify: false,
  // },
});
