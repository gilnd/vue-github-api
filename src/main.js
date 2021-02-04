import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/css/tailwind.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.config.productionTip = false
Vue.use(store);

library.add(faSpinner, faExclamationTriangle)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
