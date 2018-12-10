<template>
    <div class="container">
        <div class="head">
            <h4>编辑新闻</h4>
        </div>
        <div class="title">
            <el-input v-model="title" placeholder="请输入标题"></el-input>
        </div>

        <div class="editor">
            <VueEditor v-model="content"/>
        </div>

        <div class="submit">
            <el-button type="primary" class="submit-btn" @click="alert" plain>确认修改</el-button>
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
                if(this.content == '' || this.title == ''){
                    this.$message.error('标题和内容都不能为空哦～');
                } else {
                    // this.$message({
                    //     message: '修改成功',
                    //     type: 'success'
                    // });
                    // this.$router.go(-1);
                    this.$http({
                        method:'get',
                        url: this.GLOBAL.BASE_URL + 'alter',
                        data:{
                            newsId : 2,
                            newsTitle : this.title,
                            newsContent : this.content,
                        }
                    }).then(function(res){
                        console.log(res);
                        if(res.data.code == 0){
                            this.$message({
                                message: '修改成功',
                                type: 'success'
                            });
                            this.$router.go(-1);
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
                this.newsId = this.$route.query.newsId;
                console.log(this.$route.query.newsId);
                this.title = '测试用题目啦啦啦啦啦啦符合服务费额我过分呀我发货';
                this.content = '<h2>测试用</h2><br/><p>这是p段落啦啦啦</p>'
                // this.$http({
                //     method:'get',
                //     url: this.GLOBAL.BASE_URL + 'news?newsId=' + this.newsId,
                // }).then(function(res){
                //     console.log(res);
                //     if(res.data.code == 0){
                //         this.title = res.data.data.newsTitle;
                //         this.content = res.data.data.newsContent;
                //     } else {
                //         alert('获取newsItem失败1');
                //     }
                // }).catch(function(err){
                //     console.log(err);
                //     alert('获取newsItem失败2');
                // })
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