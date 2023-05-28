/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import SAFEUI from '../lib/safe-ui.js'
import '../lib/style.css'

createApp(App).use(SAFEUI).mount('#app')
