<template>
   <div class='Detailrec' v-if="Object.keys(goods).length !== 0">
     <div class="baseinfo">
        <h2>{{goods.title}}</h2>
        <div>
          <span class='price'>{{goods.price}}</span>
          <del>{{goods.oldPrice}}</del>
          <span :style="{backgroundColor:goods.discountBgColor}" class='discount'>{{goods.discountDesc}}</span>
        </div>
     </div>
     <div class="collection">
       <div v-for="item in goods.collection.length-1" :key="item">
         {{goods.collection[item-1]}}
       </div>
       <div>
         {{goods.services[0].name}}
       </div>
     </div>
     <div class="adv">
       <div v-for="index in goods.services.length-1" :key="index">
         <img :src="goods.services[index].icon" alt="">
         <span>{{goods.services[index].name}}</span>
       </div>
     </div>
   </div>
</template>

<script>
export default {
  components: {},
  props:{
    goods:{
      type:[Object,String],
      default(){
        return {}
      }
    },
    
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
.Detailrec {
    margin-top: 1vh;
    border-bottom: 1px solid #c3ccd4;
    & .baseinfo{
      width: 98vw;
      margin: 0vh auto;
      
      & > div{
        position:relative;
        display: flex;
      }
      & h2{
        padding-bottom:3vh;
      }
      & .price{
            color: #df7688;
            font-size: 28px;
            font-weight: 500;
      }
      & del{
        padding: 1vw;
        font-size: 17px;
        color: #cfd1d2;
      }
      & .discount{
        padding: 1vw 2vw;
        border-radius: 10px;
        font-size: 18px;
        margin-top: -10px;
        display: table;
      }
    }
    & .collection{
          display: flex;
          justify-content: space-between;
          width: 98vw;
          margin: 0 auto;
          padding-top: 4vw;
          padding-bottom: 3vw;
          color: #b2bac1;
          font-size: 16px;
          border-bottom: 1px solid #b2bac1;
    }
    & .adv{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom:5vw;
          padding-top:3vw;
          & div{  
            display:flex;
            align-items:center;
            & img{
              width:3.5vw;
            }
          }
    }
}
</style>