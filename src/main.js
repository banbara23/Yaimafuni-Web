// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuefire from 'vuefire'
import VueProgressBar from 'vue-progressbar'
import 'materialize-css/dist/js/materialize.js'
import 'materialize-css/dist/css/materialize.min.css'

Vue.config.productionTip = false
Vue.use(vuefire)

const options = {
  color: '#bffaf3',
  failedColor: '#124b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  inverse: false
}

Vue.use(VueProgressBar, options)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});