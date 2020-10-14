<template>
   <div>
      <ul>
        <a href="" v-for="(item,index) in listname" :key="index">{{item.title}}</a>
      </ul>
      
   </div>
</template>

<script>
import tutu from './c1.json'
import {getclassifydata} from '@/network/classify.js'
export default {
  components: {},
  data() {
    return {
      listname:''
    };
  },
  methods:{
    btnclick(){

    }
  },  
  created(){
    getclassifydata().then(res=>
    {
      this.listname = res.data.category.list;
      
    });
   
  },  
  mounted(){
    
  }
}
</script>
<style lang='less' scoped>
.wrapper{
  height:200px;
  border:1px solid red;
  overflow: hidden;
}
</style>