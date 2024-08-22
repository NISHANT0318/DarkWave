import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        background: 'src/background.js'
      },
      output: {
        entryFileNames: 'assets/[name].js'
      }
    }
  }
});
