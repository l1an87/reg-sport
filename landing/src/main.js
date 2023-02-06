import Vue from 'vue';

import App from './app/App.vue';


window.app = new Vue({
  mounted() {
  },
  render: (h) => h(App),
}).$mount('#app');
