<template>
   <div class='HomePage'>
     <nav-bar ><div slot="navcenter">商业街</div></nav-bar>
      <tab-control :controltitles="controlTitles2" @tabclick="jumptab"  :indexs="tabindex1" v-show="isshow1" ref="tabcontrol1" class='tofixed'></tab-control>

      <scroll :probeType='3' :pullUpLoad="true" @scrol="scrol" @pullingup="pullingup" ref="scroll" > 
          <swiper :banners="banners"  @swiperImgLoad="swiperImgLoad" ></swiper>
          <recommand :recs='recommands'></recommand>
          <feature-view/>
          <tab-control :controltitles="controlTitles2" @tabclick="jumptab" ref="tabcontrol" :indexs="tabindex2"></tab-control>
          <goods :goodslist="showtab"></goods>
      </scroll>
      <back-top v-show="isshow"  @click.native="backtop"></back-top>

   </div> 
</template>

<script> 
import BScroll from 'better-scroll'
import Swiper from './childCompons/HomeSwiper.vue'
import Recommand from './childCompons/HomeRecommand.vue'
import FeatureView from './childCompons/HomeFeatureView.vue'


import NavBar from '@/components/common/navbar/NavBar.vue'
import TabControl from '@/components/content/tabcontrol/TabControl.vue'
import Goods from '@/components/content/goods/GoodsList.vue'
import Scroll from '@/components/common/scroll/Scroll.vue'
import BackTop from '@/components/common/totop/BackTop.vue'

import {Mixin,backTopMixin} from '@/common/Mixin.js'
import {debounce} from '@/common/utils.js'
import {getHomeMultidata,getHomeGoods} from  '@/network/home.js'

export default {
  mixins:[Mixin,backTopMixin],
  components: {
    Swiper,
    Recommand,
    FeatureView,
    TabControl,
    NavBar,
    Goods,
    Scroll,
  },
  data() {
   return {
      banners:[],
      recommands:[],
      controlTitles1:['pop','new','sell'],
      controlTitles2:['流行','新款','热卖'],
      Currenttype:'pop',
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      scroll:'',
      isshow1:false,
      tabcontrolTop:'',
      tabindex1:'',
      tabindex2:''
    };
  },
  computed:{
    showtab(){
      return this.goods[this.Currenttype].list;
    }
  },
  created(){
    this.getHomeMultidata1();
    this.getHomeGoods1('pop');
    this.getHomeGoods1('new');
    this.getHomeGoods1('sell');
  },
  methods:{
    //请求首页的上半部分数据
    getHomeMultidata1(){
      getHomeMultidata().then((res)=>{
        this.banners = res.data.banner.list;
        this.recommands = res.data.recommend.list;
      });
    },
    //请求首页的下半部分的数据
    getHomeGoods1(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then((res)=>{
          this.goods[type].list = [...this.goods[type].list,...res.data.list];
          this.goods[type].page++;
          this.$refs.scroll.scroll.finishPullUp();
      })
    },
    jumptab(val){
      this.Currenttype = this.controlTitles1[val];
      this.$refs.tabcontrol.temp = val;
      this.$refs.tabcontrol1.temp = val;
    },
   
    // getoffset(){
    //   console.log("sss");
    // },
    scrol(y){
      if((-y)>=1000){
        this.isshow = true;
      }else{
        this.isshow = false;
      }

      if((-y)>this.$refs.tabcontrol.$el.offsetTop+40){
        this.isshow1 = true;
      }else{
        this.isshow1 = false;
      }
    },
    pullingup(){
      this.getHomeGoods1(this.Currenttype);
      this.$refs.scroll.refresh();
    },
    swiperImgLoad(){
      this.$refs.scroll.refresh();
      this.tabcontrolTop = this.$refs.tabcontrol.$el.offsetTop;
    }
  },
  mounted(){
    this.$refs.scroll.refresh();
  },
  activated(){
    this.$refs.scroll.refresh();
    this.$refs.scroll.scroll.scrollTo(0,this.scrollY,0);
  },
  deactivated(){
    this.scrollY = this.$refs.scroll.getScrollY();
    this.$bus.$off('imgloaded',this.imgloadLister);
  }
}
</script>
<style lang='less' scoped>
.tofixed{
  position: relative;
  z-index: 100;
  opacity: 1;
}


</style>