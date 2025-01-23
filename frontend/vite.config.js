import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], 
  },
  build: {
    outDir: 'dist', 
    sourcemap: true, 
  },
  server: {
    port: 3000, 
    open: true, 
  },
});
