import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ticketbookingglee/',  // ✅ Ensure correct GitHub Pages base
});
