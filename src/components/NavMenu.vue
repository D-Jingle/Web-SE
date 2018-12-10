<template>
    <div class="container">
        <el-menu class="el-menu-demo title" default-active="0" mode="horizontal"
                 menu-trigger="hover" text-color="#fff" background-color="#207f4c"
                 active-text-color="#ffd04b" >
            <el-menu-item index="0"><router-link to="/">首页</router-link></el-menu-item>
            <el-menu-item index="5"><router-link to="/notice">公告</router-link></el-menu-item>
            <el-menu-item index="6"><router-link to="/news">新闻</router-link></el-menu-item>
            <el-submenu index="1">
                <template slot="title">专业介绍</template>
                <el-menu-item index="1-1"><router-link to="/rjgc">软件工程</router-link></el-menu-item>
                <el-menu-item index="1-2"><router-link to="/xxgl">信息管理与信息系统</router-link></el-menu-item>
                <el-menu-item index="1-2"><router-link to="/cs">计算机科学与技术</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">实验室</template>
                <el-menu-item index="2-1"><router-link to="/laboratory">923创新实验室</router-link></el-menu-item>
                <el-menu-item index="2-2"><router-link to="/laboratory">925移动开发实验室</router-link></el-menu-item>
                <el-menu-item index="2-3"><router-link to="/laboratory">923实验室</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">科学研究</template>
                <el-menu-item index="3-1"><router-link to="/kyxm">科研项目</router-link></el-menu-item>
                <el-menu-item index="3-2"><router-link to="/cgjl">成果及奖励</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">教师队伍</template>
                <el-menu-item index="4-1" @click="push(1)">
                        教授
                </el-menu-item>
                <el-menu-item index="4-2" @click="push(2)">
                        副教授
                </el-menu-item>
                <el-menu-item index="4-3" @click="push(3)">
                        讲师
                </el-menu-item>
            </el-submenu>
            <el-menu-item index="7" style="float: right"><router-link to="/login">管理员登陆</router-link></el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "NavMenu",
        data(){
            return{
                // index,
                // indexPath
            }
        },
        methods:{
            push(index){
                this.$router.push({
                    path: '/jsjj',
                    query:{
                        id: index
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
.container{
    color: #5a9cf8;
}
ul li{
    color: #5a9cf8;
}
.title{
    font-weight: bolder;

}
</style>