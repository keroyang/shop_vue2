<template>


  <section class="fadeInUp">


    <div
        class="carousel-container"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
    >
      <!-- 左箭头 -->
      <button v-if="hover" class="arrow left" @click="prevSlide"><i class=" fas fa-chevron-left"></i></button>
      <div class="carousel-wrapper">
        <div
            class="carousel-track"
            :style="{ transform: `translateX(-${currentIndex * itemWidth}%)` }"
        >
          <div class="carousel-item-info" v-for="(item, index) in items" :key="index">
            <div class="product margin_bottom">
              <div class="_img">
                <div>
                  <img :src=item.imgUrl alt="" @click="handleImgClick(item)"/>
                  <div class="wish_list animated fadeInUp" @click="addWish(item)">
                    <span>{{ item.isFavorite ? '已在心愿单' : '添加至心愿单' }}</span>
                    <i class="far fa-heart" v-if="!item.isFavorite"></i>
                    <i class="fas fa-heart" v-if="item.isFavorite"></i>

                  </div>
                </div>
              </div>
              <div class="new" v-if="item.isNew">New</div>
              <div class="sale" v-if="item.isDiscount"> -{{ item.discount }}%</div>
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

          </div>
        </div>
      </div>

      <!-- 右箭头 -->
      <button v-if="hover" class="arrow right" @click="nextSlide"> <i class=" fas fa-chevron-right"></i></button>
    </div>
  </section>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  components: {
    StarRating
  },
  data() {
    return {
      currentIndex: 0,
      itemWidth: 25, // 每个 item 宽度占容器 25%，所以一屏能放 4 个
      autoScrollTimer: null,
      hover: false,
    };
  },
  computed: {
    maxIndex() {
      return this.items.length - 4;
    },
  },
  mounted() {
    this.startAutoScroll();
  },
  beforeDestroy() {
    this.pauseAutoScroll();
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < this.maxIndex) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.maxIndex;
      }
    },
    startAutoScroll() {
      this.autoScrollTimer = setInterval(() => {
        this.nextSlide();
      }, 60000);
    },
    pauseAutoScroll() {
      clearInterval(this.autoScrollTimer);
    },

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
  },
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.carousel-wrapper {
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item-info {
  flex: 0 0 25%;
  box-sizing: border-box;
  padding: 10px;
  text-align: center;


  .product {
    z-index: 2;
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    position: relative;
    text-align: center;
    cursor: pointer;

    ._img {
      text-align: center;
      max-height: 300px;
      overflow: hidden;
      position: relative;
    }

    ._img:hover .wish_list {
      display: block;
    }

    ._img:hover img {
      -webkit-transform: scale(1.05, 1.05);
      -moz-transform: scale(1.05, 1.05);
      -o-transform: scale(1.05, 1.05);
      transform: scale(1.05, 1.05);
    }

    img {
      width: 100%;
      transition: all 0.3s ease-in-out;
      -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
    }


    .wish_list {
      position: absolute;
      bottom: 0;
      color: #FFFFFF;
      background: #000000;
      width: 100%;
      right: 0;
      z-index: 1;
      padding: .5rem 1rem;
      animation-duration: .3s;
      display: none;
    }

    .product-title {
      font-weight: bold;
      margin-bottom: .5rem;
    }

    .price {
      margin: 0;
      margin-bottom: .5rem;
    }

    .rate {
      margin: .5rem;
      text-align: center;
      display: flex;
      justify-content: center;
    }

    .add_cart {
      display: inline-block;
      padding: .4rem 1rem;
      font-size: .8rem;
    }

    .new {
      color: #FFFFFF;
      background: #E3A51E;
      position: absolute;
      top: 10px;
      left: 10px;
      padding: .1rem 1rem;
      height: 55px;
      width: 55px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      font-weight: bold;
    }

    .sale {
      color: #fff;
      background: #cd201f;
      position: absolute;
      top: 10px;
      left: 10px;
      padding: .1rem 1rem;
      height: 55px;
      width: 55px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      font-weight: bold;
    }


  }

  .product:hover ._img img {
    -webkit-transform: scale(1.05, 1.05);
    -moz-transform: scale(1.05, 1.05);
    -o-transform: scale(1.05, 1.05);
    transform: scale(1.05, 1.05);
  }

  .page-link {
    color: #444444;
    border-color: #484848;
    box-shadow: none !important;
  }


  .pagination .active {
    background: #484848;
    color: #fff;
    box-shadow: none !important;
  }

  .pagination .active .page-link {
    background: #484848;
    color: #fff;

    border-color: #484848;
    box-shadow: none !important;
  }


}

.carousel-item-info img {
  //width: 100%;
  //height: auto;
  //object-fit: cover;
}

.item-title {
  margin-top: 10px;
  font-size: 16px;
  color: #333;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #E3A51E;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  z-index: 10;
  transition: opacity 0.3s;
  height: 50px;
  width: 50px;
  color: #fff;
}

.arrow.left {
  left: 10px;
}

.arrow.right {
  right: 10px;
}
</style>
