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
    {
      path: '/teams',
      component: () => import('./modules/teams/teams.vue'),
      children: [
        {
          path: '/',
          component: () => import('./modules/teams/teams.table.vue'),
        },
        {
          path: 'add',
          component: () => import('./modules/teams/teams.item.vue'),
        },
        {
          path: ':id',
          component: () => import('./modules/teams/teams.item.vue'),
          props: true,
        },
      ],
    },
  ],
});

export default router;
