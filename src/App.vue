<template>
  <div id="app">
    <div id="nav">
      <keep-alive exclude="Detail">
           <router-view></router-view>
      </keep-alive>
  
     <main-tabbar></main-tabbar>
    </div>
  </div>
</template>
<script>
import MainTabbar from '@/components/content/maintabbar/MainTabbar.vue'
export default {
  components:{
    MainTabbar
  }
}
</script>
<style lang="less">
</style>
