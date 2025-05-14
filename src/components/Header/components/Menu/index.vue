<template>

    <b-navbar-nav class="m-auto custom-nav">

      <b-nav-item active :to="'/home'">主页</b-nav-item>
      <b-nav-item-dropdown text="男装" left>
        <template #default>
          <div class="mega-menu p-3 ">
            <div class="row">
              <div class="col-lg-4">
                <a class="dropdown-item font-weight-bold" href="#">全部分类</a>
                <a class="dropdown-item" href="#">Blazers</a>
                <a class="dropdown-item" href="#">Loungewear</a>
                <a class="dropdown-item" href="#">Plus Size</a>
              </div>
              <div class="col-lg-4">
                <a class="dropdown-item" href="#">TRENDING</a>
                <a class="dropdown-item" href="#">Colour trend: Brown</a>
                <a class="dropdown-item" href="#">Corduroy</a>
                <a class="dropdown-item" href="#">Wedding</a>
              </div>
              <div class="col-lg-4">
                <a class="dropdown-item font-weight-bold" href="#">Modern tailoring</a>
                <a class="dropdown-item" href="#">Corduroy</a>
                <a class="dropdown-item" href="#">Track tops</a>
                <a class="dropdown-item" href="#">Trench coats</a>
                <a class="dropdown-item" href="#">Corduroy</a>
                <a class="dropdown-item" href="#">Track tops</a>
                <a class="dropdown-item" href="#">Trench coats</a>
              </div>

            </div>
          </div>
        </template>
      </b-nav-item-dropdown>
      <b-nav-item-dropdown text="女装"  >
        <template #default>
          <div class="mega-menu p-3 min_width_90vw">
            <div class="row">
              <div class="col-lg-2">
                <a class="dropdown-item font-weight-bold" href="#">全部分类</a>
                <a class="dropdown-item" href="#">Blazers</a>
                <a class="dropdown-item" href="#">Bomber Jackets</a>
                <a class="dropdown-item" href="#">Shirts</a>
                <a class="dropdown-item" href="#">Blazers</a>
                <a class="dropdown-item" href="#">Bomber Jackets</a>
                <a class="dropdown-item" href="#">Shirts</a>
                <a class="dropdown-item" href="#">Blazers</a>
                <a class="dropdown-item" href="#">Bomber Jackets</a>
                <a class="dropdown-item" href="#">Shirts</a>
              </div>
              <div class="col-lg-2">
                <a class="dropdown-item" href="#">Suits</a>
                <a class="dropdown-item" href="#">Hoodies</a>
                <a class="dropdown-item" href="#">Jumpers</a>
                <a class="dropdown-item" href="#">Coats</a>
                <a class="dropdown-item" href="#">Hoodies</a>
                <a class="dropdown-item" href="#">Jumpers</a>
                <a class="dropdown-item" href="#">Coats</a>
              </div>
              <div class="col-lg-2">
                <a class="dropdown-item font-weight-bold" href="#">TRENDING</a>
                <a class="dropdown-item" href="#">Corduroy</a>
                <a class="dropdown-item" href="#">Track tops</a>
                <a class="dropdown-item" href="#">Trench coats</a>
              </div>
              <div class="col-lg-6">
                <img
                    :src="require('@/assets/women-menu.jpg')"
                    class="img-fluid"
                    alt="Women"
                />
              </div>
            </div>
          </div>
        </template>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="童装" left>
        <b-dropdown-item href="#">Blazers</b-dropdown-item>
        <b-dropdown-item href="#">Bomber Jackets</b-dropdown-item>
        <b-dropdown-item href="#">Coats</b-dropdown-item>
        <b-dropdown-item href="#">Hoodies</b-dropdown-item>
        <b-dropdown-item href="#">Bomber Jackets</b-dropdown-item>
        <b-dropdown-item href="#">Jackets</b-dropdown-item>
        <b-dropdown-item href="#">Blazers</b-dropdown-item>
        <b-dropdown-item href="#">Formal Shirts Jackets</b-dropdown-item>
        <b-dropdown-item href="#">Coats</b-dropdown-item>
        <b-dropdown-item href="#">Jumpers</b-dropdown-item>
        <b-dropdown-item href="#">Bomber Jackets</b-dropdown-item>
        <b-dropdown-item href="#">Coats</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item href="#">帮助中心</b-nav-item>
      <b-nav-item-dropdown text="语言" left>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">zh-CN</b-dropdown-item>
        <b-dropdown-item href="#">zh-TW</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" v-model="keyWord" placeholder="搜索商品"></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" @click="goSearch">搜索</b-button>
      </b-nav-form>
    </b-navbar-nav>


</template>
<script>
export default {
  name: "index",
  data() {
    return{
      keyWord:""
    }
  },
  methods:{
    goSearch(){

      let key = this.keyWord?.trim()||'';
      if(this.$route.name==='search'&&this.$route.query.k===key){
        return;
      }
      //第一种：字符串形式
      // this.$router.push("/search/"+this.keyWord+"?keyWord="+this.keyWord);
      // //第二种：模版字符串
      // this.$router.push(`/search/${this.keyWord}?k=${this.keyWord.toUpperCase()}`);
      //第三种对象传递方式，此时需要在router的index.js 中给 路由一个 name属性
      this.$router.push({name:'search',params:{keyWord:this.key||undefined},query:{k:this.keyWord}});

    }
  }
}
</script>
<style lang="less">
.custom-nav {
  //width: 100%;
  .nav-link {
    color: #fff !important;
  }

  .active {
    color: #e3a51e !important;
  }

  .nav-link:hover {
    color: #e3a51e !important;;

  }



}
.mega-menu {
  position: fixed !important; // 让它相对视口定位
  top: 60px; // 顶部距离，根据你导航栏的高度调整
  left: 50% !important;
  transform: translateX(-50%) !important;
  z-index: 1050; // 确保在其他元素上方

  background: #fff;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-wrap: nowrap;
  max-width: 90vw;
  white-space: nowrap;


}

.min_width_90vw{
  min-width: 90vw;
}

::v-deep(.dropdown-menu) {
  position: static !important; // 让 BootstrapVue 不再干扰你手动定位
  padding: 0;
  margin: 0;
  border: none;
  box-shadow: none;
  background: transparent;
}


</style>
