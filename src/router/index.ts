import { createRouter, createWebHistory } from "@ionic/vue-router";
import routes from "./routes";
import storage from "@/libs/storage";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requireAuth = to.matched.some((record) => record.meta.requireAuth);
  const requireNotAuth = to.matched.some(
    (record) => record.meta.requireNotAuth
  );

  // const token = storage.getItem("token");
  const token = await storage.getItem("token");
  console.log(token);
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
