import axios from 'axios'

export default {
    install(app, options) {
        const { endpoint } = options
        app.config.globalProperties.$fetch = async (movieName) => {
            const { data } = await axios.get(`${endpoint}/?apikey=7035c60c&s=${movieName}`)
            return data
        }
    }
}