import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        layout: 'default',
      },
      component: () =>
        import(
          '@/pages/home'),
    },
    {
      path: '/restaurant/view-restaurants',
      name: 'restaurant',
      meta: {
        layout: 'default',
      },
      component: () =>
        import(
          '@/pages/restaurant'),
    },
    {
      path: '/auth/login',
      name: 'login',
      meta: {
        layout: 'minimal',
      },
      component: () =>
        import(
          '@/pages/login'),
    },
    {
      path: '/auth/register',
      name: 'signup',
      meta: {
        layout: 'minimal',
      },
      component: () =>
        import(
          '@/pages/signup'),
    },
    {
      path: '/restaurant/view-restaurant/:id',
      name: 'restaurant',
      meta: {
        layout: 'default',
      },
      component: () =>
        import(
          '@/pages/meuns'),
    },
    {
      path: '*',
      name: 'notfound',
      meta: {
        layout: 'minimal',
      },
      component: () =>
        import(
          '@/pages/notfound'),
    },
    {
      path: '/auth/forget',
      name: 'forget',
      meta: {
        layout: 'minimal',
      },
      component: () =>
        import(
          '@/pages/forget'),
    },
    {
      path: '/contactus',
      name: 'contactus',
      meta: {
        layout: 'default',
      },
      component: () =>
        import(
          '@/pages/contact'),
    },
    {
      path: '/checkout',
      name: 'checkout',
      meta: {
        layout: 'default',
      },
      component: () =>
        import(
          '@/pages/checkout'),
    },
  ],
});
