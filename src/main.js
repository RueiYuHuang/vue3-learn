import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/assets/scss/main.scss'
import user from './plugins/user'
import i18n from './plugins/i18n'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(user)
app.use(i18n)

app.mount('#app')