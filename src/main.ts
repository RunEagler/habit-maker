import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import './styles/quasar.styl';
import '@quasar/extras/material-icons/material-icons.css';
import Quasar from 'quasar';
import { MockJSON } from '@/services/core.service';
import { createProvider } from './vue-apollo';

Vue.use(Quasar as any, {
  config: {
    brand: {
      primary: '#ffc66d',
      secondary: '#cc7832',
      accent: '#9876aa',

      dark: '#524f4f',

      positive: '#6a8759',
      negative: '#ff0000',
      info: '#6897bb',
      warning: '#bbb529',
    },
  },
});

Vue.config.productionTip = false;

export const mockJSON: MockJSON = new MockJSON();

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: h => h(App),
}).$mount('#app');
