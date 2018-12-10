import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.css'

Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import global_ from './Global.vue';

Vue.prototype.GLOBAL = global_;
axios.defaults.baseURL = '';
import axios from 'axios';
Vue.prototype.$http = axios;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
