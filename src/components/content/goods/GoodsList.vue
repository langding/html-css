<template>
   <div class='goodslist'>
     <goods-list-item v-for="(i,j) in goodslist" :key="j" :goodsitem="i"></goods-list-item>
   </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  components: {
    GoodsListItem,
  },
  props:{
    goodslist:{
      type:[Array,String],
      default(){
        return []
      }
    }
  },
  data() {
      return {
      };
    },
  created(){
  }
}

</script>
<style lang='less' scoped>
.goodslist {
    display: flex;
    align-items: center;
    flex-wrap:wrap;
    width:100vw;
    justify-content:space-around;
}
</style>