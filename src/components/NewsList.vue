<template>
    <div class="container">
        <table>
            <thead>
            <tr>
                <th colspan="1">
                    已发布新闻：
                </th>
                <th colspan="2">
                    <el-button type="primary" plain @click="toPublish">发布新闻</el-button>
                    <el-button plain @click="logout">退出登录</el-button>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in newsItem" :key = index>
                <td @click="toEdit(item.newsId)">
                    <i class="el-icon-caret-right"></i>
                    {{item.newsTitle}}
                </td>
                <td>
                    {{item.date}}
                </td>
                <td>
                    <el-button icon="el-icon-delete" circle @click="delItem(item.newsId)" style="border: 0px;color: red;"></el-button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "NewsList",
        created(){
            this.getData();
        },
        data(){
            return{
                newsItem:[
                    {
                        "newsId" : 1,
                        "newsTitle" : "新闻标题",
                        "newsContent" : "新闻内容",
                        "publishId" : "发布者id",
                        "date" : "05-10"
                    },
                    {
                        "newsId" : 2,
                        "newsTitle" : "新闻标题",
                        "newsContent" : "新闻内容",
                        "publishId" : "发布者id",
                        "date" : "05-10"
                    },
                    {
                        "newsId" : 3,
                        "newsTitle" : "新闻标题",
                        "newsContent" : "新闻内容",
                        "publishId" : "发布者id",
                        "date" : "05-10"
                    },
                    {
                        "newsId" : 4,
                        "newsTitle" : "新闻标题",
                        "newsContent" : "新闻内容",
                        "publishId" : "发布者id",
                        "date" : "05-10"
                    },
                ],
            }
        },

        methods:{
            toPublish(){
                this.$router.push('/publishnews');
            },
            getData(){
                // console.log(this.GLOBAL.BASE_URL);
                this.$http({
                    method:'get',
                    url: this.GLOBAL.BASE_URL + 'news',
                }).then(function(res){
                    console.log(res);
                    if(res.data.code == 0){
                        this.newsItem = res.data.data;
                    } else {
                        alert('获取newsItem失败1');
                    }
                }).catch(function(err){
                    console.log(err);
                    alert('获取newsItem失败2');
                })
            },
            logout(){
                sessionStorage.clear();
                this.$router.push('/login');
            },
            delItem(index){
                console.log(index);
                this.$confirm('此操作将永久删除该新闻, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$http({
                        method:'get',
                        url: this.GLOBAL.BASE_URL + 'delete?newsId=' + index,
                    }).then(function(res){
                        console.log(res);
                        if(res.data.code == 0){
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                            this.router.go(0);
                        } else {
                            this.$message({
                                type: 'info',
                                message: '删除失败!'
                            });
                        }
                    }).catch(function(err){
                        console.log(err);
                        alert('获取newsItem失败2');
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            toEdit(newsId){
                this.$router.push({
                    path: '/edit',
                    query:{
                        newsId : newsId
                    }
                })
            }

        }
    }
</script>

<style scoped lang="scss">
    .container {
        background-color: #fff;
        margin: 2rem 0;
        padding: 2rem 5rem;
        table{
            word-wrap: break-word;
            word-break: break-all;
            width: 100%;
            thead{
                tr{
                    border-bottom: 1px solid #1a6840;
                    th{
                        text-align: left;
                        line-height: 5rem;
                        font-weight: bold;
                        font-size: 2rem;
                    }
                }

            }
            tbody{
                tr{
                    border-bottom: 1px solid #ccccd6;
                    td:nth-child(1){
                        cursor: pointer;
                        /*max-width: 140px;*/
                        text-align: left;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        line-height: 3rem;

                    }
                    td:nth-child(1):hover{
                        color: #1a6840;
                    }
                    td:nth-child(2){
                        width: 110px;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    td:nth-child(3){
                        width: 100px;
                        /*display: inline;*/
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        max-width: 100px;
                    }
                }
            }

        }
    }

</style>