import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// Add the alias for the crypto library
const alias = {
  crypto: "crypto-browserify",
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  define: {
    global: {},
  },
  resolve: {
    alias,
  },
});
