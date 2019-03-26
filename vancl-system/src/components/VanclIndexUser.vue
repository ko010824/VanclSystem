<template>
    <div class="bgBox">
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">
                <vancl-index-user-manage></vancl-index-user-manage>
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import VanclIndexUserManage from './VanclIndexUserManage'
    export default {
        name: "VanclIndexProduct",
        components:{
            VanclIndexUserManage
        },
        data() {
            return {
                activeName2: 'first'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style scoped>
    .bgBox{
        width: 85%;
        margin-left: 15%;
        margin-top: 54px;
        background: #fff;
        padding: 20px;
    }
</style>