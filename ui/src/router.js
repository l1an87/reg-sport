import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('./redirect.vue'),
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
    {
      path: '/members',
      component: () => import('./modules/members/members.vue'),
      // children: [
      //   {
      //     path: '/',
      //     component: () => import('./modules/members/members.table.vue'),
      //   },
      //   {
      //     path: 'add',
      //     component: () => import('./modules/members/members.item.vue'),
      //   },
      //   {
      //     path: ':id',
      //     component: () => import('./modules/members/members.item.vue'),
      //     props: true,
      //   },
      // ],
    },
    {
      path: '/my-team',
      component: () => import('./modules/my-team/my-team.vue'),
    },
    {
      path: '/member-to-sport',
      component: () => import('./modules/member-to-sport/member-to-sport.vue'),
    },
    {
      path: '/member-team',
      component: () => import('./modules/member-team/member-team.vue'),
    },
  ],
});

export default router;
