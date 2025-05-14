<template>
  <div>

    <div class="site_header animated">
      <div class="bottom_header">
        <div class="container">
          <b-navbar toggleable="lg" >


            <b-navbar-brand href="#">
              <img class="logo" :src="require('./images/logo.png')" alt="logo"/>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <Menu />

            <div class="top_social_link">
              <div class="d-flex justify-content-end">
                <div class="margin_right line_right cursor-pointer">
                  <div class="">
                    <i class="fas fa-user"> </i>
                  </div>
                  <small>
                    登录
                  </small>
                </div>
                <div class="margin_right line_right cursor-pointer">
                  <div>
                    <i class="fas fa-heart"> </i>
                  </div>
                  <small>
                    心愿单
                  </small>
                </div>
                <div class="margin_right cursor-pointer">
                  <div class="icon_center">
                    <i class="fas fa-shopping-cart"></i>
                  </div>
                  <small>
                    购物车
                  </small>
                </div>
              </div>
            </div>

          </b-navbar>
        </div>

      </div>

    </div>

  </div>
</template>


<script>
import Menu from "./components/Menu";

export default {
  name: "Header",
  components: {
    Menu
  }

}
</script>
<style lang="less">
.site_header {
  padding: .8rem 0;
  background: #000;

  .top_social_link{
    color: #ffffff;
    .line_right{
      margin-right: 1rem;
      padding-right: 1rem;
      border-right: 2px solid #ccc;
      text-align: center;
    }
    .margin_right{

      display: flex;
      flex-direction: column;
      align-items: center;

    }

    .icon_center{

    }
  }
}
.navbar-toggler-icon {
  filter: brightness(0) invert(1);
}
.cursor-pointer{
  cursor: pointer;
}

</style>
