import { createRouter as _createRouter, createWebHashHistory } from 'vue-router';

import Home from '@/pages/Home.vue';
import Preview from '@/pages/Preview.vue';

export default function createRouter() {
  return _createRouter({
    history: createWebHashHistory(),
    routes: [
      { path: '/preview', component: Preview },
      { path: '/', component: Home },
    ],
  });
}
