<template>
   <div class='toast' v-show="isShow">
     {{message}}
   </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isShow:false,
      message:''
    };
  },
  methods:{
    show(message,duration = 2000){
      this.isShow = true;
      this.message = message;
      setTimeout(()=>{
        this.isShow = false;
      },duration)
    }
  }
}
</script>
<style lang='less' scoped>
.toast{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150px;
    height: 40px;
    margin-left: -75px;
    margin-top: -20px;
    z-index: 999;
    color: #fff;
    background-color: #a29a91a3;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    letter-spacing: 2px;
    opacity: 1;
    transition:all 0.3s;
}
</style>