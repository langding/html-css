<template>
   <div class='ShopInfo'>
     <div class="shopslogo">
       <img :src="shopsinfo.shopLogo">
       <span>{{shopsinfo.name}}</span>
     </div>
     <div class="shopsparams">
       <div class="paramsleft">
         <div class="Allcount count_sell">
           <span>{{shopsinfo.cSells|wan}}</span>
           <span>总销量</span>
         </div>
         <div class="Allcount count_all">
           <span>{{shopsinfo.cGoods}}</span>
           <span>全部宝贝</span>
         </div>
       </div>
       <div class="paramsright">
         <div v-for="(item,index) in shopsinfo.score" :key="index">
           <span>{{item.name}}</span>
           <span :class="{'togreen':!item.isBetter}" class="fontco">{{item.score}}</span>
           <span v-if="item.isBetter" class="better">高</span>
           <span v-else class="worse" >低</span>
         </div>
       </div>
     </div>
     <div class="entrance" :href="shopsinfo.shopUrl">
       <button>进店逛逛</button>
     </div>
   </div>
</template>

<script>
export default {
  components: {},
  props:{
    shopsinfo:{
      type:[Object,String]
    }
  },
  data() {
    return {
    };
  },
  filters:{
    wan(a){    
      if(a){
        let len = a.length;
        if(len>4){
          return (a/Math.pow(10,a.length)).toFixed(1)+"万";
        }else{
          return a;
        }
      }
    }
  }
}
</script>
<style lang='less' scoped>
.ShopInfo{
      width: 94vw;
    margin: 0 auto;
    padding: 4vw 0;
  & .shopslogo{
    display:flex;
    align-items: center;
    
    & img{
          width: 11vw;
          border-radius: 50%;
          background-color: #fff;
          border: 1px solid #b8c4d18c;
    }
    & span{
      font-size:20px;
      padding-left:1.5vw;
    }
  }
  & .shopsparams{
    display:flex;
    justify-content: space-around;
    align-self: center;
    margin-top: 5vw;
    font-size:2.5vw;
    & .paramsleft{
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-grow:1;
       &::after{
        content:'';
        display: block;
        width: 1px;
        height: 100%;
        background-color:#b5c9dba6;
      }
    }
    & .paramsright{
      flex-grow:1;
          display: flex;
    flex-direction: column;
    align-items: center;
      & > div{
        padding:1vw;
        display:flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        & span{
          width: 32%;
          display: block;
          text-align: center;
        }
        & .better{
          background-color: red;
              display: inline-block;
          width: 8%;
          color: #fff;
        }
        & .worse{
          background-color:green;
              display: inline-block;
          width: 8%;
          color: #fff;
        }
      }
    }
    & .Allcount{
      display:flex;
      flex-direction: column;
      align-items: center;
      font-size:18px;
      & span{
        padding:1vw;
      }
    }
  
  }
}
.fontco{
  color:red;
}
.togreen{
  color:greenyellow;
}
.entrance {
  padding-top:6vw;
  text-align:center;
  & button{
    border-width:0;
  padding:2vw 8vw;
  }
  
}
</style>