import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAdmin: false,
    itemList: [],
  },
  getters: {
  },
  mutations: {
    getItems(state, data) {
      state.itemList = data;
    },
  },
  actions: {
    async getItems(context) {
      const { data } = (await axios.get('https://cc80-93-22-134-0.ngrok.io/v1/api/market/products'));
      context.commit('getItems', data);
    },
  },
  modules: {
  },
});
