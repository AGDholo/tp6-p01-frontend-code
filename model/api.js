/**
 * api接口统一管理
 */
import axios from "./http";
import store from "../src/store/index";
import router from "../src/router/index";

const domain = "http://127.0.0.1:8000";

const api = {
  tweetPush(params) {
    return axios.post(`${domain}/tweet`, params).then(res => {
      console.log(res.data);
    });
  },

  userUpdate(id, params) {
    return axios.put(`${domain}/user/${id}`, params).then(res => {
      store.commit("user_data", res.data);

      // 刷新当前页面
      router.go();
    });
  },

  userDetail(id) {
    return axios.get(`${domain}/user/${id}`);
  },

  me() {
    return axios.post(`${domain}/me`).then(res => {
      store.commit("user_data", res.data);
      store.commit("login");
    });
  },

  auth(action, params) {
    return axios.post(`${domain}/${action}`, params).then(res => {
      localStorage.setItem("JWT_TOKEN", res.data.token);
      store.commit("user_data", res.data);
      store.commit("login");
      router.push("/");
    });
  },

  logout(params) {
    return axios.post(`${domain}/logout`, params).then(() => {
      localStorage.removeItem("JWT_TOKEN");
      store.commit("logout");
      router.push("/login");
    });
  }
};

export default api;
