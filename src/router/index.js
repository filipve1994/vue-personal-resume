import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Resume from "@/views/Resume";
import Resume2 from "@/views/Resume2";

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  // {
  //   path: "/",
  //   name: "Resume",
  //   component: Resume,
  // },
  {
    path: "/resume2",
    alias: '/',
    name: "Resume2",
    component: Resume2,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
