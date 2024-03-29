import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       prependData: `@import "~@/variables.sass"`
  //     },
  //     scss: {
  //       prependData: `@import "@/assets/scss/main.scss"`
  //     },
  //   }
  // }
  
})

