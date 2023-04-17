import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Toaster from "@meforma/vue-toaster/src/index";

const app = createApp(App)

app.use(router)
app.use(Toaster, {
    position: "top-right"
})

app.use(createPinia())
app.use(router)

app.mount('#app')