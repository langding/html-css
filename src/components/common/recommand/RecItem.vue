<template>
   <div class='Recitem'>
     <slot name="rec-img"></slot>
     <slot name="rec-text"></slot>
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
.Recitem {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.Recitem img{
  width:20%;
}

</style>