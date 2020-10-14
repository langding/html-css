<template>
   <div class='detail'>
     <detail-nav-bar @detailswitch="detailswitch" ref="dnav"></detail-nav-bar>
      <scroll :probeType="3" :pullUpLoad="true" ref="scroll" @pullingup="dfr" @scrol="scrol" class="wrapper">
        <detail-swiper :topImages="imgbox1" @imgLoad="detailSwiperImgLoad"></detail-swiper> 
        <detail-recommand :goods="Goods"></detail-recommand>
        <detail-shop-info :shopsinfo="shopsinfo"></detail-shop-info>
        <detail-desciption :description="description" @dimgload="descriptionImgload"></detail-desciption>
        <details-params :param="Params" ref="dparam"></details-params>
        <detail-comment :comments="comments" @commentimgload="commentimgload1" ref="dcomment"></detail-comment>
        <goods-list :goodslist="recommend" ref="drecommend"></goods-list>
      </scroll>
      <back-top v-show="isshow"  @click.native="backtop"></back-top>
      <detail-bottom-bar @addtocart="addtocartlistener"></detail-bottom-bar>
      <toast ref="toast"></toast>
   </div>
</template>

<script>
import DetailNavBar from './detailchild/DetailNavBar.vue'
import DetailSwiper from './detailchild/DetailSwiper.vue'
import DetailRecommand from './detailchild/DetailRecommand.vue'
import DetailShopInfo from './detailchild/DetailShopInfo.vue'
import DetailDesciption from './detailchild/DetailDesciption.vue'
import DetailsParams from './detailchild/DetailParams.vue'
import DetailComment from './detailchild/DetailComment.vue'
import GoodsList from '@/components/content/goods/GoodsList.vue'
import DetailBottomBar from './detailchild/DetailBottomBar.vue'
import Toast from '@/components/common/toast/Toast.vue'

import Scroll from '@/components/common/scroll/Scroll.vue'
import {Mixin,backTopMixin} from '@/common/Mixin.js'
import {getDetailData,Goods,getDetailComment} from '@/network/detail.js'
import {debounce} from '@/common/utils.js'
export default {
  name:'Detail',
  mixins:[Mixin,backTopMixin],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailRecommand,
    DetailShopInfo,
    DetailDesciption,
    DetailsParams,
    DetailComment,
    GoodsList,
    DetailBottomBar,
    Scroll,
    Toast,
  },
  data() {
    return {
      id:'',
      Goods:'',
      imgbox1:'',
      shopsinfo:'',
      description:{},
      Params:'',
      comments:'',
      recommend:'',
      navbarpositiony:[],
      temp1:'',
      Currentindex:0,
      messages:''
    };
  },
computed: {
},
methods: {
 

  detailSwiperImgLoad(){
    //滚动刷新
    
    this.$refs.scroll.refresh();
  },
  //这里商品标题区域内的图片监听刷新
  descriptionImgload(){
    this.refresh();
    this.temp1();
  },
  //上拉刷新 重新计算
  dfr(){
    this.$refs.scroll.refresh();
  },
  //用户评价里面的存在的图片监听刷新
  commentimgload1(){
    this.$refs.scroll.refresh(); 
  },
  //滚动监听;
  scrol(y){
    if((-y)>=1000){
        this.isshow = true;
    }else{
      this.isshow = false;
    }

    for(let i = 0;i < this.navbarpositiony.length - 1;i++){
      if((this.Currentindex !== i)&&((-y) >= this.navbarpositiony[i]&&(-y) < this.navbarpositiony[i+1])){
        this.Currentindex = i;
        this.$refs.dnav.temp = this.Currentindex;
      }
    }
  },
  //点击标题滚动到指定的位置
  detailswitch(index){
    this.Currentindex = index;
    this.$refs.scroll.scroll.scrollTo(0,-this.navbarpositiony[index],200);
  },
  addtocartlistener(){
    let productinfo = {};
    productinfo.id = this.id;
    productinfo.image = this.imgbox1[0];
    productinfo.title = this.Goods.title;
    productinfo.desc = this.Goods.desc;
    productinfo.price = this.Goods.oldPrice.substr(1);
    this.$store.dispatch('add',productinfo).then(res=>{
      this.$toast.show(res,2000);
    });  
  }
 },
 created() {
  this.id = this.$route.params.id;
  this.temp1 = debounce(()=>{
    this.navbarpositiony = [];
    this.navbarpositiony.push(0);
    this.navbarpositiony.push(this.$refs.dparam.$el.offsetTop);
    this.navbarpositiony.push(this.$refs.dcomment.$el.offsetTop);
    this.navbarpositiony.push(this.$refs.drecommend.$el.offsetTop);
    this.navbarpositiony.push(100000);
  },100);

  if(getDetailData){
    getDetailData(this.id).then((a) =>{
     let data = a.result;

     //轮播图片
     this.imgbox1 = data.itemInfo.topImages;

     //推荐商品的全部信息
     this.Goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services,this.id);
     
     //进入店铺的信息。
     this.shopsinfo = data.shopInfo;
    
     //一些商品的图片的展览。
     this.description = data.detailInfo;

     //商品的参数
     this.Params = data.itemParams;
     
     //商品的评论
     if(data.rate.cRate !== 0){
       this.comments = data.rate.list;
     }

     //推荐商品的信息
     getDetailComment().then(res=>{
       this.recommend = res.data.list;
     });

    }); 
  }
  
},
  mounted(){
    
  },
  destroyed(){
    this.$bus.$off('imgloaded',this.imgloadLister);
  }
}
</script>
<style lang='less' scoped>
.detail{
  position: relative;
  z-index: 100;
  background-color: #fff;
  height:100vh;
}
.wrapper{
  height:-moz-calc(100vh - 100px);
  height:-webkit-calc(100vh - 100px);
  height:calc(100vh - 100px);
}
</style>