<template>
    <div class="basicHei">
        <aside>
            <ul class="first-menuUls">
                <li class="firstLi" v-for="(i,x) in lis" :key="x" :class="{active:x===index}" @click="getIndex(x)">
                    <router-link :to="i.href">
                        <span><i class="iconfont" :class="i.iconClassName"></i>{{i.menuName}}</span>
                        <i id="right" class="iconfont icon-iconfontjiantou5"></i>
                        <i id="down" class="iconfont icon-jiantou9 none"></i>
                    </router-link>
                    <ul class="second-menuUls">
                        <li v-for="(s,d) in i.secLis" :class="{focus:d===index1}" :key="d" @click.stop="getIndex2(d)">
                            <router-link :to="s.secHref">{{s.secName}}</router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "VanclIndexBody",
        data(){
            return {
                index:0,
                show:true,
                index1:0,
                lis:[
                    {menuName:'首页',iconClassName:"icon-home",href:"/"
                    },
                    {menuName:'用户管理',iconClassName:"icon-yonghu",href:"",
                        secLis:[{secName:"用户统计",secHref:"/vip"},
                            {secName:"用户信息",secHref:"/user"},
                            {secName:"用户账户修改记录",secHref:""}]
                    },
                    {menuName:'商品管理',iconClassName:"icon-shangpinguanli",href:"",
                        secLis:[{secName:"发布商品",secHref:""},
                            {secName:"商品列表",secHref:"/product"},
                            {secName:"商品推荐",secHref:""},
                            {secName:"商品分类",secHref:""},
                            {secName:"运费模板",secHref:""}]
                    },
                    {menuName:'订单管理',iconClassName:"icon-dingdanguanli",href:"",
                        secLis:[{secName:"订单列表",secHref:""},
                                {secName:"退换列表",secHref:""},
                                {secName:"评价管理",secHref:""}]
                    },
                    {menuName:'营销管理',iconClassName:"icon-yingxiaoguanli",href:"",
                        secLis:[{secName:"优惠券",secHref:""},
                                {secName:"帮TA付",secHref:""},
                                {secName:"活动大厅",secHref:"/sell"},
                                {secName:"奖励设置",secHref:""},
                                {secName:"首页弹窗",secHref:""},
                                {secName:"Banner",secHref:""},
                                {secName:"公告",secHref:""},
                                {secName:"帮助中心",secHref:""},
                                {secName:"小程序/微商城",secHref:""}]
                    },
                    {menuName:'数据统计',iconClassName:"icon-shujutongji",href:"",
                        secLis:[{secName:"新增数据",secHref:"/count"},
                                {secName:"销量统计",secHref:"/sale"}]
                    },
                    /*{menuName:'客服中心',iconClassName:"icon-kefuzhongxin",href:"",
                        secLis:[{secName:"",secHref:""}]
                    },*/
                    {menuName:'设置',iconClassName:"icon-quanxianpeizhi",href:"",
                        secLis:[{secName:"修改密码",secHref:""},
                                {secName:"退出登录",secHref:"/login"}]
                    }
                ]
            }
        },
        props:[],
        methods:{
            getIndex(x){
                this.index = x;
                this.show = !this.show;

            },
            getIndex2(d){
                this.index1 = d;
            }
        },
        mounted() {
            if($(".firstLi:eq(0)")){
                $('#right').css('display','none');
                $('#down').css('display','none');
            }
            let right = $(".active>a>.icon-iconfontjiantou5");
            let down = $('.active>a>.icon-jiantou9');
            $(".active>a").click(function(e){
                e.stopPropagation();
                $(".active>a").next().slideToggle(500);
                /*if(down.hasClass("none")){
                    right.addClass('none');
                    down.removeClass('none');
                }else{
                    right.removeClass('none');
                    down.addClass('none');
                }*/
            });
        }
    }
</script>

<style scoped>
    @import '../assets/css/index.css';
    .basicHei{
        height: 100%;
        display: flex;
    }
</style>