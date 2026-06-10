import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Map the "@/*" alias explicitly (tests are excluded from tsconfig, so we
    // don't rely on vite-tsconfig-paths reading the tsconfig include set).
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    // Unit tests only — E2E specs live in tests/e2e and run under Playwright.
    include: ["tests/unit/**/*.test.{ts,tsx}"],
  },
});
