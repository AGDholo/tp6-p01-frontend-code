import Vue from "vue";
import Vuex from "vuex";
import snackbar from "./modules/snackbar";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    viewer: {
      data: ""
    },
    user: {
      isLogin: false,
      data: ""
    },
    tweet: {
      data: Object
    }
  },
  mutations: {
    tweet_data(state, data) {
      state.tweet.data = data;
    },

    viewer_data(state, data) {
      state.viewer.data = data;
    },

    user_data(state, data) {
      state.user.data = data;
    },

    login(state) {
      state.user.isLogin = true;
    },

    logout(state) {
      state.user.isLogin = false;
      state.user.data = "";
    }
  },
  actions: {},
  modules: {
    snackbar: snackbar
  }
});
