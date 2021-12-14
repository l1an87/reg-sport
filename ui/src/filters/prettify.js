export default {
  install(Vue) {
    Vue.filter('prettify', (value) => value
      .toString()
      // eslint-disable-next-line
      .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' '));
  },
};

