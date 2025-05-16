<template>

  <div>
    <!--轮播图-->
    <Carousel ref="carousel"  :indicators="indicators" :list="bannerList"></Carousel>
    <!--商品图表-->

    <section class="img-list">
      <div class="container">
        <h2 class="sec-title">新品上市</h2>
        <p class="sec-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, Proin
        </p>


      </div>
    </section>



  </div>

</template>
<script>
import Carousel from "@/components/Carousel";

export default {
  name: "index",
  components: {
    Carousel,
  },
  data(){
    return{
      indicators:false,
      bannerList:[
        {
          id:1,
          url:require('@/assets/img/slider1.jpg'),
          title:'Summer <br/> Collection',
          tip:'New Amazing Prices',
          content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, Proin'
        },
        {
          id:2,
          url:require('@/assets/img/slider2.jpg'),
          title:'New <br/> Collection',
          tip:'Spring & Summer',
          content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, Proin'
        },
        {
          id:3,
          url:require('@/assets/img/slider3.jpg'),
          title:'New Offer 50%',
          tip:'Brand New Collection',
          content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, Proin'
        }
      ]


    }
  }
}
</script>
<style scoped lang="less">

</style>
