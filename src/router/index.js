import Vue from "vue";
import Router from "vue-router";

import TopPage from "../pages/TopPage.vue";
import ConfigPage from "../pages/ConfigPage";

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
  ],
});
