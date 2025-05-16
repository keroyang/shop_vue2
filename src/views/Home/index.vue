<template>

  <div>
    <Carousel ref="carousel"  :indicators="indicators" :list="list"></Carousel>
  </div>

</template>
<script>
import Carousel from "@/components/Carousel";
export default {
  name: "index",
  components: {
    Carousel
  },
  data(){
    return{
      indicators:false,
      list:[
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
