import Vue from "vue";
import Router from "vue-router";

import TopPage from "../pages/TopPage.vue";
import ConfigPage from "../pages/ConfigPage";
import GamePage from "../pages/GamePage.vue";
import ReviewPage from "../pages/ReviewPage.vue";
import GameSelectPage from "../pages/GameSelectPage.vue";
import GrammerCheckPage from "../pages/GrammerCheckPage.vue";


Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      component: TopPage,
    },
    {
      path: "/grammer_check",
      component: GrammerCheckPage,
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
    {
      path: "/gameSelect",
      component: GameSelectPage,
    },
  ],
});