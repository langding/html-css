import {debounce} from '@/common/utils.js'
import BackTop from '@/components/common/totop/BackTop.vue'
export let Mixin = {
  data(){
    return {
      imgloadLister:'',
      refresh:''
    }
  },
  mounted(){
    this.refresh = debounce(this.$refs.scroll.refresh,100);
    this.imgloadLister = ()=>{
      this.refresh();
    };
    this.$bus.$on('imgloaded',this.imgloadLister); 
  }
}
export const backTopMixin = {
  components:{
    BackTop,
  },
  data(){
    return {
      isshow:false,
    }
  },
  methods:{
    backtop(){
      this.$refs.scroll.scroll.scrollTo(0,0,400);
    },
  }
}