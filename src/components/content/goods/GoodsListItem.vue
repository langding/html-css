<template>
   <div class='goodslistitem' @click="todetail">
     <div class="showimg">
       <img :src="showimg" alt="" @load="imgload">
     </div>
     <div class="showinfo">
       <h4>{{goodsitem.title}}</h4>
       <span class="price">{{goodsitem.price}}</span>
       <span class="iconfont-ali">&#xe509;</span>
       <span>{{goodsitem.cfav}}</span>
     </div>
   </div>
</template>

<script>
export default {
  components: {
  },
  props:{
    goodsitem:{
      type:[Object,Array],
      default(){
        return {}
      }
    }
  },
  data() {
    return {
      id:''
    };
  },
  computed:{
    showimg(){
      return this.goodsitem.image || this.goodsitem.show.img;
    }
  },
  created(){  
    this.id = this.goodsitem.iid;
  },
  methods:{
    imgload(){
      this.$bus.$emit('imgloaded');
    },
    todetail(){
      this.$router.push('/mall/detail/'+this.id);
    }
  }
}
</script>
<style lang='less' scoped>
.goodslistitem{
  width:48vw;
  padding:1vw;
  text-align:center;
  &  img{
    width: 100%;
    border-radius:10px;
  }
  & h4{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding:1vw 0;
  }
  & .price{
    color:var(--color-high-text);
  }
  & span{
    padding:0.8vw;
  }
  & .showinfo{
    width:96%;
    margin:0 auto;
  }
}
</style>