<template>
  <div id="app">
    <router-view/>
    <Footguide v-show="$route.meta.showFooter"></Footguide>
  </div>
</template>

<script>
  import Footguide from './components/Footguide/Footguide'

  export default {
    //引入Footguide
    components: {
      Footguide //将其映射成标签
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
