// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VTooltip from 'v-tooltip'
// import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";
import App from './App'
import router from './router'
import './static/css/main.css'
import './static/css/map.css'
import './static/css/nav.css'
import './static/css/style.css'
import './static/css/tooltip.css'
// import store from './store'
import AppFooter from './components/Footer'
import AppHeader from './components/Header'
import AppNavigation from './components/Navigation'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import VueResource from 'vue-resource'

// Vue.use(VTooltip)
// Vue.use(TooltipPlugin);

Vue.config.productionTip = false
/* eslint-disable*/
var myMixin = {
  components: {
    AppHeader,
    AppFooter,
    AppNavigation
  },
  methods: {

  }
}

Vue.mixin(myMixin)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


