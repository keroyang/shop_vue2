<template>
  <div>

    <header class="site_header animated" ref="header"
            :class="{
              'header-scroll_bg_light':isScrolled,
              'fadeInDown':isScrolled
            }"
            >
      <div class="bottom_header">
        <div class="container">
          <b-navbar toggleable="lg" class="sticky-top">


            <b-navbar-brand :to="{name: 'home'}">
              <img class="logo" :src="require('./images/logo.png')" alt="logo"/>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
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
            </b-collapse>

          </b-navbar>
        </div>

      </div>

    </header>

  </div>
</template>


<script>
import Menu from "./components/Menu";

export default {
  name: "Header",
  components: {
    Menu
  },
  data(){
    return {
      isScrolled:false
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
  },
  beforeMount() {
    window.removeEventListener("scroll", this.handleScroll)
  },
  methods: {
    handleScroll() {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        this.isScrolled = scrollTop>=200;
    }

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

.header-scroll_bg_light{
  position: fixed;
  width: 100%;
  left: 0;
  z-index: 1010;
  top: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

</style>
