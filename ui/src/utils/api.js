import axios from 'axios';
import { store } from '@/store';

export default class api {
  static set token(value) {
    axios.defaults.headers.common.Authorization = `Bearer ${value}`;
  }

  static get token() {
    return axios.defaults.headers.common.Authorization;
  }

  static set baseURL(value) {
    axios.defaults.baseURL = value;
  }

  static get baseURL() {
    return axios.defaults.baseURL;
  }

  static get axios() {
    return axios;
  }

  static get(url, props) {
    return axios
      .get(url, props)
      .then(api.then, api.catch);
  }

  static find(url, id, props) {
    return axios
      .get(`${url}/${id}`, props)
      .then(api.then, api.catch);
  }

  static post(url, dt, props) {
    return axios
      .post(url, dt, props)
      .then(api.then, api.catch);
  }

  static del(url, id, props) {
    return axios
      .delete(`${url}/${id}`, props)
      .then(api.then, api.catch);
  }

  static then(response) {
    console.log(response);
    return response.data;
  }

  static catch(e) {
    if (!axios.isCancel(e)) {
      if (e.response.status === 401) {
        store.dispatch('singOut');
      }
    }
    throw e;
  }
}

api.baseURL = '/api';
