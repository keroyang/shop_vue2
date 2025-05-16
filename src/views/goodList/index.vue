<template>
<div class="">
  <div class="top_desc">
    <div class="container">
      <h2 class="top_title margin_bottom">
        <span>{{category}}</span>
      </h2>
      <b-breadcrumb class="custom-breadcrumb">
        <b-breadcrumb-item to="/home">主页</b-breadcrumb-item>
        <b-breadcrumb-item>{{category}}</b-breadcrumb-item>
      </b-breadcrumb>
    </div>
  </div>
  <div class="category">
    <div class="container">
      <b-row>
        <b-col lg="3">
          <!--aside 侧边栏内容、附加信息、推荐内容、广告、作者简介 等等-->
          <aside>
            <div class="searchForm">
              <b-input-group>
                <b-form-input  placeholder="搜索...." />
                <!-- 在右侧追加自定义图标或按钮 -->
                <b-input-group-append>
                  <b-button variant="outline-secondary">
                    <i class="fa fa-search"></i>
                  </b-button>
                </b-input-group-append>
              </b-input-group>
            </div>
          </aside>
        </b-col>
        <b-col lg="9">

          <ImgList ref="imgList"
                   :list="list"
                   :total="list.length"
                   @img-click="handleImgClick"
                   @page-change="handlePageChange"
                   @add-wish="handleAddWish"
                   @add-cart="handleAddCart"

          ></ImgList>
        </b-col>
      </b-row>
    </div>
  </div>

</div>
</template>
<script>
import ImgList from "@/components/ImgList";

export default {
  name: "goodList",
  props:{
    category:{
      type:String,
      default:"",
      required:false
    }
  },
  components:{
    ImgList
  },
  data(){
    return {
      list: [{
        id: 1,
        imgUrl: require('@/assets/img/product1.jpg'),
        displayName: 'Product fashion',
        price: '300.00',
        isFavorite: false,
        rate: 3
      }]
    }
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      let tmp ={...this.list[i]};
      tmp.id = i + 1;
      tmp.imgUrl =require(`@/assets/img/product${tmp.id}.jpg`)
      if(i===0||i===8){
        tmp.isNew=true;
      }else {
        tmp.isNew=false;
      }
      if(i===1||i===4){
        tmp.isDiscount=true;
        tmp.discount=10*i;
      }else{
        tmp.isDiscount=false;
      }
      tmp.price=parseInt(tmp.price)*4;


      this.list.push(tmp);
    }
  },
  methods:{
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
.top_desc{
  background: url("../../assets/img/top-bg.jpg");
  background-size: cover;
  background-position: top right;
  background-position-x: 90%;
  padding: 5rem 0;
}
.top_title{
  margin-top:0;
  span{
    position: relative;
    padding-bottom: 1rem;
    display:inline-block;
  }
}
.margin_bottom{
  margin-bottom: 2rem;

}
.custom-breadcrumb{
  display:inline-flex;
  padding:0;
  font-weight: bold;
  background: transparent;
  margin-bottom: 0;

  a{
    color:#444444;
    text-decoration: none;
    background-color: transparent;
  }
  a:hover{
    content: none;
  }
}


.category{
  padding:5rem 0;

  .searchForm{
    margin-bottom:2rem;
  }
}
</style>
