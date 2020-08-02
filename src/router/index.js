import Vue from 'vue'
import Router from 'vue-router'
import Todolist from '@/components/Todolist'
import Todolist2 from '@/components/Todolist2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todolist',
      component: Todolist
    },
    {
      path: '/todolist2',
      name: 'Todolist2',
      component: Todolist2
    }
  ]
})
