<template>
    <div class="container">
        <el-table
                :data="newsItem"
                size="medium"
                stripe
                max-height="300"
                fit
                v-loading="loading"
                >
            <el-table-column
                    prop="date"
                    label="新闻"
                    align="center"
                    width="100px">
            </el-table-column>
            <el-table-column
                    prop="newsTitle"
                    show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                    width="100px"
            >
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">查看 >></el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>

</template>

<script>
    export default {
        name: "News",
        data() {
            return {
                newsItem: [],
                loading:true
            }
        },
        created(){
            this.getData();
            this.loading = false;
        },
        methods:{
            getData(){
                // this.newsItem = [
                //     {
                //         "newsId" : 1,
                //         "newsTitle" : "新闻标题1",
                //         "newsContent" : "新闻内容",
                //         "publishId" : "发布者id",
                //         "date" : "05-10"
                //     },
                //     {
                //         "newsId" : 2,
                //         "newsTitle" : "新闻标题2",
                //         "newsContent" : "新闻内容",
                //         "publishId" : "发布者id",
                //         "date" : "05-10"
                //     },
                //     {
                //         "newsId" : 3,
                //         "newsTitle" : "新闻标题3",
                //         "newsContent" : "新闻内容",
                //         "publishId" : "发布者id",
                //         "date" : "05-10"
                //     },
                //     {
                //         "newsId" : 4,
                //         "newsTitle" : "新闻标题4",
                //         "newsContent" : "新闻内容",
                //         "publishId" : "发布者id",
                //         "date" : "05-10"
                //     },
                // ];
                this.$http({
                    method:'get',
                    url: this.GLOBAL.BASE_URL + 'news?page=1',
                }).then(function(res){
                    console.log(res);
                    if(res.data.code == 0){
                        this.newsItem = res.data.data;
                        this.loading = false;
                    } else {
                        alert('获取newsItem失败1');
                    }
                }).catch(function(err){
                    console.log(err);
                    alert('获取newsItem失败2');
                })
            },
            handleEdit(index,row){
                console.log(index,row);
                this.$router.push({
                    path:'/news',
                    query:{
                        id:row.newsId
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .container{
        margin: 20px 20px 10px 0;
    }
</style>