import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 26000,
    strictPort: true,
    host: true,
    allowedHosts: true,
  },
});
