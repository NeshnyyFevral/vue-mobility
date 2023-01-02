import { createPinia as _createPinia } from 'pinia';
import { createApp as _createApp } from 'vue';

import App from '@/App.vue';
import appStorage from '@/appStorage';
import createRouter from '@/router/index';

export default function createApp() {
  const app = _createApp(App);
  const pinia = _createPinia();
  const router = createRouter();

  pinia.state.value = { theme: { theme: appStorage.get('themeColor') || 1 } };

  return {
    app,
    pinia,
    router,
  };
}
