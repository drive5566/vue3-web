
import './assets/reset.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createMyRouter } from './router'





// createApp(App).mount('#app')
const app = createApp(App)
const router = createMyRouter()
app.use(router)
app.mount('#app')