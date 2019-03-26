<template>
    <header>
        <div class="head-left">
            <a href=""><img src="../assets/img/logo.png" alt=""></a>
            <h5>后台管理系统</h5>
        </div>
        <div class="head-right">
            <a href="javascript:void(0);" @click="exchange"><i class="iconfont icon-caidan"></i></a>
            <div class="head-right-my">
                <p>欢迎您!<span id="userName">张三</span><i class="iconfont icon-jiantou9"></i></p>
                <router-link to="/login">登录</router-link>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "VanclIndexHeader",
        methods:{
            exchange(){
                this.$emit("pass-ff");
            }
        }
    }
</script>

<style scoped>
    @import '../assets/css/index.css';
</style>