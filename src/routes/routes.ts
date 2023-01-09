import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: 'Home' },
  },
  {
    path: '/vite-ts-vue-class-composition-boiler-plate/', // reference for github pages remove the redirect or rename it. Delete base from vite.config.ts
    name: 'Home',
    children: [
      {
        path: '',
        name: 'example',
        component: () => import('@/views/Example/Example.view.vue'),
      },
    ],
  },
  {
    path: '/vite-ts-vue-class-composition-boiler-plate/docs',
    name: 'docs',
    component: () => import('@/docs/main/Main.docs.vue'),
    children: [
      {
        path: '/vite-ts-vue-class-composition-boiler-plate/docs/home',
        name: 'docsHome',
        component: () => import('@/docs/children/home/Home.docs.vue'),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
