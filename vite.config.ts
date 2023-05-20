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
        description: "a monkey plugin to accelerate video playback",
        license: 'MIT',
        icon: 'https://github.com/yanggggjie/Video-Speeder/blob/main/assets/icon.svg',
        namespace: 'yanggggjie/video-speeder',
        match: ['https://www.bilibili.com/*', 'https://www.youtube.com/watch*']
      },
    }),
  ],
});
