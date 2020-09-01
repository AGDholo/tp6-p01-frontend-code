import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/sign",
    name: "Sign",
    component: () => import("../views/Sign.vue")
  },
  {
    path: "/:id",
    name: "User",
    component: () => import("../views/User.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(({ name }, from, next) => {
  if (localStorage.getItem("JWT_TOKEN")) {
    // 如果存在 Token 且用户在 Login/Sign 页面则跳转到主页
    name === "Login" || name === "Sign" ? next("/") : next();
  } else {
    name === "Login" || name === "Sign" ? next() : next({ name: "Login" });
  }
});

export default router;
