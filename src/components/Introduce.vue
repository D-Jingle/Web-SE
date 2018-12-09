<template>
    <div class="container">
        <el-card class="box-card" shadow="never" body-style="{padding:20px}">
            <div slot="header" class="clearfix title">
                <span class="title-text">
                    <i class="el-icon-edit icon"></i>
                    &nbsp;&nbsp;专业介绍
                </span>
                <el-button style="float: right; padding: 3px 0" type="text">了解更多</el-button>
            </div>
            <div class="text item">
                简介啦啦啦啊
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "Introduce"
    }
</script>

<style scoped lang="scss">
    .container{
        margin: 20px 0;
        box-shadow: #ffffff;
        width: 40%;
        height: 266px;
    }
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 100%;
        border-radius: 0;
        box-shadow: none;
    }

    .title {
        &-text {
            float: left;
        }
    }
    .icon{
        color: rgb(88,152,244);
    }
</style>