import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    redirect: {
      name: "LoginView"
    }
  },
  {
    path: "/login",
    name: "LoginView",
    component: () => import("../views/LoginView.vue"),
    meta:{
      hideNavbar: true,
    }

  },
  {
    path: "/home",
    name: "HomeView",
    component: () =>
      import("../views/HomeView.vue"),
  },
  {
    path: "/News",
    name: "NewsfeedView",
    component: () =>
      import("../views/NewsfeedView.vue"),
  },
  {
    path: "/playground",
    name: "about",
    component: () =>
      import("../views/PlaygroundView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import("../views/ProfileView.vue"),
  },
  {
    path: "/nobel",
    name: "nobel",
    component: () =>
      import("../views/NobelApiView.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () =>
      import("../views/BlogView.vue"),
  },
  {
    path: "/random",
    name: "ranomImage",
    component: () =>
      import("../views/RandomImageView.vue"),
  },
  {
    path: "/todo",
    name: "toDoList",
    component: () =>
      import("../views/ToDoListView.vue"),
  },
];

const router = new VueRouter({
  beforeEach(toRoute, fromRoute, next) {
    window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'Home';

    next();
  },
  routes,
});

export default router;
