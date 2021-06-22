import { createRouter, createWebHistory } from "@ionic/vue-router";
import routes from "./routes";
import store from "@/store/index";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requireAuth = to.matched.some((record) => record.meta.requireAuth);
  const requireNotAuth = to.matched.some(
    (record) => record.meta.requireNotAuth
  );

  const token = store.getters["auth/token"];
  if (token) {
    if (requireNotAuth) {
      next({ name: "home" });
      return;
    }
  } else if (requireAuth) {
    next({ name: "login" });
    return;
  }
  next();
});

export default router;
