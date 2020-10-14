<template>
   <div class='nav-bar'>
     <div class='left'><slot name="navleft"></slot></div>
     <div class='center'><slot name="navcenter"></slot></div>
     <div class='right'><slot name="navright"></slot></div>
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
.nav-bar{
  text-align:center;
  display:flex;
  align-items: center;
  height:40px;
  height:44px;
  justify-content: space-between;
  background-color:var(--color-tint);
  color:#fff;
}
.nav-bar .left{
    display: flex;
    align-items: center;
    justify-content: center;
}
.nav-bar .center{
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  flex-grow:1;
}
.left,.right{
  width:60px;
  height:100%;
}
</style>