<template>
   <div class='totop'>
     <img src="./logo.png" alt="">
   </div>
</template>

<script>
export default {
  components: {},
  data() {
   return {
   };
},

}
</script>
<style lang='less' scoped>
.totop{
  position:fixed;
  bottom: 10%;
  right:4%;
  z-index: 100;
  & img{
    width: 13vw;
  }
}
</style>