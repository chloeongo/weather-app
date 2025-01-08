import { createApp } from "vue";

import App from "./App.vue";
import Header from "./components/header.vue";
import Home from "./components/Home.vue";
import Footer from "./components/Footer.vue";

const app = createApp(App);
app.component("Header", Header);
app.component("Home", Home);
app.component("Footer", Footer);
app.mount("#app");

const routes = [
  { path: "/", component: Home },
  { path: "/weer", component: Weer },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
});

export default router;
