import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import './styles/quasar.styl';
import '@quasar/extras/material-icons/material-icons.css';
import Quasar from 'quasar';
import { MockJSON } from '@/services/core.service';

Vue.use(Quasar as any, {
  config: {},
});

Vue.config.productionTip = false;

export const mockJSON: MockJSON = new MockJSON();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
