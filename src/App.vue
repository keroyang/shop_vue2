<template>
  <div id="app">
    <Header/>
    <div style="min-height: 2000px">
      我是中间部门
    </div>

    <Footer/>
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
  }
}
</script>

<style>
#app {

}

</style>
