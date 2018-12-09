<template>
    <div class="container">
        <div class="title">
            <h2>{{title}}</h2>
        </div>
        <div class="flexbox">
            <div class="box" v-for="(item,index) in currentItem" :key="index + 'a'">
                <div class="box-img">
                    <img :src="item.src" alt="">
                </div>
                <div class="box-name">
                    {{item.name}}
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Jsjj",
        data(){
            return{
                id:111,
                title:'',
                jiaoshou:[
                    {
                        src:'http://icec.nefu.edu.cn/UserFiles/typeid/156/sujianmin.jpg',
                        name:'苏健民'
                    },{
                        src:'http://icec.nefu.edu.cn/UserFiles/typeid/156/sujianmin.jpg',
                        name:'苏健民'
                    },{
                        src:'http://icec.nefu.edu.cn/UserFiles/typeid/156/sujianmin.jpg',
                        name:'苏健民'
                    }
                ],
                fujiaoshou:[
                    {
                        src:'http://icec.nefu.edu.cn/UserFiles/typeid/156/lsq.png',
                        name:'罗嗣卿'
                    },{
                        src:'http://icec.nefu.edu.cn/UserFiles/typeid/156/lili.jpg',
                        name:'李莉'
                    },{
                        src:'http://icec.nefu.edu.cn/UserFiles/typeid/158/liudan.jpg',
                        name:'刘丹'
                    },{
                        src:'http://icec.nefu.edu.cn/UserFiles/typeid/156/00010020.jpg',
                        name:'张锡英'
                    },{
                        src:'http://icec.nefu.edu.cn/UserFiles/typeid/156/qiuzw3.jpg',
                        name:'邱兆文'
                    },{
                        src:'http://icec.nefu.edu.cn/UserFiles/typeid/156/zhaoyuming.jpg',
                        name:'赵玉茗'
                    }
                ],
                jiangshi:[
                    {
                        src:'http://icec.nefu.edu.cn/UserFiles/typeid/156/liyan.jpg',
                        name:'李琰'
                    },{
                        src:'http://icec.nefu.edu.cn/UserFiles/typeid/156/wangbo.jpg',
                        name:'王波'
                    },{
                        src:'http://icec.nefu.edu.cn/UserFiles/typeid/156/bianjilong.jpg',
                        name:'边继龙'
                    },{
                        src:'http://icec.nefu.edu.cn/UserFiles/typeid/158/shanying.jpg',
                        name:'单颖'
                    },{
                        src:'http://icec.nefu.edu.cn/UserFiles/typeid/156/wudi.jpg',
                        name:'吴頔'
                    },
                ],
                currentItem:[]
            }
        },
        beforeCreate(){
            this.id = this.$route.query.id;
            console.log(this.id);
        },
        created() {
            console.log(this.$route.query.id);
            if(this.$route.query.id == 1){
                this.currentItem = this.jiaoshou;
                this.title = '教授简介';
            } else if(this.$route.query.id == 2){
                this.currentItem = this.fujiaoshou;
                this.title = '副教授简介';
            } else if(this.$route.query.id == 3){
                this.currentItem = this.jiangshi;
                this.title = '讲师简介';
            }
        },
        beforeRouteUpdate(to,from,next){
            this.id = to.query.id;
            // console.log('b');
            console.log(this.id);
            if(to.query.id == 1){
                this.currentItem = this.jiaoshou;
                this.title = '教授简介';
            } else if(to.query.id == 2){
                this.currentItem = this.fujiaoshou;
                this.title = '副教授简介';
            } else if(to.query.id == 3){
                this.currentItem = this.jiangshi;
                this.title = '讲师简介';
            }
            next();
        },
    }
</script>

<style scoped lang="scss">
    .container{
        /*width: 100%;*/
        background: url(http://icec.nefu.edu.cn/images/9.jpg) repeat-y ;
        background-color: #fff;
        margin: 2rem 0;
        padding: 3rem 5rem 5rem 5rem;
        .title{
            display: block;
            padding-bottom: 2rem;
            border-bottom: 1px solid #1a6840;
        }
        .flexbox{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            text-align: center;
            .box{
                padding: 3rem 0;
                flex-basis: 30%;
                align-items: center;
                &-img{
                    img{
                        height: 13rem;
                        box-shadow: 5px 5px 5px #ccc;
                    }
                }
                &-name{
                    font-weight: bold;
                }
            }
        }
    }
</style>