import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// const HomePage = () => import ('@/views/homepage/HomePage.vue');
// const Cart = () => import ('@/views/cart/Cart.vue');
// const Classify = () => import ('@/views/classify/Classify.vue');
// const My = () => import ('@/views/my/My.vue');

const HomePage = () => import ('../views/homepage/HomePage.vue');
const Cart = () => import ('../views/cart/Cart.vue');
const Classify = () => import ('../views/classify/Classify.vue');
const My = () => import ('../views/my/My.vue');
const Detail = () => import('@/views/detail/Detail.vue')

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location){
  return originalPush.call(this,location).catch(err => err);
}

const routes = [
  {
    path: '/',
    redirect:'/mall/homepage',
    component: HomePage
  },
  {
        path: '/mall/homepage',
        component: HomePage 
  },
  {
        path: '/mall/cart',
        component: Cart 
  },
  {
        path: '/mall/classify',
        component: Classify
  },
  {
        path: '/mall/my',
        component: My 
  },
  {
        path: '/mall/detail/:id',
        component: Detail 
  },      
  
 
]

const router = new Router({
  mode: 'history',
  routes,
 
})

export default router
