import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "http://nell-maissin.be/projets/vuejs/",
  plugins: [vue()]
})