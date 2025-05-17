<template>

  <div>
    <!--轮播图-->
    <Carousel ref="carousel" :indicators="indicators" :list="bannerList"></Carousel>
    <!--商品图表-->

    <section class="img-list">
      <div class="container">
        <h2 class="sec-title">新品上市</h2>
        <p class="sec-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, Proin
        </p>

        <RowSlider ref="rowSlider"
                   :items="productList"
                   @img-click="handleImgClick"
                   @page-change="handlePageChange"
                   @add-wish="handleAddWish"
                   @add-cart="handleAddCart"></RowSlider>
      </div>
    </section>


  </div>

</template>
<script>
import Carousel from "@/components/Carousel";
import RowSlider from "@/components/RowSlider";
import ImgList from "@/components/ImgList/index.vue";

export default {
  name: "index",
  components: {
    ImgList,
    Carousel,
    RowSlider
  },
  data() {
    return {
      indicators: false,
      bannerList: [
        {
          id: 1,
          url: require('@/assets/img/slider1.jpg'),
          title: 'Summer <br/> Collection',
          tip: 'New Amazing Prices',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, Proin'
        },
        {
          id: 2,
          url: require('@/assets/img/slider2.jpg'),
          title: 'New <br/> Collection',
          tip: 'Spring & Summer',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, Proin'
        },
        {
          id: 3,
          url: require('@/assets/img/slider3.jpg'),
          title: 'New Offer 50%',
          tip: 'Brand New Collection',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, Proin'
        }
      ],
      productList: [
        {
          id: 1,
          imgUrl: require('@/assets/img/product1.jpg'),
          displayName: 'Product fashion',
          price: '300.00',
          isFavorite: false,
          rate: 3
        }
      ]


    }
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      let tmp = {...this.productList[i]};
      tmp.id = i + 1;
      tmp.imgUrl = require(`@/assets/img/product${tmp.id}.jpg`)
      if (i === 0 || i === 8) {
        tmp.isNew = true;
      } else {
        tmp.isNew = false;
      }
      if (i === 1 || i === 4) {
        tmp.isDiscount = true;
        tmp.discount = 10 * i;
      } else {
        tmp.isDiscount = false;
      }
      tmp.price = parseInt(tmp.price) * 4;


      this.productList.push(tmp);
    }
  },
  methods: {
    handleImgClick(item){
      console.log(item);
    },
    handlePageChange(val){
      console.log(val);
    },
    handleAddWish(item){

      setTimeout(()=>{
        item.isFavorite=true;
      },1000)
      console.log(item);
    },
    handleAddCart(item){
      console.log(item);
    }
  }
}
</script>
<style scoped lang="less">

</style>
