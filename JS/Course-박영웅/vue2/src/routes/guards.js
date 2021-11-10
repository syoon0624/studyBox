import auth from '~/utils/auth'
import router from './index'
import store from '~/store'

router.beforeEach(async () => {
    try{
    const user = await auth()
    store.commit('assignState', {
        currentUser: user
    })
    console.log(user)
    } catch(err) {
        console.log(err.response.data)
    }
   
})