import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

export default {
  kit: {
    adapter: adapter(),
    paths: {
      base: '/latihan2.github.io', // Ganti dengan nama repository GitHub kamu
    }
  },
  preprocess: vitePreprocess(),
};
