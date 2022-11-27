import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib:{
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "Coordinate",
      fileName: "coordinate"
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        }
      },
    }
  },
  plugins: [ dts(), vue()]
})
