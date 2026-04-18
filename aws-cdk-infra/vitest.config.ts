import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["test/**/*.test.ts"],
    environment: "node",
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "lcov"],
      reportsDirectory: "coverage",
      include: ["lib/**/*.ts", "bin/**/*.ts"],
      exclude: ["**/*.d.ts"],
    },
  },
});

