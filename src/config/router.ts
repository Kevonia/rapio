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
      path: '/auth/forget',
      name: 'forget',
      meta: {
      layout: 'minimal',
      },
      component: () =>
        import(
          '@/pages/forget'),
    },
  ],
});
