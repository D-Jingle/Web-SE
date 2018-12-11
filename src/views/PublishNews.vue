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
            <el-button type="primary" class="submit-btn" @click="publish" plain :disabled="disabled" :loading="loading">{{message}}</el-button>
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
                disabled: false,
                message: '确认发布',
                loading : false

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
                var that = this;
                that.message = '发布中...';
                that.loading = true;
                that.disabled = true;
                if(this.title == '' || this.content == ''){
                    this.$message.error('标题和内容都不能为空哦～');
                    that.disabled = false;
                    that.loading = false;
                    that.message = '点击发布';
                } else {
                    console.log(that.content);
                    this.$http({
                        method: 'post',
                        url: that.GLOBAL.BASE_URL + 'publish',
                        data: {
                            newsTitle: that.title,
                            newsContent: that.content,
                            publishId: '0'
                        }
                    }).then(function (res) {
                        console.log(res);
                        if (res.data.code == 0) {
                            that.$message({
                                message: '发布成功',
                                type: 'success'
                            });
                            that.$router.go(-1);
                        } else {
                            that.disabled = false;
                            that.loading = false;
                            that.message = '点击发布';
                            alert('发布失败1');
                        }
                    }).catch(function (err) {
                        console.log(err);
                        that.disabled = false;
                        that.message = '点击发布';
                        that.loading = false;
                        alert('发布失败2');
                    });
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