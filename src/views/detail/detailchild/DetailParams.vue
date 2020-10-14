<template>
   <div class='DetailsParams' >
      <div v-if="param.rule" class="size-info">
        <h3>{{param.rule.key}}</h3>
          <div class="params-size params" v-if="param.rule.tables">
              <div v-for="(item,index) in param.rule.tables[0]" :key="index">
                <span v-for="(m,n) in item" :key="n">
                  {{m}}
                </span>
                <div class="zanwei"></div>
              </div>
          </div>
      </div>  
      <div v-if="param.info" class="product-info">
        <h3>{{param.info.key}}</h3>
        <div class="params-product params" v-if="param.info.set">
          <div v-for="(item,index) in param.info.set" :key="index">
            <span>{{item.key}}</span>
            <span>{{item.value}}</span>
          </div>
        </div>
      </div>
      
   </div>
</template>

<script>
export default {
  components: {},
  props:{
    param:{
      type:[Object,String]
    }
  },
  data() {
    return {
    };
  },
  created(){
    
  }
}
</script>
<style lang='less' scoped>
.DetailsParams{
  margin-top:4vw;
  & h4{
    padding:1vw 0;
  }
  & .params{
    padding:3vw;
    font-size: 3.4vw;
    & > div{
      padding-top:2.5vw;
      padding-bottom:2.5vw;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #cbd8d8b8;
      align-self: center;
      & span:first-child{
        width:20%;
      }
      & span:not(:first-child){
        width: 15%;
      }
      & .zanwei{
        width: 12%;
      }
    }
    
  }
  & .product-info{
    & > div{
      
      & span:last-child{
        flex-grow: 1;
        color: #f40;
      }
    }
  }
}
</style>