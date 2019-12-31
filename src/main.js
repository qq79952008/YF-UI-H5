import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Page from "viewComponents/Page/Page.vue";

// Vue.use(Svg);
Vue.config.productionTip = false;

Vue.component("Page", Page);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
