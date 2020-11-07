import { createWebHistory, createRouter } from "vue-router";

// IMPORT ALL COMPONENTS HERE
import Conversations from "./pages/Conversations.vue";
import Login from "./pages/Login.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/conversations",
    name: "Conversations",
    component: Conversations,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
