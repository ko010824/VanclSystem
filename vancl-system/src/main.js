// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import '../node_modules/element-ui/lib/index.js'
import $ from 'jquery'
import './assets/css/public.css'
import './assets/css/iconfont.css'

Vue.use(ElementUI)
Vue.prototype.$ = $;
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
    //to即将进入的目标路由对象，from当前导航正要离开的路由， next  :  下一步执行的函数钩子
    if(to.path === '/login'){ 
        next() 
    }  // 如果即将进入登录路由，则直接放行
    else {//进入的不是登录路由
        if(to.meta.requiresAuth && !sessionStorage.getItem('accessToken')) {
            next({ path: '/login' })
        }
        //下一跳路由需要登录验证，并且还未登录，则路由定向到  登录路由
        else {
            next()
        }
    }  //如果不需要登录验证，或者已经登录成功，则直接放行
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
