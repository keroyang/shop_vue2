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
                   @add-wish="handleAddWish"
                   @add-cart="handleAddCart">

          <template #default="{item,hasDragged}">
            <div class="product margin_bottom">
              <div class="_img">
                <div>
                  <img :src="item.imgUrl" draggable="false" alt=""
                       @click="hasDragged ? null : handleImgClick(item)"/>
                  <div class="wish_list animated fadeInUp" @click="hasDragged ? null : handleAddWish(item)">
                    <span>{{ item.isFavorite ? '已在心愿单' : '添加至心愿单' }}</span>
                    <i class="far fa-heart" v-if="!item.isFavorite"></i>
                    <i class="fas fa-heart" v-if="item.isFavorite"></i>
                  </div>
                </div>
              </div>
              <div class="new" v-if="item.isNew">New</div>
              <div class="sale" v-if="item.isDiscount">-{{ item.discount }}%</div>
              <div @click="hasDragged ? null : handleImgClick(item)">
                <h3 class="product-title">{{ item.displayName }}</h3>
                <div class="price">¥ {{ item.price }}</div>
                <div class="rate">
                  <star-rating :star-size="20" :read-only="true" :rating="item.rate" :show-rating="false"/>
                </div>
              </div>
              <div class="add_cart btn_style dark_btn" @click="hasDragged ? null : handleAddCart(item)">
                <span>添加到购物车</span>
                <i class="fas fa-cart-plus"></i>
              </div>
            </div>
          </template>
        </RowSlider>
      </div>
    </section>

    <!--广告位-->
    <section class="today_deal text-center">
      <div class="container">
        <h1 class="mt-0 text-white">大减价</h1>
        <h2 class="text-white">所有产品最高可享70%折扣</h2>
        <div class="btn_style solid_btn text-uppercase">立即购买</div>
      </div>
    </section>

    <!--商品图表-->
    <section class="img-list">
      <div class="container">
        <h2 class="sec-title">热销产品</h2>
        <p class="sec-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, Proin
        </p>

        <RowSlider ref="rowSlider"
                   :items="productList"
                   @img-click="handleImgClick"
                   @add-wish="handleAddWish"
                   @add-cart="handleAddCart">
          <template #default="{item,hasDragged}">
            <div class="product margin_bottom">
              <div class="_img">
                <div>
                  <img :src="item.imgUrl" draggable="false" alt=""
                       @click="hasDragged ? null : handleImgClick(item)"/>
                  <div class="wish_list animated fadeInUp" @click="hasDragged ? null : handleAddWish(item)">
                    <span>{{ item.isFavorite ? '已在心愿单' : '添加至心愿单' }}</span>
                    <i class="far fa-heart" v-if="!item.isFavorite"></i>
                    <i class="fas fa-heart" v-if="item.isFavorite"></i>
                  </div>
                </div>
              </div>
              <div class="new" v-if="item.isNew">New</div>
              <div class="sale" v-if="item.isDiscount">-{{ item.discount }}%</div>
              <div @click="hasDragged ? null : handleImgClick(item)">
                <h3 class="product-title">{{ item.displayName }}</h3>
                <div class="price">¥ {{ item.price }}</div>
                <div class="rate">
                  <star-rating :star-size="20" :read-only="true" :rating="item.rate" :show-rating="false"/>
                </div>
              </div>
              <div class="add_cart btn_style dark_btn" @click="hasDragged ? null : handleAddCart(item)">
                <span>添加到购物车</span>
                <i class="fas fa-cart-plus"></i>
              </div>
            </div>
          </template>


        </RowSlider>
      </div>
    </section>
    <!--广告位-->
    <section>
      <b-row>
        <b-col sm="6" class="pr-0">
          <img class="w-100 img-fluid" src="@/assets/img/sale1.jpg" alt="">
        </b-col>
        <b-col sm="6" class="pl-0">
          <img class="w-100 img-fluid" src="@/assets/img/sale2.jpg" alt="">
        </b-col>
      </b-row>
    </section>
    <!--评价-->
    <section class="evaluation text-center">
      <div class="container">
        <h2 class="sec-title">客户好评</h2>
        <p class="sec-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, Proin
        </p>

        <RowSlider ref="rowSlider"
                   :items="clientList"
                   :show-arrows="false"
                   :visibleCount="3"
                   @img-click="handleImgClick"
                   @add-wish="handleAddWish"
                   @add-cart="handleAddCart"
        >
          <template #default="{item,hasDragged}">
            <div class="client_item margin_bottom">
              <div class="_info">
                <img :src="item.imgUrl">
              </div>
              <div class="_desc">
                <h3 class="font-weight-bold mt-0">{{item.displayName}}</h3>
                <div class="rate">
                  <star-rating :star-size="20"
                               :read-only="true"
                               :rating="item.displayRate"
                               :show-rating="false"/>
                </div>
                <p v-html="item.displayContent"></p>
              </div>

            </div>


          </template>


        </RowSlider>
      </div>
    </section>


    <section class="shippingOffer">

      <div class="container">
        <div class="d-flex justify-content-between align-items-center flex-wrap">
          <h2>免费送货</h2>
          <div class="animated fadeInUp slider-desc btn_style light_btn">立即购买</div>
        </div>
      </div>
    </section>


    <section class="subscribe text-center">
      <div class="container">
        <h2 class="sec-title">订阅我们最新的产品</h2>
        <p class="sec-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, Proin
        </p>
        <b-input-group>
          <b-form-input placeholder="输入您的邮箱" />

          <b-input-group-append>
            <div class="  slider-desc btn_style_black black_btn">立即订阅</div>
          </b-input-group-append>
        </b-input-group>
      </div>
    </section>

  </div>

