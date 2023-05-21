import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import test from '../dist/index'
import '../dist/style.css'

createApp(App)
.use(test)
.mount('#app')
