import Vue from "vue";
import Vuetify from "vuetify/lib";
import zhHans from "vuetify/es5/locale/zh-Hans";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#1DA1F2",
        secondary: "#14171A"
      }
    }
  },
  lang: {
    locales: { zhHans },
    current: "zh-Hans"
  }
});
