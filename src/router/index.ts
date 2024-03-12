import { createRouter, createWebHistory } from "vue-router";
import allRoutes from "./routes";

const routes = [
  ...allRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

function hasValidation(to:any) {
  const token = localStorage.getItem("token");
  return (
    to.meta.hasAutentication == true && !token
  );
}

router.beforeEach((to, from, next) => {
  if (hasValidation(to)) {
    return next("/login");
  }
  next();

});

export default router;