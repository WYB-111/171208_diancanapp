import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from "../pages/MSite/MSite";
import Search from "../pages/Search/Search";
import Profile from "../pages/Profile/Profile";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";


Vue.use(VueRouter)

export default new VueRouter({
  routes:[//注意是routes不是router之前写错了
    {
      path:'/msite',
      component:MSite,
      meta:{
        showFooter: true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter: true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter: true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooter: true
      }
    },
    {
      path:'/login',
      component:Login
    },
    {
      path: '/',
      redirect:'/msite'  //默认打开的第一个页面路径
    }
  ]
})
