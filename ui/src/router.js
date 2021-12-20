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
    {
      path: '/sport/:id',
      component: () => import('./modules/Sport/Sport.vue'),
      props: true,
    },
    {
      path: '/users',
      component: () => import('./modules/users/users.vue'),
      children: [
        {
          path: '/',
          component: () => import('./modules/users/users.table.vue'),
          props: true,
        },
        {
          path: 'add',
          component: () => import('./modules/users/users.item.vue'),
          props: true,
        },
        {
          path: ':id',
          component: () => import('./modules/users/users.item.vue'),
          props: true,
        },
      ],
    },
    {
      path: '/sport-type',
      component: () => import('./modules/sport-type/sport-type.vue'),
      children: [
        {
          path: '/',
          component: () => import('./modules/sport-type/sport-type.table.vue'),
        },
        {
          path: 'add',
          component: () => import('./modules/sport-type/sport-type.item.vue'),
        },
        {
          path: ':id',
          component: () => import('./modules/sport-type/sport-type.item.vue'),
          props: true,
        },
      ],
    },
  ],
});

export default router;
