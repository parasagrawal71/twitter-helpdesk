import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../practice";

createApp(App)
  .use(router)
  .mount("#app");
