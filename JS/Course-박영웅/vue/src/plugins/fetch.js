import axios from 'axios'

export default {
    install(app, options) {
        app.config.globalProperties.$fetch = () => {
            console.log('HEROPY!')
        }
    }
}