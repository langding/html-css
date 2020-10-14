<template>
   <div class='FeatureView'>
     <img :src="recimg" alt="">
   </div>
</template>

<script>
import recimg from '@/assets/img/recommend_bg1.jpg'
export default {
  components: {},
  data() {
    return {
      recimg:recimg
    };
  },

}
</script>
<style lang='less' scoped>
.FeatureView{
  padding-top:20px;
  width: 99%;
  box-shadow: 0px 1px 1px #d7daddbf;
  & img{
    width:101%;
  }
}

</style>