<template>
   <div class='c-cal'>
     <div class="cal-check">
         <span class="iconfont-ali" @click="checks" >&#xe686;</span>
         全选{{selectAll}}
     </div>
     <div class="cal-price">
       <span>合计: {{AllPrice}}</span>
     </div>
     <div class="cal-buy">
        去付钱({{AllCount}})
     </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Store from '@/network/store.js'
let pros = Store.fetch();
export default {
  components: {},
  data() {
    return {
      lis1 :this.lis,
      items:pros,
      newItem:''
    };
  },
  watch:{
     items: {
      handler: function (items) { 
            Store.save(items);
       },
      deep: true
    }
  },
    computed:{
    AllPrice(){
      if(this.$store.state.productList){
        return '￥'+this.$store.state.productList.filter(item => !item.checked).reduce((a,b)=>a+(b.price*b.count),0).toFixed(2);
      }
    },
    selectAll(){
      if(this.$store.state.productList.length){
        return this.$store.state.productList.filter(item => !item.checked).length;
      }
    },
    AllCount(){
      if(this.$store.state.productList.length){
      return this.$store.state.productList.filter(item => !item.checked).reduce((a,b)=>a+b.count,0);
      }
    },
    ...mapGetters({
      len : 'productListLength',
      lis : 'getProductList'
    })
  },
  created(){
    if(this.lis){
      this.$store.state.productList = this.items;
    }else{
      console.log('我空的');
    }
  },
  beforeDestroy(){
   this.items.push(this.lis);
   console.log('我加入了');
  },
  methods:{
    checks(){
     
    },  

  }
}
</script>
<style lang='less' scoped>
.c-cal{
  display: flex;
  align-items:center;
  height: 40px;
  background-color: antiquewhite;
  justify-content: space-around;
  & .cal-check{
    & span{
      border:1px solid #911515;
      border-radius: 50%;
      color:red;
    }
      
  }
  & .cal-price{
    background-color: antiquewhite;
  }
  & .cal-buy{
    background-color: beige;
  }
}
.active{
    color: #fff !important;
    border-color: aqua !important;
}
</style>