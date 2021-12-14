export function getUsersName(size) {
  if (size === 1) return 'участник';
  if (size > 4 && size < 21) return 'участников';
  if (size % 10 === 1 || size % 10 === 2 || size % 10 === 3) return 'участника';
  return 'участников';
}

export default {
  install(Vue) {
    Vue.filter('users', (size) => `${size} ${getUsersName(size)}`);
  },
};
