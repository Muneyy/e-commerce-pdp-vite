import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://muneyy.github.io/e-commerce-pdp-vite/",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
})
