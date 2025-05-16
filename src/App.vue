<template>
  <div id="app">
    <div v-if="loading" class="loader">
      <span class="letter">Loading...</span>
    </div>
    <div v-else>
      <Header/>
      <!--路由组件出口的地方-->
      <router-view></router-view>
      <Footer/>
    </div>

  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      loading: false,
    }
  },
  watch:{
    '$route' (to, from) {
      if(to.fullPath!== from.fullPath){
        this.startLoading();
      }
    }
  },
  methods:{
    startLoading(){
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      },300)
    }
  },
  mounted() {
    this.startLoading();
  },

}
</script>

<style>
#app {

}
.loader{
  background: rgba(16, 16, 16, 0.94);
  width:100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 3rem;
  color: #FFFFFF;
  z-index: 1119;
  display: flex;
  justify-content: center;
  align-items: center;
  .letter{
    font-weight: bold;
    text-shadow: 0 0 10px;
    margin-right: .3rem;
    animation: flash 5s 0s ease-in-out infinite ;
  }
}
</style>
