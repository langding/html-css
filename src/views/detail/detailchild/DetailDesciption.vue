<template>
   <div class='Descirption'>
     <div class="Descirption-title">
        <div class="de-left">  
          ❀❀❀❀❀❀❀❀❀❀
        </div>
        <div v-if="description.desc">
          {{description.desc}}
        </div>
        <div class="de-right">
          ❀❀❀❀❀❀❀❀❀❀
        </div>
        <div v-if="description.detailImage">
              <h3>{{description.detailImage[0].key}}</h3>
        </div>
     </div>
     <div class="Descirption-img" v-if="description.detailImage">
       <div v-for="(item,index) in description.detailImage[0].list" :key="index">
          <img :src="item" @load="imgload">
       </div>
     </div> 
   </div>
</template>

<script>
export default {
  components: {},
  props:{
    description:{
      type:[Object,String],
      default(){
        return {}
      }
    }
  },
  data() {
    return {
      count:0
    };
  },
  methods:{
    imgload(){
        this.$emit('dimgload');
    }
  }
}
</script>
<style lang='less' scoped>
.Descirption-title{
    width: 94vw;
    margin: 0 auto;
    padding: 4vw 0;
    & div{
      padding:2vw;
    }
    & .de-right{
      text-align: right;
    }
}
.Descirption-img{

  & > div{
    width: 100vw;
    & img{
      width: 100%;
    }
  }
}
</style>