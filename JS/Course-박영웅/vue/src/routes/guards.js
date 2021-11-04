import router from './index'

router.beforeEach((to, from) => {
    console.log(to, from)

    if(to.meta.auth) {
        //로그인 여부 확인
        if(!localStorage.getItem('token')) {
            return '/signin'
        }
    }

    return true
})

