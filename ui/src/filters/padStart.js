export default {
  install(Vue) {
    Vue.filter('padStart', (value, num = 2, str = '0') => (value || '')
      .toString()
      .padStart(num, str));
  },
};


