export function getDateTime(date) {
  if (!date) return '';
  const d = new Date(date);
  return `${d.getHours()
    .toString()
    .padStart(2, '0')}:${d.getMinutes()
    .toString()
    .padStart(2, '0')}`;
}

export default {
  install(Vue) {
    Vue.filter('dateTime', getDateTime);
  },
};
