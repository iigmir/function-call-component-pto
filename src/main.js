import Vue from "vue";
import App from "./App.vue";
import FunctionalPlugin from "./component-plugin.js";

Vue.use(FunctionalPlugin);
Vue.config.productionTip = false;

new Vue({ render: h => h(App), }).$mount('#app')
