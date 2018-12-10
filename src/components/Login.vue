<template>
    <div class="container">

        <div class="box">
            <h4>管理员登陆</h4>
            <el-input
                    placeholder="请输入用户名"
                    prefix-icon="el-icon-edit"
                    v-model="username"
                    class="input"
            />
            <el-input
                    placeholder="请输入密码"
                    prefix-icon="el-icon-edit-outline"
                    v-model="password"
                    class="input"
                    type="password"
            >
            </el-input>
            <el-button class="alert btn" type="primary" @click="submit" round>登陆</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        created(){
            this.username = '';
            this.password = '';
        },
        data(){
            return{
                username:'',
                password:''
            }
        },
        methods:{
            open() {
                this.$message({
                    message: '登陆成功',
                    type: 'success'
                });
            },
            close(){
                this.$message.error('账号或密码输入错误');
                sessionStorage.clear();
            },
            submit(){
                console.log(this.username);
                console.log(this.password);
                if(this.username == 'admin' && this.password == '123456'){
                    this.open();
                    sessionStorage.setItem('username', 'admin');
                    sessionStorage.setItem('password', '123456');
                    this.$router.push({
                        path:'/Admin'
                    })
                } else {
                    this.close();
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .container{
        width: 100%;
        padding: 10rem 20rem;
        background-color: #fff;
        box-sizing: border-box;
        /*.alert{*/
            /*position: fixed;*/
            /*top: 2rem;*/

        /*}*/
        .box{
            width: 100%;
            padding: 0 6rem;
            box-sizing: border-box;
            padding-bottom: 3rem;
            /*border: 1px solid #1a6840;*/
            box-shadow: 0px -10px 20px 1px #d2d2d2,   /*上边阴影  红色*/
            -10px 0px 20px 1px #d2d2d2,   /*左边阴影  绿色*/
            10px 0px 20px 1px #d2d2d2,    /*右边阴影  蓝色*/
            0px 10px 20px 1px #d2d2d2;    /*下边阴影  黄色*/
            h4{
                padding-top: 3rem;
                padding-bottom: 2rem;
            }
            .btn{
                margin-top: 2rem;
                width: 100%;
            }
            .input{
                margin-top: 1rem;
            }
        }
    }
</style>