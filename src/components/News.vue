<template>
    <div class="container">
        <el-table
                :data="tableData"
                size="medium"
                stripe
                max-height="268"
                fit
                >
            <el-table-column
                    height=""
                    prop="date"
                    label="新闻"
                    align="center"
                    width="100px">
            </el-table-column>
            <el-table-column
                    prop="address"
                    show-overflow-tooltip
            >
            </el-table-column>
        </el-table>
    </div>

</template>

<script>
    export default {
        name: "News",
        data() {
            return {
                tableData: [
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                        date: '2016-05-04',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1517 弄'
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1516 弄'
                    }, {
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1516 弄上海市普陀区金沙江路 1516 弄上海市普陀区金沙江路 1516 弄'
                    }
                ]
            }
        },
    }
</script>

<style scoped lang="scss">
    .container{
        margin: 20px 20px 10px 0;
    }
</style>