import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import * as path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  base: '/simple_architecture',
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^@\//,
        replacement: `${path.resolve(import.meta.dirname, "src")}/`,
      },
    ],
  },
});
