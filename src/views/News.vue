<template>
    <div class="container">
        <div class="box">
            <div class="left">
                <table>
                    <thead>
                    <tr>
                        <th colspan="2">
                            <i class="el-icon-message"></i>
                            新闻列表
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item,index) in newsArr" :key = index>
                        <td @click="getDataSpeci(item.newsId)">
                            <i class="el-icon-caret-right"></i>
                            {{item.newsTitle}}
                        </td>
                        <td>
                            {{item.date}}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="right">
                <div class="header">
                    <div class="header-title">
                        <h4>{{currentNews.newsTitle}}</h4>
                    </div>
                    <div class="date">
                        2018-08-08
                    </div>
                    <div class="artical">
                            {{currentNews.newsContent}}
                        <div class="publish">
                            <strong>发布者：&nbsp;</strong>admin
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "News",
        data(){
            return{
                currentIndex: '',
                newsArr:[],
                currentNews:{}
            }
        },
        created(){
            console.log(this.$route.query.id);
            if(typeof this.$route.query.id == 'undefined'){
                this.currentIndex = 0;
                this.getDataAll();
                this.currentNews = this.newsArr[this.currentIndex];
            } else {
                this.getDataAll();
                this.getDataSpeci(this.$route.query.id);
            }
        },
        methods:{
            getDataAll(){
                // this.newsArr = [
                //     {
                //         newsId : 1,
                //         newsTitle : "新闻标题1",
                //         newsContent : "新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容",
                //         publishId : "发布者id",
                //         date : "发布日期"
                //     },
                //     {
                //         newsId : 2,
                //         newsTitle : "新闻标题2",
                //         newsContent : "新闻内容",
                //         publishId : "发布者id",
                //         date : "发布日期"
                //     },
                //     {
                //         newsId : 3,
                //         newsTitle : "新闻标题3",
                //         newsContent : "新闻内容",
                //         publishId : "发布者id",
                //         date : "发布日期"
                //     },
                //     {
                //         newsId : 4,
                //         newsTitle : "新闻标题1",
                //         newsContent : "新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容",
                //         publishId : "发布者id",
                //         date : "发布日期"
                //     },
                //     {
                //         newsId : 5,
                //         newsTitle : "新闻标题2",
                //         newsContent : "新闻内容",
                //         publishId : "发布者id",
                //         date : "发布日期"
                //     },
                //     {
                //         newsId : 6,
                //         newsTitle : "新闻标题3",
                //         newsContent : "新闻内容",
                //         publishId : "发布者id",
                //         date : "发布日期"
                //     }
                //
                // ];
                this.$http({
                    method: 'get',
                    url: this.GLOBAL.BASE_URL + 'news',
                }).then(function (res) {
                    console.log(res);
                    if (res.data.code == 0) {
                        this.newsArr = res.data.data;
                    } else {
                        alert('获取全部新闻失败1');
                    }
                }).catch(function (err) {
                    console.log(err);
                    alert('获取全部新闻失败2');
                });
            },
            getDataSpeci(newsId){
                this.currentIndex = newsId;
                // this.currentNews = this.newsArr[this.currentIndex];
                this.$http({
                    method: 'get',
                    url: this.GLOBAL.BASE_URL + 'news/newsId=' + this.currentIndex,
                }).then(function (res) {
                    console.log(res);
                    if (res.data.code == 0) {
                        this.currentNews = res.data.data;
                    } else {
                        alert('获取全部新闻失败1');
                    }
                }).catch(function (err) {
                    console.log(err);
                    alert('获取全部新闻失败2');
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    a{
        color: #2c3e50;
    }
    a:visited{
        color: #2c3e50;
    }
    .container{
        background-color: #fff;
        margin: 2rem 0;
        padding: 1rem 2rem 5rem 2rem;

        .box{
            vertical-align: top;
            display: block;
            width: 100%;
            .left{
                vertical-align: top;
                display: inline-block;
                padding: 10px;
                box-sizing: border-box;
                width: 30%;
                /*background-color: #ccccd6;*/
                table{
                    word-wrap: break-word;
                    word-break: break-all;
                    width: 100%;
                    thead{
                        /*padding: 0 0 5px 5px;*/
                        tr{
                            border-bottom: 1px solid #1a6840;
                            th{
                                text-align: center;
                                line-height: 3rem;
                                font-weight: bold;
                            }
                        }

                    }
                    tbody{
                        tr{
                            border-bottom: 1px solid #ccccd6;
                            td:nth-child(1){
                                cursor: pointer;
                                /*display: inline-block;*/
                                max-width: 140px;
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
                                /*display: inline-block;*/
                                /*width: 30%;*/
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }
                        }
                    }
                }
            }
            .right{
                background: url(http://icec.nefu.edu.cn/images/9.jpg) repeat-y white;
                vertical-align: top;
                box-sizing: border-box;
                margin: 0 1rem;
                display: inline-block;
                padding-left: 40px;
                width: 65%;
                /*height: 30rem;*/
                /*background-color: antiquewhite;*/
                .header{
                    display: block;
                    vertical-align: top;
                    padding: 2rem 0 1rem 0;

                    &-title{
                        text-align: center;
                        border-bottom: 1px solid #eee;
                        padding: 10px 0;
                    }
                    .date{
                        float: right;
                        margin-top: 1rem;
                    }
                    .artical{
                        text-align: left;
                        padding-top: 4rem;
                    }
                    .publish{
                        float: right;
                    }
                }
            }
        }
    }

</style>