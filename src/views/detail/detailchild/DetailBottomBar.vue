<template>
   <div class='dbottombar'>
     <div>
       <span class="iconfont-ali">&#xe656;</span>
       <span>客服</span>
     </div>
     <div>
       <span class="iconfont-ali">&#xe56c;</span>
       <span>店铺</span>
     </div>
     <div>
       <span class="iconfont-ali">&#xe614;</span>
       <span>收藏</span>
     </div>
     <div class="shopcart" @click="daddcart">
        加入购物车
     </div>
     <div class="purchase">
          购买
     </div>
   </div>
</template>

<script>
export default {

  components: {},
  data() {
    return {
    };
  },
  methods:{
    daddcart(){
      this.$emit('addtocart');
    }
  }
}
</script>
<style lang='less' scoped>
.dbottombar{
  display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    height: 7vh;
    position: relative;
    font-size:3.4vw;
    & div{
      display: flex;
      flex-direction: column;
      align-items:center;
      width: 100%;
      height: 100%;
      & > span:first-child{
        font-size: 5vw;
        padding:1vw;
      }
    }
    & .shopcart{
      background-color: yellow;
      line-height: 7vh;
    }
    & .purchase{
      background-color: rgb(255,100,156);
      line-height: 7vh;
    }

}
</style>