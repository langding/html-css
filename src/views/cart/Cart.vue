<template>
   <div class='Cart'>
     <cart-nav-bar><div slot="navcenter">购物车({{len}})</div></cart-nav-bar>
     <scroll class="wrapper" ref="scroll">
       <cart-list-item :cartlists="item" v-for="(item,index) in lists" :key="index" @Cimgload="cimgload"></cart-list-item>
     </scroll>
     <cart-cal></cart-cal>
   </div>
</template>

<script>
import CartNavBar from '@/components/common/navbar/NavBar.vue'
import CartListItem from './cartchild/CartListItem.vue'
import CartCal from './cartchild/CartCal.vue'
import Scroll from '@/components/common/scroll/Scroll.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    CartNavBar,
    CartCal,
    CartListItem,

    Scroll,
  },
  data() {
    return {
    };
  },
  methods:{
    cimgload(){
      this.$refs.scroll.refresh();
    }
  },
  computed:{
    ...mapGetters({
      len :'productListLength',
      lists :'getProductList'
    })
  },
  mounted(){
    
  },
  beforeDestroy(){
    
  }
}
</script>
<style lang='less' scoped>
.wrapper{
    height:-moz-calc(100vh - 140px);
    height:-webkit-calc(100vh - 140px);
    height:calc(100vh - 140px);
}
</style>