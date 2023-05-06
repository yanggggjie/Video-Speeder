import {defineConfig} from 'vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';
import monkey from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        icon: 'https://yanggggjie.github.io/video-speeder/assets/icon.png',
        namespace: 'yanggggjie/video-speeder',
        match: ['https://www.bilibili.com/*', 'https://www.youtube.com/watch*']
      },
    }),
  ],
});
