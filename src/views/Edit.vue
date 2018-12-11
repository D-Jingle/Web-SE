<template>
    <div class="container">
        <div class="head">
            <h4>编辑新闻</h4>
        </div>
        <div class="title">
            <el-input v-model="title" placeholder="请输入标题" v-loading="loading"></el-input>
        </div>

        <div class="editor">
            <VueEditor v-loading="loading" v-model="content"/>
        </div>

        <div class="submit">
            <el-button type="primary" class="submit-btn" @click="alert" plain :disabled="disabled" :loading="loading2">{{message}}</el-button>

        </div>
    </div>
</template>

<script>
    import { VueEditor } from "vue2-editor";
    export default {
        name: "Edit",
        components:{
            VueEditor,
        },
        data(){
            return{
                newsId : 0,
                title: '',
                content:'',
                loading : true,
                loading2 : false,
                message: '确认发布',

            }
        },
        beforeRouteEnter (to, from, next) {
            console.log(to,from);
            console.log(sessionStorage.getItem('username'),sessionStorage.getItem('password'));
            if(sessionStorage.getItem('username') == 'admin' && sessionStorage.getItem('password') == '123456'){
                next();
            } else {
                next({ path: '/login' });
                console.log(to,from);
            }
        },
        created(){
            this.getNews();
        },
        methods:{
            alert(){
                let that = this;
                if(that.content == '' || that.title == ''){
                    this.$message.error('标题和内容都不能为空哦～');
                    that.disabled = false;
                    that.loading2 = false;
                } else {

                    this.$http({
                        method:'post',
                        url: that.GLOBAL.BASE_URL + 'alter',
                        data:{
                            newsId : that.newsId,
                            newsTitle : that.title,
                            newsContent : that.content,

                        }
                    }).then(function(res){
                        console.log(res);
                        if(res.data.code == 0){
                            that.$message({
                                message: '修改成功',
                                type: 'success'
                            });
                            that.$router.go(-1);
                        } else {
                            alert('修改失败1');
                        }
                    }).catch(function(err){
                        console.log(err);
                        alert('获取newsItem失败2');
                    })
                }
            },
            getNews(){
                let that = this;
                this.newsId = this.$route.query.newsId;
                this.$http({
                    method:'get',
                    url: that.GLOBAL.BASE_URL + 'news?newsId=' + that.newsId,
                }).then(function(res){
                    console.log(res);
                    if(res.data.code == 0){
                        that.title = res.data.data.newsTitle;
                        that.content = res.data.data.newsContent;
                        that.loading= false;
                    } else {
                        alert('获取newsItem失败1');
                    }
                }).catch(function(err){
                    console.log(err);
                    alert('获取newsItem失败2');
                })

            }
        }
    }
</script>

<style scoped lang="scss">
    .container{
        padding: 3rem 5rem;
        background-color: #fff;
        .head{
            padding-bottom: 2rem;
        }
        .title{
            padding: 1rem 0;
        }
        .submit{
            &-btn{
                width: 100%;
                margin-top: 1rem;
            }
        }
    }

</style>