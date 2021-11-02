import * as Vue from 'vue'
import App from './App.vue'
//import store from '~/store'
import { fetch } from '~/plugins'

const app = Vue.createApp(App)
//플러그인 등록 방법
//app.use(store)
app.use(fetch)
app.mount('#app')