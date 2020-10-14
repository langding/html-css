<template>
 
    <!-- <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
    </router-view> -->
    <div class='maintabbar'>
     <tabbar>
       <tabbaritem path="/mall/homepage"> 
         <span slot="tabitem-img" class="iconfont-ali" >&#xe796;</span>
         <span slot="tabitem-title">首页</span>
       </tabbaritem>
       <tabbaritem path="/mall/classify" >
         <span slot="tabitem-img" class="iconfont-ali" >&#xe63c;</span>
         <span slot="tabitem-title">分类</span>
       </tabbaritem>
       <tabbaritem path="/mall/cart" >
         <span slot="tabitem-img" class="iconfont-ali" >&#xe603;</span>
         <span slot="tabitem-title">购物车</span>
       </tabbaritem>
       <tabbaritem path="/mall/my" >
         <span slot="tabitem-img" class="iconfont-ali" >&#xe605;</span>
         <span slot="tabitem-title">我的</span>
       </tabbaritem>
     </tabbar>
   </div>

   
</template>

<script>
import tabbar from '@/components/common/tabbar/TabbarBox.vue'
import tabbaritem from '@/components/common/tabbar/TabbarItem.vue'
import Store from '@/network/store.js'
let pro1 = Store.fetch();

export default {
  components: {
    tabbar,
    tabbaritem
  },
  data() {
   return {
     
     };
  },
  methods:{

  }

}

require('@/assets/css/icon/iconfont.css')
require('@/assets/css/base.css')
</script>
<style scoped>

.iconfont-ali{
  font-size:26px;
  padding-bottom:2px;
}
.maintabbar{
  z-index: 100;
}
</style>