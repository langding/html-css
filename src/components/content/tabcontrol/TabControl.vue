<template>
   <div class='TabControl'>
     <div v-for="(item,index) in controltitles" :key="item"  @click="showAc(index)">
       <span :class="[index==temp? 'active':'']">{{item}}</span>
     </div>
   </div>
</template>

<script>
export default {
  components: {},
  props:{
    controltitles:{
      type:[Array]
    },
    indexs:{
      type:[String,Number],
      default(){
        return '0';
      }
    }
  },
  data() {
   return {
     temp:0,
   };
},
methods:{
  showAc(index){
    this.temp = index||indexs;
    this.$emit('tabclick',this.temp);
  },

}

}
</script>
<style lang='less' scoped>
.TabControl {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 14px 0;
    font-size: 18px;
    height: 38px;
    line-height: 40px;
    transition:all 0.5s;
    // position: -webkit-sticky;
    // position: sticky;
    border-radius:10px;
    background-color: #ffe9fde0;
    & div{
      width: 30%;
      text-align:center;
      & span{
        padding:4px;
      }
    }
}
.active{
      border-bottom: 2px solid #b28aaf;
}
</style>