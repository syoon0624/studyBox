import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home'
import About from './About'
import LogIn from './LogIn'
import SignUp from './SignUp'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/login',
      component: LogIn
    },
    {
      path: '/signup',
      component: SignUp
    }
  ]
})
