import '@mdi/font/css/materialdesignicons.css';
import Vuetify from 'vuetify/lib';
import ru from 'vuetify/es5/locale/ru';
import { TiptapVuetifyPlugin } from 'tiptap-vuetify';
import 'tiptap-vuetify/dist/main.css';
import VueMask from 'v-mask';

export const VuetifyInstall = {
  install(Vue) {
    Vue.use(VueMask);
    Vue.use(Vuetify);
  },
};

export const VuetifyTiptapInstall = {
  install(Vue, { vuetify }) {
    Vue.use(TiptapVuetifyPlugin, {
      iconsGroup: 'mdi',
      vuetify,
    });
  },
};

export const VuetifyInit = ({ primary = '#E53935' } = {}) => new Vuetify({
  lang: {
    locales: { ru },
    current: 'ru',
  },
  theme: {
    dark: false,
    themes: {
      dark: {
        primary,
      },
      light: {
        primary,
      },
    },
    icons: {
      iconfont: 'mdi',
    },
  },
});
