import Vue from 'vue'
import VueRouter from 'vue-router'
import Locations from '../views/Locations.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/locations/:locationNum',
    name: 'Locations',
    component: Locations
  }
]

const router = new VueRouter({
  //mode: 'history',
  routes
})

export default router
