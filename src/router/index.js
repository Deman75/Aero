import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import FirstFlightPage from "../pages/FirstFlightPage.vue";
import LevelTwoPage from "../pages/LevelTwoPage.vue";
import LevelThreePage from "../pages/LevelThreePage.vue";

const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/start", name: "start", component: FirstFlightPage },
  { path: "/level-2", name: "level-2", component: LevelTwoPage },
  { path: "/level-3", name: "level-3", component: LevelThreePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
