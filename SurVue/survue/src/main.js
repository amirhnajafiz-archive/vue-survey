// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import NameForm from "./components/NameForm";
import IdForm from "./components/IdForm";
import BirthForm from "./components/BirthForm.vue";
import UniversityForm from "./components/UniversityForm.vue";
import Survey from "./components/Survey.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/', component: NameForm
  },
  {
    path: '/id_form', component: IdForm
  },
  {
    path: '/birth_form', component: BirthForm
  },
  {
    path: '/uni_form', component: UniversityForm
  },
  {
    path: '/survey_form', component: Survey
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
