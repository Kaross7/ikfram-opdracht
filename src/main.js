import { createApp } from 'vue'
import App from './App.vue'
import valutaKiezen from './components/valutaKiezen.vue';
const app = createApp(App);

app.component('valuta-kiezen', valutaKiezen );

app.mount('#app')
