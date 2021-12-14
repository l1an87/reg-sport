export default {
  install(Vue) {
    Vue.filter('toFixed', (value, fixed = 1) => value?.toFixed(fixed) || '0');
  },
};
