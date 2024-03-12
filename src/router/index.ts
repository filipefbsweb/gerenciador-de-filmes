import { createRouter, createWebHistory } from "vue-router";
import allRoutes from "./routes";

const routes = [
	...allRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
