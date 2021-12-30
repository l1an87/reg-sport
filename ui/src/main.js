import Vue from 'vue';
import { VuetifyInstall, VuetifyTiptapInstall, VuetifyInit } from '@/plugins/vuetify';
import { store } from '@/store';
import router from '@/router';
import filters from '@/filters';

import Layout from './layout/Layout.vue';

Vue.config.productionTip = false;
Vue.use(VuetifyInstall);
Vue.use(filters);
const vuetify = VuetifyInit({ primary: '#001275' });
Vue.use(VuetifyTiptapInstall, { vuetify });

window.app = new Vue({
  vuetify,
  store,
  router,
  mounted() {
    this.$store.dispatch('init');
  },
  render: (h) => h(Layout),
}).$mount('#app');
