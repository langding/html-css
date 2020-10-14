<template>
   <div class='tarbbar'>
     <slot></slot>
   </div>
</template>

<script>
export default {
  components: {
  },
  data() {
   return {
   };
},
}
</script>
<style  scoped>
.tarbbar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display:flex;
    justify-content:space-around;
    align-items:center;
    border-top: 1px solid #ddd;
    box-shadow: 0 -1px 0px rgb(100 85 85 / 20%);
}
</style>