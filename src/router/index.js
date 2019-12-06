import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/hot",
    name: "hot",
    component: () => import("../views/Hot.vue")
  },
  {
    path: "/topic",
    name: "topic",
    component: () => import("../views/Topic.vue")
  },
  {
    path: "/detail",
    name: "detail",
    component: () => import("../views/Detail.vue")
  },
  {
    path: "/drafts",
    name: "drafts",
    component: () => import("../views/Drafts.vue"),
    meta: { requireAuth: true } //该字段表示进入该路由是需要登录
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    //判断该路由是否需要登录权限
    if (store.state.token) {
      //判断vuex state有没有当前的token
      next();
    } else {
      next({
        path: "/"
        // query:{}
      });
    }
  } else {
    next();
  }
});

export default router;
