import { createStore } from 'vuex'
import message from './message'

export default createStore({
    //strict: 베포할때는 지워야 한다.
    //strict: true,
    modules: {
        message: message
    }
})