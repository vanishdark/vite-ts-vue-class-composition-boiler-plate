import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/vite-ts-vue-class-composition-boiler-plate/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@/components': fileURLToPath(
        new URL('./src/components', import.meta.url),
      ),
      '@/views': fileURLToPath(new URL('./src/views', import.meta.url)),
      '@/docs': fileURLToPath(new URL('./src/docs', import.meta.url)),
    },
  },
});
