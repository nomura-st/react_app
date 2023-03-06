import { defineConfig } from "orval";

export default defineConfig({
  petstore: {
    input: "./openapi/openapi.yml",
    output: {
      mode: "split",
      target: "./src/rest/client.ts",
    },
  },
});
