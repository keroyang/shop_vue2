<template>
<div class="container">
  <div>我是搜索界面</div>
{{ $route.params.keyWord}}
  {{ $route.query.k}}
</div>
</template>
<script>
export default {
  name: "index",
  props:["keyWord"],
  data() {
    return {

    }
  }
}
</script>
<style scoped lang="less">

</style>
