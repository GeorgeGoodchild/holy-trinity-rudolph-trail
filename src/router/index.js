import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Donate from '../views/Donate.vue'
import Locations from '../views/Locations.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/donate',
    name: 'Donate',
    component: Donate
  },
  {
    path: '/locations/:locationNum',
    name: 'Locations',
    component: Locations
  }
]

const router = new VueRouter({
  routes
})

export default router
