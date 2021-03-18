import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Resume from "@/views/Resume";
import Resume2 from "@/views/Resume2";
import Resume3 from "@/views/resume3/Resume3";
// import Resume4 from "@/views/resume4/Resume4";

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
    path: "/resume3",
    name: "Resume3",
    component: Resume3,
  },
  // {
  //   path: "/resume4",
  //   name: "Resume4",
  //   component: Resume4,
  // },
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
