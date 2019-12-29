import Vue from 'vue'
import VueRouter from 'vue-router'
// import Question from '../views/Question.vue'
import PracticeTestMenu from '../views/PracticeTestMenu.vue'
// import SplashScreen from '../views/SplashScreen.vue'
import Menu from '../views/Menu.vue'
import YearList from '@/views/YearList.vue'
import ExamOptions from '@/views/PickExamOptions.vue'
import SelectSubject from '@/views/SelectSubject.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/grade/:number',
    name: 'examoptions',
    component: SelectSubject
  },
  {
    path: '/:year/:subjest/options',
    name: 'examoptions',
    component: ExamOptions
  },
  {
    path: '/:grade/:subject/:year',
    name: 'yearlist',
    component: YearList
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu
  },
  {
    path: '/',
    name: 'home',
    component: Menu
  },
  {
    path: '/grades',
    name: 'grades',
    component: PracticeTestMenu
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
