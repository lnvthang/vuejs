import { createApp } from 'vue'
import router from './router/index.js'

import App from './App.vue'
import './style.css'

import commonUtils from '@/utils/commonUtils.js'

const app = createApp(App)

app.use(router)

app.use(commonUtils)

app.mount('#app')
