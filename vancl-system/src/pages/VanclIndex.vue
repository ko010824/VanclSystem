<template>
    <div class="basicHei" v-on:exchange="expand">
        <vancl-index-header></vancl-index-header>
        <vancl-index-body @pass-ff="expand"></vancl-index-body>
    </div>
</template>

<script>
    import VanclIndexHeader from '../components/VanclIndexHeader'
    import VanclIndexBody from '../components/VanclIndexBody'
    export default {
        name: "VanclIndex",
        components:{
            VanclIndexHeader,
            VanclIndexBody
        },
        methods:{
            expand(){
                console.log("ddd");
            }
        }
    }
</script>

<style scoped>
    .basicHei{
        height: 100%;
    }
</style>