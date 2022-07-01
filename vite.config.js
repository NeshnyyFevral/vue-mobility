import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';

import vitePluginVue from '@vitejs/plugin-vue';
import vitePluginEslint from 'vite-plugin-eslint';
import viteSvgLoader from 'vite-svg-loader';

export default defineConfig({
	plugins: [
		vitePluginVue(),
		vitePluginEslint(),
		viteSvgLoader(),
	],
	base: '/vue-mobility/',
	build: {
		outDir: './docs',
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
