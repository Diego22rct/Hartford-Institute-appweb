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


// PrimeVue Components
import Toolbar from 'primevue/toolbar';
import Button from "primevue/button";
import Avatar from "primevue/avatar";
import Image from 'primevue/image';

// Internationalization
import i18n from './locales'

createApp(App)
    .use(router)
    .use(i18n)
    .use(PrimeVue)
    .component('pv-toolbar', Toolbar)
    .component('pv-button', Button)
    .component('pv-avatar', Avatar)
    .component('pv-image', Image)
    .mount('#app')
