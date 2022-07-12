import { createApp as _createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '@/components/Home.vue';
import Preview from '@/components/Preview.vue';

import App from '../App.vue';

export default function createApp() {
  const app = _createApp(App);

  const router = createRouter({
    history: createWebHashHistory(),
    routes: [
      { path: '/preview', component: Preview },
      { path: '/', component: Home },
    ],
  });

  return {
    router,
    app,
  };
}
