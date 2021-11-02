import Vue from 'vue'
import VueRouter from 'vue-router'
import Movies from '../views/Movies.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'movies',
    component: Movies
  },
  {
    path: '*',
    name: 'Not-Found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
