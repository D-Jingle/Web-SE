import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Rjgc from './views/Rjgc.vue'
import Xxgl from './views/Xxgl.vue'
import Jsjj from './views/Jsjj'
import Kyxm from './views/Kyxm'
import Laboratory from './views/Laboratory'
import Cgjl from './views/Cgjl'
import Cs from './views/Cs'
import Notice from './views/Notice'
import News from './views/News'
import Login from './views/Login'
import Admin from './views/Admin'
import Edit from './views/Edit'
import PublishNews from './views/PublishNews'
import Blank from './views/Blank'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
      {
          path: '/rjgc',
          name: 'rjgc',
          component: Rjgc
      },
      {
          path: '/xxgl',
          name: 'xxgl',
          component: Xxgl
      },
      {
          path: '/jsjj',
          name: 'jsjj',
          component: Jsjj
      },
      {
          path: '/kyxm',
          name: 'kyxm',
          component: Kyxm
      },
      {
          path: '/laboratory',
          name: 'laboratory',
          component: Laboratory
      },
      {
          path: '/cgjl',
          name: 'cgjl',
          component: Cgjl
      },
      {
          path:'/cs',
          name:'cs',
          component:Cs
      },
      {
          path:'/notice',
          name:'notice',
          component:Notice
      },
      {
          path:'/news',
          name:'news',
          component:News
      },
      {
          path:'/login',
          name:'login',
          component:Login
      },
      {
          path:'/admin',
          name:'admin',
          component:Admin
      },
      {
          path: '/edit',
          name: 'edit',
          component:Edit
      },
      {
          path: '/publishnews',
          name: 'publishnews',
          component: PublishNews
      },
      {
          path:'/blank',
          name:'blank',
          component: Blank
      }

  ]
})
