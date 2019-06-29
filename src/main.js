// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import goods from 'components/goods/goods.vue';
Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/goods', component: goods }
];
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
});

const app = new Vue({
  router
}).$mount('#app');
