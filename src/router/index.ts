import { createRouter, createWebHistory } from "vue-router";
import ProductPages from "../views/ProductPages.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ProductPages,
    },
  ],
});

export default router;
