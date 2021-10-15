import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../components/UserData'
import HomeWork from '../components/HomeWork'
import OneData from '../components/OneData'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/homework',
    name: 'HomeWork',
    component: HomeWork
  },
  {
    path:"/one/:id",
    name: "OneData",
    component: OneData

  }


  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
