import Vue from 'vue';
import Vuex from 'vuex';
import api from './utils/api';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    title: 'Анкета спорт',
    isInit: false,
    isSingIn: false,
    isAdmin: false,
    isTeam: false,
    isSport: false,
    token: '',
    user: {
      id: 0,
      name: '',
    },
    roles: [],
    team: {
      id: 0,
      name: '',
    },
  },
  mutations: {
    setInit(state) {
      state.isInit = true;
    },
    setToken(state, value = '') {
      state.isSingIn = !!value;
      state.token = value;
      api.token = state.token;
      window.localStorage.setItem('token', value);
    },
    setData(state, data = {}) {
      state.user.id = data.id || 0;
      state.user.email = data.email || '';
      state.roles = data.roles || [];
      state.isAdmin = !!state.roles.find(i => i.code === 'ADMIN');
      state.isTeam = !!state.roles.find(i => i.code === 'TEAM');
      state.isSport = !!state.roles.find(i => i.code === 'SPORT');
      state.team.id = data.team?.id || 0;
      state.team.name = data.team?.name || '';
    },
    setTitle(state, value = '') {
      state.title = value;
    },
  },
  actions: {
    async init({ state, commit, dispatch }) {
      commit('setToken', window.localStorage.getItem('token'));
      if (!state.token) {
        commit('setInit');
        return state;
      }
      return dispatch('initData');
    },
    async initData({ state, commit }) {
      return api
        .get('/auth/current')
        .then((data = {}) => {
          commit('setInit');
          commit('setToken', data.token);
          commit('setData', data.user);
          return state;
        })
        .catch((e) => {
          commit('setInit');
          commit('setToken');
          commit('setData');
          throw e;
        });
    },
    async singIn({ state, commit }, { email, password } = {}) {
      if (!email || !password) {
        throw new Error('Введите логин и пароль');
      }
      return api
        .post('/auth/singin', {
          email,
          password,
        })
        .then((data = {}) => {
          commit('setToken', data.token);
          commit('setData', data.user);
          return state;
        });
    },
    singOut({ commit }) {
      commit('setToken');
      commit('setData');
    },
    setTitle({ commit }, title) {
      commit('setTitle', title);
    },
  },
});

export default store;
