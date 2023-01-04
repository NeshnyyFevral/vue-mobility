import { createRouter as _createRouter, createWebHistory } from 'vue-router';

export const Routes = {
  PREVIEW: 'preview',
  CRM: 'crm',
  LOGIN: 'login',
  REGISTRATION: 'registration',
};

export default function createRouter() {
  return _createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/vue-mobility/login',
        name: Routes.LOGIN,
        component: () => import('@/pages/Login.vue'),
      },
      {
        path: '/vue-mobility/registration',
        name: Routes.REGISTRATION,
        component: () => import('@/pages/Registration.vue'),
      },
      {
        path: '/vue-mobility/',
        name: 'default',
        component: () => import('@/components/Layout/Default.vue'),
        children: [
          {
            path: 'crm',
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
