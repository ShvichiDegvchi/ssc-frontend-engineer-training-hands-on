import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  /**
   * @description 変数を定義する場所
   */
  state: {
    globalNavigation: false,
    siteSearch: false,
  },
  /**
   * @description 指定した変数の値を返却するための処理群
   */
  getters: {
    globalNavigation: function(state) {
      return state.globalNavigation;
    },
    siteSearch: function(state) {
      return state.siteSearch;
    },
  },
  /**
   * @description 指定した変数の値を変更する直前に行う処理群。"非同期的に"値を変更する
   */
  actions: {
    globalNavigation({commit}, newVal) {
      // mutationsを叩く。
      // 「commit」という関数は、mutationsを叩くためのVuexのお作法です。
      if (newVal) {
        commit('globalNavigation', false);
      }

      else {
        commit('globalNavigation', true);
      }
    },
    siteSearch({commit}, newVal) {
      // mutationsを叩く。
      // 「commit」という関数は、mutationsを叩くためのVuexのお作法です。
      if (newVal) {
        commit('siteSearch', false);
      }

      else {
        commit('siteSearch', true);
      }
    },
  },
  /**
   * @description 指定した変数の値を変更する処理群。"同期的に"値を変更する
   */
  mutations: {
    globalNavigation(state, payload) {
      state.globalNavigation = payload;
    },
    siteSearch(state, payload) {
      state.siteSearch = payload;
    },
  },
});
