import Vue from 'vue';
import App from '@/pages/app/app.vue';
import router from '@/config/router';
import store from '@/store';
import '@/config/register-service-worker';
import 'buefy/dist/buefy.css';
import '@/theme/_all.scss';
import Vue2Filters from 'vue2-filters';
import '@/modules/core/fontawesome';



Vue.config.productionTip = false;
Vue.use(Vue2Filters);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
