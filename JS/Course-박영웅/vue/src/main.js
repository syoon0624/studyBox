import * as Vue from 'vue'
import App from './App.vue'
import store from '~/store'
import { fetch } from '~/plugins'
import router from '~/routes'
import TheModal from '~/components/TheModal'
import '~/routes/guards'

const app = Vue.createApp(App)
//플러그인 등록 방법
app.use(router)
//컴포넌트 전역 사용
app.component('TheModal', TheModal)
app.use(store)
app.use(fetch, {
    endpoint: 'https://www.omdbapi.com'
})
app.mount('#app')