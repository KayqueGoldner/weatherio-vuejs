import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
