import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: 'Home' },
  },
  {
    path: '/vite-ts-vue-class-composition-boiler-plate/',
    name: 'Home',
    children: [
      {
        path: '',
        name: 'example',
        component: () => import('@/views/Example/Example.view.vue'),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
