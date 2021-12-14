export const month = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

export function getDateMin(date) {
  if (!date) return '';
  const d = new Date(date);
  return `${d.getDate()
    .toString()
    .padStart(2, '0')} ${month[d.getMonth()]}`;
}

export default {
  install(Vue) {
    Vue.filter('dateMin', getDateMin);
  },
};
