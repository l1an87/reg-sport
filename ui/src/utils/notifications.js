/* eslint-disable */
import AWN from "awesome-notifications";
import 'awesome-notifications/dist/style.css';

export const notifier = new AWN({
  labels: {
    alert: '',
  },
  icons: { enabled: false },
  position: 'top-right',
});

export const notifyAlert = function (message) {
  if (Array.isArray(message)) {
    message = message.join('<br>');
  }

  return notifier.alert(message);
};
