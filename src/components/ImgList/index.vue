<template>
  <section class="product-list">
    <b-row>
      <b-col sm="4" v-for="(item,index) in list" :key="index">
        <div class="product margin_bottom">
          <div class="_img">
            <div>
              <img :src=item.imgUrl alt="" @click="handleImgClick(item)"/>
              <div class="wish_list animated fadeInUp" @click="addWish(item)">
                <span>添加至心愿单</span>
                <i class="far fa-heart"></i>
              </div>
            </div>
          </div>
          <div class="new" v-if="item.isNew">New</div>
          <div class="sale" v-if="item.isDiscount"> -{{item.discount}}%</div>
          <div @click="handleImgClick(item)">
            <h3 class="product-title">{{ item.displayName }}</h3>
            <div class="price">¥ {{ item.price }}</div>
            <div class="rate">
              <star-rating :star-size="20" :read-only="true" :rating="item.rate" :show-rating="false"></star-rating>
            </div>
          </div>
          <div class="add_cart btn_style dark_btn" @click="addCart(item)">
            <span>添加到购物车</span>
            <i class=" fas fa-cart-plus"></i>
          </div>

        </div>
      </b-col>
    </b-row>


    <div class="margin_top">
      <b-pagination
          v-model="currentPage" :total-rows="total" :per-page="pageSize"
          align="center"
          :hide-goto-end-buttons="hideGotoEnd"
          @input="onPageChange"
      >
      </b-pagination>

    </div>

  </section>
</template>
<script>
import StarRating from 'vue-star-rating'

export default {
  name: "ImgList",
  components: {
    StarRating
  },
  props: {
    hideGotoEnd: {
      type: Boolean,
      default: false
    },

    total:{
      type: Number,
      default: 0,
      required: true
    },
    list:{
      type: Array,
      default: () => [],
      required: true
    },
    pageSize:{
      type: Number,
      default: 10
    }

  },
  data() {
    return {
      currentPage:1
    }
  },
  computed: {

  },
  mounted() {




  },
  methods: {

    handleImgClick(obj){
      this.$emit('img-click', obj);

    },
    onPageChange(page) {
      this.$emit('page-change', page) // ✅ 分页点击事件传给父组件
    },
    addWish(item){
      this.$emit('add-wish', item);
    },
    addCart(item){
      this.$emit('add-cart', item);
    }
  }
}
</script>
<style lang="less">
@import 'css/style.css';
</style>
