<template>
    <div id="app">
      <NavMenu class="nav"/>
      <Carousel/>
      <router-view/>

      <div class="footer">
        Copyright © 2018-2018 东北林业大学信息与计算机工程学院 All Rights Reserved.
      </div>
    </div>
</template>

<script>
  import Carousel from '@/components/Carousel.vue'
  import NavMenu from '@/components/NavMenu.vue'
  export default {
      components: {
          Carousel,
          NavMenu,
      },
      mounted(){

          // console.log(window.screen.availWidth,window.screen.availHeight);
          // console.log(window);
          let oAPP = document.getElementById('app');
          oAPP.setAttribute('style','height:' + window.screen.availHeight + 'px;');
          let oFooter = document.getElementsByClassName('footer')[0];
          oFooter.setAttribute('style','position: absolute;bottom: 0;display: block;text-align: center;width: 100%;padding-right: 270px;box-sizing: border-box;');
      },
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0px 135px;
  background-color: #eee;
  box-shadow: 5px 5px 5px #ccc;
    position: relative;
    overflow: hidden;
}
Carousel{
  height: 10rem;
}
  .nav{
    margin-bottom: 10px;
  }
  .footer{
    height: 3rem;
  }
  .el-table__header-wrapper{
    border-bottom: 1px solid #1a6840;
  }
  tbody{
    .el-table_1_column_1{
      .cell{
        color: #1a6840;
      }
    }
    .el-table_1_column_2{
      .cell{
        color: #1a6840;
      }
    }

    .el-table_2_column_3{
      .cell{
        color: #1a6840;
      }
    }
    .el-table_2_column_4{
      .cell{
        color: #1a6840;
      }
    }
  }
  th {
    .cell{
      color: #000;
      font-size: 1.8rem;
    }
  }
  .el-menu--horizontal>.el-submenu .el-submenu__title{
    height: 45px!important;
    line-height: 45px!important;
  }
  .el-menu--horizontal>.el-menu-item{
    height: 45px!important;
    line-height: 45px!important;
  }


</style>
