import Vue from 'vue'
import MyPlugin from './component-plugin.js';
import App from './App.vue'

Vue.use(MyPlugin)

Vue.config.productionTip = false

new Vue({ render: h => h(App), }).$mount('#app')
