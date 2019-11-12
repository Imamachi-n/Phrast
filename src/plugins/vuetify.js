import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.indigo.darken3, // #E53935
        secondary: colors.red.lighten4, // #FFCDD2
        accent: colors.red.darken4, // #3F51B5
      },
    },
  },
  icons: {
    iconfont: "fa",
  },
});
