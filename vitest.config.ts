import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/views': path.resolve(__dirname, './src/views'),
      '@/components': path.resolve(__dirname, './src/components'),
    },
  },
});
