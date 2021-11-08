import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Task from '../views/Task.vue'
import notFound from '@/views/notFound';

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: notFound,
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tasks',
    name: 'TasksList',
    component: () => import(/* webpackChunkName: "about" */ '../views/TaskList.vue')
  },
  {
    path: '/task/:id',
    component: Task
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
