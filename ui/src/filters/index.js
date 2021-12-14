import dateMin from './dateMin';
import dateTime from './dateTime';
import toFixed from './toFixed';
import users from './users';
import padStart from './padStart';
import prettify from './prettify';

export default {
  install(Vue) {
    Vue.use(dateMin);
    Vue.use(dateTime);
    Vue.use(toFixed);
    Vue.use(users);
    Vue.use(padStart);
    Vue.use(prettify);
  },
};
