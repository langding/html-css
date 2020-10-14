<template>
   <div class='Clistitem' v-if="cartlists.id">
      <div class="C-check">
        <span class="iconfont-ali" @click="checks" :class="{active:cartlists.checked}">&#xe686;</span>
      </div>
      <div class="C-content">
        <div class="C-img">
          <img :src="cartlists.image" alt="" @load="Cimgload">
        </div>
        <div class="C-info"> 
          <div><h4>{{cartlists.title}}</h4></div>
          <div><h4>{{cartlists.desc}}</h4></div>
          <div class="PP">
            <span>{{cartlists.price}}</span>
            <span>X{{cartlists.count}}</span>
          </div>
        </div>
      </div>
   </div>
</template>

<script>

export default {
  props:{
    cartlists:{
      type:[Object,String,Array],
    }
  },
  components: {},
  data() {
    return {
      
    };
  },
  methods:{
    Cimgload(){
      this.$emit('Cimgload');
    },
    checks(){
      this.cartlists.checked = !this.cartlists.checked
      console.log(this.cartlists.checked);
    }
  }
}
</script>
<style lang='less' scoped>
.active{
    color: #fff !important;
    border-color: aqua !important;
}
.Clistitem{
  display: flex;
  align-items:center;
  justify-content: space-between;
  width:100%;
  & .C-check{
    text-align: center;
    width: 10vw;
    & span{
      border:2px solid #911515;
      border-radius: 50%;
      color:red;
    }
  }
  & .C-content{
    display: flex;
    justify-content: space-between;
    width: 90vw;
    & .C-img{
      & img{
        width: 18vw;
        border-radius: 10px;
      }
      padding:1vw;
    }
    & .C-info{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding:1vw;
     
      & div h4{
          width: 68vw;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
      }
      & .PP{
        display: flex;
        justify-content:space-between;
      }
    }
  }
}
</style>