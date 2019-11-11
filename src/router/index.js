import Vue from "vue";
import Router from "vue-router";

import TopPage from "../pages/TopPage.vue";
import ConfigPage from "../pages/ConfigPage";
import GamePage from "../pages/GamePage.vue";
import ReviewPage from "../pages/ReviewPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: TopPage,
    },
    {
      path: "/config",
      component: ConfigPage,
    },
    {
      path: "/game",
      component: GamePage,
    },
    {
      path: "/review",
      component: ReviewPage,
    },
  ],
});
