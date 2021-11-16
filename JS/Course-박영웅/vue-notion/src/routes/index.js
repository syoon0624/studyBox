import { createRouter, createWebHistory } from 'vue-router'
import Workspace from './Workspace'
import About from './About'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: Workspace,
      // 자식 페이지
      children: [{
        name: 'Workspace',
        path: 'workspaces/:id',
        component: Workspace
      }]
    },
    {
      path: '/about',
      component: About
    }
  ]
})