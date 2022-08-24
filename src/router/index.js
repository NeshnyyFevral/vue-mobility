import { createRouter as _createRouter, createWebHistory } from 'vue-router';

export const Routes = {
  PREVIEW: 'preview',
  CRM: 'crm',
};

export default function createRouter() {
  return _createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: Routes.CRM,
        component: () => import('@/pages/CRM.vue'),
      },
      {
        path: '/apps/preview',
        name: Routes.PREVIEW,
        component: () => import('@/pages/Preview.vue'),
      },
    ],
  });
}
