// svelte.config.js
import adapterAuto from '@sveltejs/adapter-auto';
import adapterCloudflare from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const isCloudflare = process.env.CF_DEPLOY === 'true' || process.env.CF === 'true';

const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: isCloudflare ? adapterCloudflare() : adapterAuto()
  }
};

export default config;