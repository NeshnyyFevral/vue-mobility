import vitePluginVue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vitePluginEslint from 'vite-plugin-eslint';
import viteStylelintPlugin from 'vite-plugin-stylelint';
import viteSvgLoader from 'vite-svg-loader';

export default defineConfig({
	plugins: [
		vitePluginVue(),
		vitePluginEslint(),
		viteSvgLoader(),
		viteStylelintPlugin(),
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
