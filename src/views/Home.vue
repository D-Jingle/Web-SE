<template>
  <div class="home">
    <div class="container">
      <Notice class="container-left" name="name"/>
      <Introduce class="container-right"/>
    </div>
    <div class="container">
      <News class="container-left"/>
      <Contect class="container-right"/>
    </div>
  </div>
</template>

<script>
  import Contect from  '@/components/Contect.vue'
  import News from '@/components/News.vue'
  import Notice from '@/components/Notice.vue'
  import Introduce from '@/components/Introduce.vue'

export default {
  name: 'home',
  components: {
      Notice,
      Introduce,
      News,
      Contect
  }
}
</script>

<style lang="scss" scoped>
  .container{
    display: flex;
    &-left{
      flex-grow: 6;
    }
    &-right{
      flex-grow: 4;
    }
  }
</style>
