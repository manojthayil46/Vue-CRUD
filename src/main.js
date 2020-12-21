import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Student from './components/Student';
Vue.config.productionTip = false

Vue.use(VueRouter);
const routes = [
  { path : '/',component :Student}
 
]
const router = new VueRouter({
  routes
})
new Vue({
  router : router,
  render: h => h(App),
}).$mount('#app')
