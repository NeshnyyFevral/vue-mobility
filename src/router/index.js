import { createRouter as _createRouter, createWebHashHistory } from 'vue-router';

import Home from '@/components/pages/Home.vue';
import Preview from '@/components/pages/Preview.vue';

export default function createRouter() {
  const router = _createRouter({
    history: createWebHashHistory(),
    routes: [
      { path: '/preview', component: Preview },
      { path: '/', component: Home },
    ],
  });
  return {
    router,
  };
}
