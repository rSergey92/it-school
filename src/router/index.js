import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import TaskList from '@/views/TaskList';
import Task from '@/views/Task.vue'
import Analytics from '@/views/Analytics.vue'
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
    component: Home,
    meta: {
      breadcrumb: [
        { name: 'Главная' },
      ],
    },
  },
  {
    path: '/tasks',
    name: 'TasksList',
    component: TaskList,
    meta: {
      breadcrumb: [
        { name: 'Главная', link: '/' },
        { name: 'Список заявок' },
      ],
    },
  },
  {
    path: '/task/:id',
    component: Task,
    meta: {
      breadcrumb: [
        { name: 'Главная', link: '/' },
        { name: 'Список заявок', link: '/tasks' },
        { name: 'Заявка' },
      ],
    },
  },
  {
    path: '/analytics',
    component: Analytics,
    meta: {
      breadcrumb: [
        { name: 'Главная', link: '/' },
        { name: 'Аналитика' },
      ],
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
