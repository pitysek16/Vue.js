import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import store from './store';
import dateFilter from '@/filters/date.filters';
import currencyFilter from '@/filters/currency.filter';
import messagePlugin from '@/utils/message.plugin';
import Loader from '@/components/app/Loader';
import 'materialize-css/dist/js/materialize.min';
import Paginate from 'vuejs-paginate';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.component('Loader', Loader);
Vue.component('paginate', Paginate);

firebase.initializeApp({
  apiKey: 'AIzaSyAQFew0R40pg9DjZzeHR6KY2_301-ywdEk',
  authDomain: 'crm-budget-3d343.firebaseapp.com',
  databaseURL: 'https://crm-budget-3d343-default-rtdb.firebaseio.com',
  projectId: 'crm-budget-3d343',
  storageBucket: 'crm-budget-3d343.appspot.com',
  messagingSenderId: '730356370773',
  appId: '1:730356370773:web:7d21f34eb968725cb273dc',
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
