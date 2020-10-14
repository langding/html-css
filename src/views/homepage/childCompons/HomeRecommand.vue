<template>
   <div class='Recommand'>
       <div v-for="i in recs" :key="i.link" class="RecItem">
         <a :href="i.link">
          <img :src="i.image">
          <h4>{{i.title}}</h4>
         </a>
       </div>
   </div>
</template>

<script>
export default {
  components: {
    
  },
  props:{
    recs:{
      type:[Array],
      default(){
        return []
      }
    }
  },
  data() {
    return {  
      recom : ''
    };
  },

  created(){
  
  },
  BeforeMount(){
;
  }
}
</script>
<style lang='less' scoped>
.Recommand {
    display:flex;
    justify-content:space-around;
    align-items:center;
    background-color:#fff;
    box-shadow: 0px 15px 1px #ced3d878;
    padding-bottom: 17px;   
}
.RecItem{
  width: 20%;
}
.RecItem a{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.RecItem img{
  width:100%;
  padding:6px 0px;
}

</style>