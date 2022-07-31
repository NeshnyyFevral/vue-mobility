import {
  createApp as _createApp,
} from 'vue';

import App from '@/App.vue';
import createRouter from '@/router/index';

export default function createApp() {
  const app = _createApp(App);
  const router = createRouter();

  return {
    app, router,
  };
}
