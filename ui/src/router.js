import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      // redirect: '/task',
    },
    {
      path: '/sport',
      component: () => import('./modules/Sport/Sport.vue'),
    },
  ],
});

export default router;
