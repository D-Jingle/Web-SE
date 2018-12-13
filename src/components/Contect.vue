<template>
    <div class="container">
        <el-card class="box-card" shadow="never" body-style="{padding:20px}">
            <div slot="header" class="clearfix title">
                <span class="title-text">
                    <i class="el-icon-phone-outline icon"></i>
                    &nbsp;&nbsp;联系我们
                </span>
                <el-button style="float: right; padding: 3px 0" type="text"></el-button>
            </div>
            <div class="text item">
                <pre style="text-align: left">
综合办公室：0451-82192243
计算机等级考试办公室：0451-82192243
教务工作办公室：0451-82192243
科研工作办公室：0451-82192243
                </pre>

            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "Contect"
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