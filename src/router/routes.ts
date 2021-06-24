import { RouteRecordRaw } from "vue-router";
import Tabs from "../views/Tabs.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    name: "home",
    path: "/",
    component: DefaultLayout,
    meta: {
      requireAuth: true,
    },
    children: [
      {
        path: "",
        component: () => import("@/views/Home.vue"),
      },
    ],
  },
  {
    meta: {
      requireAuth: true,
    },
    path: "/tabs/",
    component: Tabs,
    children: [
      {
        path: "",
        redirect: "/tabs/tab1",
      },
      {
        path: "tab1",
        component: () => import("@/views/Tab1.vue"),
      },
      {
        path: "tab2",
        component: () => import("@/views/Tab2.vue"),
      },
      {
        path: "tab3",
        component: () => import("@/views/Tab3.vue"),
      },
    ],
  },
  {
    meta: {
      requireNotAuth: true,
    },
    name: "login",
    path: "/login",
    component: () => import("@/views/Login.vue"),
  },
];

export default routes;
