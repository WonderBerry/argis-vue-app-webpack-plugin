import Vue from 'vue'
import App from './App.vue'
import "./esriconfig"
import 'esri/themes/dark/main.css'


Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
