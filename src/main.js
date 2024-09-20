
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router

import './assets/main.css';
// import './assets/tailwind.css'


import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS

// Create the Vue app and tell it to use the router
createApp(App)
  .use(router) // Make sure to use the router
  .mount('#app'); // Then mount the app
