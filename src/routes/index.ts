import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';
import { getValid } from '@/utils';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: import('@/views/Login.vue'),
  },
  {
    path: '',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: import('@/views/Home.vue'),
      },
    ],
  },
];

const route = createRouter({
  history: createWebHistory(),
  routes,
});

route.beforeEach((to, from, next) => {
  const isValid = getValid();
  console.log(isValid);
  if (isValid) {
    next();
  } else {
    next('/login');
  }
});

export default route;
