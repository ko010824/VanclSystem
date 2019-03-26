<template>
    <div class="login_box">
        <div class="login"
             v-loading="load_data"
             element-loading-text="正在登陆中..."
             @keyup.enter="submit_form">
            <div class="login_left">
                <div class="login_left_content">
                    <img class="logo" src="../assets/img/logo.png" alt="">
                    <p>凡客后台管理系统</p>
                    <div class="user">
                        <img src="../assets/img/user.png" alt="">
                        <input type="text"/>
                    </div>
                    <div class="pass">
                        <img src="../assets/img/pass.png" alt="">
                        <input type="password"/>
                    </div>
                    <div class="check">
                        <input type="checkbox"/>记住密码
                    </div>
                    <input class="btn" type="button" value="登录" @click="enterTo()"/>
                </div>
            </div>
            <div class="login_right"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VanLogin",
        data(){
            return {
                form: {
                    username: null,
                    password: null
                },
                rules: {
                    username: [{required: true, message: '请输入账户名！', trigger: 'blur'}],
                    password: [{required: true, message: '请输入账户密码！', trigger: 'blur'}]
                },
                //请求时的loading效果
                load_data: false
            }
        },
        methods: {
            enterTo(){
                this.$router.push("/");
            },
            //提交
            submit_form() {
                this.$refs.form.validate((valid) => {
                    if (!valid) return false
                    this.load_data = true
                    //登录提交
                    this.$fetch.api_user.login(this.form)
                        .then(({data, msg}) => {
                            this.set_user_info({
                                user: data,
                                login: true
                            })
                            this.$message.success(msg)
                            setTimeout(this.$router.push({path: '/'}), 500)
                        })
                        .catch(({code}) => {
                            this.load_data = false
                            if (code === port_code.error) {
                                this.$notify.info({
                                    title: '温馨提示',
                                    message: '账号和密码都为：admin'
                                })
                            }
                        })
                })
            }
        }
    }
</script>

<style scoped>
    .login_box{
        height:100%;
        background: url("../assets/img/login-bac.png");
        background-size: 100% 100%;
    }
    .login{
        width:68%;
        height:80%;
        border-radius: 15px;
        background: #ffffff;
        position: fixed;
        left:16%;
        top:10%;
    }
    .login_left{
        float: left;
        width:37.55%;
    }
    .login_left .login_left_content{
        width:55.3%;
        margin:50px auto 0 auto;
    }
    .login_left_content .logo{
        display: block;
        width:72px;
        height:72px;
        margin:0 auto;
    }
    .login_left_content p{
        font-size: 16px;
        color:#646464;
        text-align: center;
        line-height: 16px;
        margin-top:22px;
    }
    .user,.pass{
        width:100%;
        border-bottom:1px solid #6cb0ff;
    }
    .user img,.pass img{
        width:22px;
        height:22px;
        margin-right: 10px;
        vertical-align: middle;
    }
    .user input{
        margin-top: 42px;
    }
    .user input,.pass input{
        width:70%;
        height:22px;
        margin-bottom: 14px;
        border: 0;
    }
    .user input:focus{
        outline:none;
    }
    .pass input:focus{
        outline:none;
    }
    .pass input{
        margin-top: 22px;
    }
    .check{
        font-size: 12px;
        color:#6f6f6f;
        line-height: 12px;
        margin-top: 14px;
        margin-bottom: 26px;
    }
    .check input{
        width:15px;
        height: 15px;
        margin-right:8px;
        background: #ffffff;
        vertical-align: middle;
    }
    .btn{
        width:100%;
        height:35px;
        background: #3695ff;
        font-size: 14px;
        color:#fff;
        border-radius: 24px;
        border:0;
        text-align: center;
    }
    .btn:focus{
        outline:none;
    }
    .login_right{
        float: left;
        width:62.45%;
        height:100%;
        background: url("../assets/img/login-bac2.png");
        background-size: 100% 100%;
    }
</style>
