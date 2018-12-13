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
                软件工程专业以IT业需求为导向，培养具有良好综合素质和职业道德，掌握扎实的基础理论和专业知识，具有软件分析、设计、开发、测试与管理能力，具备较强工程实践能力、技术创新能力和团队精神，能快速适应软件工程新技术发展并具有国际视野和国际竞争力的高级软件工程师。专业实施灵活的“211”人才培养模式
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
        text-align: justify;
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