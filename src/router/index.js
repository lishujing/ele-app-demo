import Vue from "vue";
import VueRouter from "vue-router";
import App from '../App.vue'
import Home from '../views/home/index'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: App, // 顶层路由，对应index.html
    children:[ // 二级路由，对应App.vue
      {
        path:'',
        redirect:'/home'
      },
      // 首页城市列表页
      {
        path:'/home',
        name:'Home',
        component:Home
      },
      // 当前选择城市页
      {
        path: '/city/:cityid',
        name: 'City',
        component: () => import('@/views/city/index')
      },
      //所有商铺列表页
      {
        path: '/msite',
        name: 'Msite',
        component: () => import('@/views/msite/index'),
        meta: { keepAlive: true },
      },
    ]
  }
];

const router = new VueRouter({
  routes,
});

export default router;
