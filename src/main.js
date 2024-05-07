import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// PrimeVue
import PrimeVue from 'primevue/config';

// PrimeVue CSS
import 'primeflex/primeflex.css';

// PrimeVue Icons
import 'primeicons/primeicons.css';

// PrimeVue Material Design Theme
import 'primevue/resources/themes/mdc-light-indigo/theme.css';

createApp(App)
    .use(PrimeVue, {ripple: true})
    .use(router)
    .mount('#app')
