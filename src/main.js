import { createApp } from 'vue';

import router from '@/router';
import store from '@/store/index';
import App from "../src/App"


const app = createApp(App)
      app.use(router)
      app.use(store)
      .mount('#app');
