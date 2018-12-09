<template>
    <div class="block">
        <el-carousel height="15rem">
            <el-carousel-item v-for="item in carouselItem" :key="item">
                <img :src="item" alt="" width="100%" >
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "Carousel",
        data(){
            return{
                carouselItem:[
                    'http://icec.nefu.edu.cn/images/2.jpg',
                    'http://i.nefu.edu.cn/dcp/uploadfiles/ad/2016/4/8/344946bc61004dab8aaf37a1c3025164.jpg',
                    'http://i.nefu.edu.cn/dcp/uploadfiles/ad/2016/4/8/dba0656626a148c8bf8b762b11190ebf.jpg',
                    'http://i.nefu.edu.cn/dcp/uploadfiles/ad/2016/4/8/1df25fbebe1c48e994a99ae610ec9a19.jpg',
                ]
            }
        }
    }
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

</style>