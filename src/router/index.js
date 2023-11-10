import Vue from 'vue'
import VueRouter from 'vue-router'
import People from '../views/People.vue'
import More from '../views/More.vue'
import Movies from '../views/movies/Movies.vue'
import MovieDetails from '../views/movies/MovieDetails.vue'
import TvShow from '../views/TvShow.vue'
import Login from '../views/Login.vue'
import Join from '../views/Join.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/people',
    name: 'People',
    component: People
  },
  {
    path: '/more',
    name: 'More',
    component: More
  },
  {
    path: '/',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/movies/:id',
    name: 'MovieDetails',
    component: MovieDetails,
    props: true
  },
  {
    path: '/tvshow',
    name: 'TvShow',
    component: TvShow
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/join',
    name: 'Join',
    component: Join
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
