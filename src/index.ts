import { App } from 'vue'
import SFButton from './components/Button.vue'
import 'element-plus/dist/index.css'

const components = [SFButton]

export default {
    install(app: App) {
        components.forEach(com => {
            app.component(com.name, com)
        })
    }
}