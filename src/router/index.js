import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login'
import Main from '../pages/Main'
import Map from '../pages/Map'
import Account from '../pages/Account'
import CraftPage from '../pages/CraftPage'
import Glossary from '../pages/Glossary'
import Fight from '@/pages/Fight'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '',
      name: 'Main',
      component: Main
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/craft',
      name: 'CraftPage',
      component: CraftPage
    },
    {
      path: '/gl',
      name: 'Glossary',
      component: Glossary
    },
    {
      path: '/fight',
      name: 'Fight',
      component: Fight
    }
  ],
  mode: 'history'
})
