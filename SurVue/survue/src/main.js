// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import HomePage from './components/HomePage'
import AppContainer from './components/Container'

Vue.use(VueRouter);

const routes = [
  {
    path: '/', component: HomePage
  },
  {
    path: '/survey', component: AppContainer
  }
]

const router = new VueRouter({ routes: routes })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
