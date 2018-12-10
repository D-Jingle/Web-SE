<template>
    <div class="container">
        <div class="head">
            <h4>发布新闻</h4>
        </div>
        <div class="title">
            <el-input v-model="title" placeholder="请输入标题"></el-input>
        </div>
        <div class="editor">
            <VueEditor v-model="content"/>
        </div>

        <div class="submit">
            <el-button type="primary" class="submit-btn" @click="publish" plain>确认发布</el-button>
        </div>
    </div>
</template>

<script>
    import { VueEditor } from "vue2-editor";
    export default {
        name: "PublishNews",
        components:{
            VueEditor,
        },
        data(){
            return{
                content:'',
                title:'',
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
        methods:{
            publish(){
                if(this.title == '' || this.content == ''){
                    this.$message.error('标题和内容都不能为空哦～');
                } else {
                    this.$http({
                        method: 'get',
                        url: this.GLOBAL.BASE_URL + 'publish',
                        data: {
                            newsTitle: this.title,
                            newsContent: this.content,
                            publishId: 'admin'
                        }
                    }).then(function (res) {
                        console.log(res);
                        if (res.data.code == 0) {
                            this.$message({
                                message: '发布成功',
                                type: 'success'
                            });
                            this.$router.go(-1);
                        } else {
                            alert('发布失败1');
                        }
                    }).catch(function (err) {
                        console.log(err);
                        alert('获取发布信息失败2');
                    });
                    // this.$message({
                    //     message: '恭喜你，这是一条成功消息',
                    //     type: 'success'
                    // });
                    // this.$router.go(-1);
                }
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