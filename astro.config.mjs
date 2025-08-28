import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    port: 4000,
  },

  trailingSlash: "never",

  env: {
    schema: {
      PORT: envField.number({
        context: "server",
        access: "secret",
        default: 3000,
      }),
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});