import { createStore } from 'vuex'
import heropy from './heropy'
import user from './user'

export default createStore({
  modules: {
    heropy,
    user
  }
})
