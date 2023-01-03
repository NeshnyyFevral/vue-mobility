import { createRouter as _createRouter, createWebHistory } from 'vue-router';

export const Routes = {
  PREVIEW: 'preview',
  CRM: 'crm',
  LOGIN: 'login',
};

export default function createRouter() {
  return _createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/vue-mobility/',
        name: Routes.LOGIN,
        component: () => import('@/pages/Login.vue'),
      },
      {
        path: '/vue-mobility/',
        name: 'default',
        component: () => import('@/components/Layout/Default.vue'),
        children: [
          {
            path: '/vue-mobility/CRM',
            name: Routes.CRM,
            component: () => import('@/pages/CRM.vue'),
          },
          {
            path: 'preview',
            name: Routes.PREVIEW,
            component: () => import('@/pages/Preview.vue'),
          },
        ],
      },
    ],
  });
}
