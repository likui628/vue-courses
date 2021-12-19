import { createRouter, createWebHashHistory } from 'vue-router'

import Login from './views/LoginForm.vue'
import Form from './views/SimpleForm.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/form',
      component: Form
    }
  ]
})
