import Vue from 'vue'
import Router from 'vue-router'
import VanclIndex from "../pages/VanclIndex"
import VanclLogin from "../pages/VanclLogin"
import VanclIndexUser from "../components/VanclIndexUser"
import VanclIndexMain from "../components/VanclIndexMain"
import VanclIndexVip from "../components/VanclIndexVip"
import VanclIndexSale from "../components/VanclIndexSale"
import VanclIndexSell from '../components/VanclIndexSell'
import VanclIndexCount from '../components/VanclIndexCount'
import VanclIndexProduct from '../components/VanclIndexProduct'

Vue.use(Router);

export default new Router({
    // linkExactActiveClass: 'active',
    mode:'history',
    routes: [
        {
            path:'/',
            // name:'VanclIndex',
            component:VanclIndex,
            children:[
                {
                    path:'/',
                    name:'VanclIndexMain',
                    component:VanclIndexMain
                },
                {
                    path:'/user',
                    name:'VanclIndexUser',
                    component:VanclIndexUser
                },

                {
                    path:'/vip',
                    name:'VanclMember',
                    component:VanclIndexVip
                },
                {
                    path:'/sale',
                    name:'VanclSell',
                    component:VanclIndexSale
                },
                {
                    path:'/sell',
                    name:'VanclIndexSell',
                    component:VanclIndexSell
                },
                {
                    path:'/count',
                    name:'VanclIndexCount',
                    component:VanclIndexCount
                },
                {
                    path:'/product',
                    name:'VanclIndexProduct',
                    component:VanclIndexProduct
                }
            ]
        },
        {
            path:'/login',
            name:'VanclLogin',
            component:VanclLogin,
            meta: {requiresAuth: true}
        }
    ]
})
