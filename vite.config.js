import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  // Remove the build.lib and rollupOptions sections
  // Ensure that the base url is correct if you are using a subdirectory.
  // base: '/your-subdirectory/', // Uncomment and replace if needed
});