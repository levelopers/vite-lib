import { App } from 'vue'
import 'element-plus/dist/index.css'
import SFButton from '../stories/Button.vue'

const components = [SFButton]

export default {
    install(app: App) {
        components.forEach(com => {
            app.component(com.name, com)
        })
    }
}