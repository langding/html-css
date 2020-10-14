<template>
   <div class='nav'>
     <nav-bar class="aas">
       <div slot="navleft" @click="backup">
         <span class="iconfont-ali">&#xe737;</span>
       </div>
       <div slot='navcenter' class="dnav">
         <div v-for="(item,index) in navs" :key="index" @click="swit(index)" :class="{active:temp==index}">
           {{item}}
         </div>
       </div>
     </nav-bar>
   </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      navs:['商品','参数','评论','推荐'],
      temp:0,
    };
  },
  methods:{
    backup(){
      this.$router.go(-1);
    },
    swit(index){
      this.temp = index;
      this.$emit('detailswitch',this.temp);
    }
  }

}
</script>
<style lang='less' scoped>
.aas{
  background-color: #fff;
  color:initial;
}
.dnav{
  display:flex;
  position: relative;
  z-index: 10;
  flex-grow: 1;
 
  
   & div{
     flex-grow:1;
   }
}
.active{
  color:var(--color-high-text);
}
</style>