import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      isLogin: false,
      data: ""
    }
  },
  mutations: {
    user_data(state, data) {
      state.user.data = data;
    },

    login(state) {
      state.user.isLogin = true;
    },

    logout(state) {
      state.user.isLogin = false;
      state.user.data = "";
      localStorage.clear();
      router.push("/login");
    }
  },
  actions: {},
  modules: {}
});
