<template>
   <div class='my'>
     <h2>我的信息也</h2>
    <div class="hello">
    <input v-model="newItem" @keyup.enter="addNew"/>
    <ul>
        <li v-for="(item,ii) in items"   :key="ii">
            {{item.lable}}
        </li>
        {{newItem}}
    </ul>
  </div>
   </div>
</template>

<script>

import Store from '@/network/store.js'
var initItems=Store.fetch();
export default {
  name: 'hello',
  data :function() {
    return {
      items:initItems,
      newItem:''
    }
  },
   watch:{
     items: {
      handler: function (items) { 
            Store.save(items);
       },
      deep: true
    }
  },
  methods:{
    
    addNew:function(){
        this.items.push({
          lable:this.newItem,
          isFinished:false
        });
        this.newItem="";
    }
  }
}
</script>
<style lang='less' scoped>
</style>