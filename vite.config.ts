import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    dts()
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'Index',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue', 'element-plus'],
      output: {
        globals: {
          vue: 'vue',
          'element-plus': 'ElementPlus'
        }
      }
    }
  },
})