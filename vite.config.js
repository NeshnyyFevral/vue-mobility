import vitePluginVue from '@vitejs/plugin-vue';
import path from 'path';
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
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/scss/_fonts";
        @import "./src/scss/_global";
        `,
      },
    },
  },
  build: { outDir: './docs' },
  base: '/vue-mobility/',
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
});