</template>
<script>
import Carousel from "@/components/Carousel";
import RowSlider from "@/components/RowSlider";
import ImgList from "@/components/ImgList/index.vue";
import StarRating from 'vue-star-rating';
export default {
  name: "index",
  components: {
    ImgList,
    Carousel,
    RowSlider,
    StarRating
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
      ],
      clientList:[{
        id:1,
        imgUrl:require('@/assets/img/client1.jpg'),
        displayName: 'Ahmed Elsaied',
        displayContent:"orem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem Proin",
        displayRate:4
      },{
        id:2,
        imgUrl:require('@/assets/img/client2.jpg'),
        displayName: 'Rody Mohamed',
        displayContent:"orem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem Proin",
        displayRate:3
      },{
        id:3,
        imgUrl:require('@/assets/img/client3.jpg'),
        displayName: 'Perry Ahmed',
        displayContent:"orem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem Proin",
        displayRate:5
      },{
        id:4,
        imgUrl:require('@/assets/img/client4.jpg'),
        displayName: 'Rody Mohamed',
        displayContent:"orem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem Proin",
        displayRate:3
      }]


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
    handleImgClick(item) {
      console.log(item);
    },
    handlePageChange(val) {
      console.log(val);
    },
    handleAddWish(item) {

      setTimeout(() => {
        item.isFavorite = true;
      }, 1000)
      console.log(item);
    },
    handleAddCart(item) {
      console.log(item);
    }
  }
}
</script>
<style scoped lang="less">
.today_deal {
  background-image: url("@/assets/img/deal.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: color;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  padding: 5rem 0;

  h1 {
    font-size: 4rem;
    line-height: 1;
    font-family: 'Conv_Raleway-Bold', sans-serif;
  }

  h2 {
    margin: 2rem 0;
    font-family: 'Conv_Playball-Regular', sans-serif;
  }
}

.evaluation {
  padding: 5rem 0;
  .sec-title{
    text-align: center;
    padding-top: 1rem;
    position: relative;
    margin:0;
  }
  .sec_desc{
    max-width: 70%;
    margin:0 auto 3rem;
    text-align: center;
    color:#777777;

  }
  .client_item{
    text-align: center;
    ._info{
      width:100px;
      height:100px;
      margin:0 auto 1rem;
      border-radius:50%;
      overflow: hidden;
    }
    ._desc{
      h3{
        font-size:1.2rem;
        line-height:1;
        margin:1rem 0;
      }

      p{
        margin:.8rem 0 0;
        color:#777777;
        padding:0;
        font-family: 'Conv_Raleway-Regular', sans-serif;
      }
    }
  }
}


.shippingOffer{
  background-image: url("@/assets/img/freeShipping.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: color;
  color: #FFFFFF;
  padding:4rem 0;
}

.subscribe{
  padding:5rem 0;
}
</style>
