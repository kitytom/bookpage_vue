import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../components/LoginPage'
import RegUser from '../components/RegUser'
import HomePAge from '../components/HomePage'
import UserPage from '../components/UserPage'
import UserText from '../components/UserText'
import UserBoke from '../components/UserBoke'
import ShouCang from '../components/ShouCang'
import UserImg from '../components/UserImg'
import BokeMessage from '../components/BokeMessage'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: LoginPage },
  { path: '/login', component: LoginPage },
  { path: '/reguser', component: RegUser },
  { path: '/home', component: HomePAge },
  { path: '/userpage', component: UserPage },
  { path: '/usertext', component: UserText },
  { path: '/userboke', component: UserBoke },
  { path: '/shoucan', component: ShouCang },
  { path: '/userimg', component: UserImg },
  { path: '/bokmessage', component: BokeMessage }

]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login' || to.path === '/reguser') return next()
  const tokenstr = window.sessionStorage.getItem('token')
  if (!tokenstr) return next('/login')
  next()
})

export default router
