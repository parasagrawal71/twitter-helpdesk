import { createWebHistory, createRouter } from "vue-router";
import { readCookie } from "./utils/cookie";

// IMPORT ALL COMPONENTS HERE
import Conversations from "./pages/Conversations.vue";
import Login from "./pages/Login.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    beforeEnter: (to, from, next) => {
      const userData = readCookie("userData");
      if (userData && JSON.parse(userData).oauth_token) {
        next({
          name: "Conversations",
        });
      } else {
        next();
      }
    },
  },
  {
    path: "/conversations",
    name: "Conversations",
    component: Conversations,
    beforeEnter: (to, from, next) => {
      const userData = readCookie("userData");
      if (userData && JSON.parse(userData).oauth_token) {
        next();
      } else {
        next({
          name: "Login",
        });
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
