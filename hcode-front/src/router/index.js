import Vue from 'vue'
import Router from 'vue-router'
import Body from '../components/Body'
import Index from '../components/content/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/body/index'
    },
    {
      path: '/body',
      name: 'Body',
      component: Body,
      children : [
        {path: '/body/index', component: Index},
      ]
    }
  ]
})
