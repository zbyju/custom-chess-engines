import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./plugins/element.js";
import "element-ui/lib/theme-chalk/reset.css";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
