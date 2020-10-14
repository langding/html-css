<template>
   <div class='tabitem' @click="a">
     <slot name="tabitem-img"></slot>
     <slot name="tabitem-title"></slot>
   </div>
</template>

<script>
export default {
  components: {},
  data() {
   return {
     
    }; 
  },
  props:{
    path:{
      type:[String]
    }
  },
  methods:{
    a(){
     this.$router.push(this.path);
    }
  }
}
</script>
<style scoped>
.tabitem {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:4px;
    flex-grow: 1;
}
.tabitem:hover{
  color:red;
}
</style>