import Vue from 'vue';
import App from './App.vue';
import router from './router';
import i18n from '@/plugins/i18n';
import store from './store';
import BootstrapVue from 'bootstrap-vue'
import SocialSharing from 'vue-social-sharing'

import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Ionic);
Vue.use(BootstrapVue)
Vue.use(SocialSharing)
Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
