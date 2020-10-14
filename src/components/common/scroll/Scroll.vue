<template>
   <div class='wrapper' ref="wrapper">
     <div class="content">
       <slot></slot>
     </div>
   </div>
</template>

<script>
import BSscroll from 'better-scroll'
export default {
  components: {},
  data() {
    return {
      scroll:null
    };
  },
  props:{
    probeType:{
      type:[Number],
      default:1
    },
    pullUpLoad:{
      type:[Boolean],
      default:false
    }
  },
  methods:{
    finishPullup(){
      this.scroll.finishPullUp();
    },
    refresh() {
        // 代理better-scroll的refresh方法
        this.scroll && this.scroll.refresh();
    },
    getScrollY(){
      this.scroll ? this.scroll.y : 0;
    }
  },
  mounted(){
    this.scroll = new BSscroll(this.$refs.wrapper,{
      zoom:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad,
      click:true
    });
    if(this.probeType>=2){
       this.scroll.on('scroll',({y})=>{
        this.$emit('scrol',y);
      });
    }
    if(this.pullUpLoad){
       this.scroll.on('pullingUp',()=>{
        this.$emit('pullingup');
      });
    }
   
  }
}
</script>
<style lang='less' scoped>
.wrapper{
    height:600px;
    height:-moz-calc(100vh - 80px);
    height:-webkit-calc(100vh - 80px);
    height:calc(100vh - 80px);
    overflow: hidden;
}
</style>