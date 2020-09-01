import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import api from "../model/api";

Vue.prototype.$api = api; // 将api挂载到vue的原型上

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
