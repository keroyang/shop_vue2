
<template>
  <section class="banner-section">
    <div class="">
      <b-carousel
          v-model="slideIndex"
          fade
          :indicators="indicators"
          style="background-size: cover!important;background-position: top center !important;"
      >
        <b-carousel-slide  v-for="(item,index) in list" :key="item.id">
          <template #img>
            <img :src="item.url">
            <div class="custom-caption">
              <div class="container justify-content-start align-items-center">
                <div class="carousel-content text-white">
                  <h1 class="animated fadeInDown slider-desc" v-html="item.title"> </h1>
                  <h2 class="slider-title animated fadeInDown">{{ item.tip }}</h2>
                  <h3 class="animated fadeInUp slider-desc">{{item.content}}</h3>
                  <div
                      class="animated fadeInUp slider-desc btn_style solid_btn" href="#">SHOP NOW</div>
                </div>
              </div>
            </div>

          </template>
        </b-carousel-slide>


      </b-carousel>

      <!--自定义 indicators -->
      <div v-if="!indicators" class="custom-indicator right">
          <span v-for="(item,index) in list" :key="item.id"
                @click="slideIndex= index"
                :class="['owl-dot',{active:slideIndex==index}]">
            {{index<10?"0"+(index+1):(index+1)}}
          </span>


      </div>

    </div>
  </section>
</template>
<script>
export default {
  name: "index",
  props: {
    indicators: {
      type:Boolean,
      default:false,
    },
    list:{
      type:Array,
      default:[],
      required:true
    }
  },
  data() {
    return {
      slideIndex:0
    }
  }
}
</script>
<style scoped lang="less">
@import 'css/style.less';
</style>
