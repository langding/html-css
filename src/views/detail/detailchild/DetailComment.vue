<template>
   <div class='Detailcomment' v-if="comments">
      <div v-for="(item,index) in comments" :key="index">
        <div class="banners">
          <span>用户评价</span>
          <span>更多</span>
        </div>
        <div class="userlogo">
          <img :src="item.user.avatar" alt="">
          <span>{{item.user.uname}}</span>
        </div>
        <div class="content"> 
          <div class="extrainfo" v-if="item.extraInfo">
            <span v-for="(x,y) in item.extraInfo" :key="y">{{x}}</span>
          </div>
          <div class="maincontent">
            {{item.content}}
          </div>
          <div class="contentdetail">
            <span>{{item.created|format}}</span>
            <span>{{item.style}}</span>
          </div>
          <div class="contentimg" v-if="item.images">
            <img :src="m" v-for="(m,n) in item.images" :key="n" @load="commentimgload">
          </div>
          <div class="merchant">
            {{item.explain}}
          </div>
        </div>
      </div>
   </div>
</template>

<script>
import {dateFormat} from '@/common/utils.js'
export default {
  components: {},
  props:{
    comments:{
      type:[Object,String,Array]
    }
  },
  data() {
    return {

    };
  },
  methods:{
    commentimgload(){
      this.$emit('commentimgload');
    }
  },
  filters:{
    format(val){
      let date = new Date(val);
      let str = 'yyyy-MM-dd-hh:mm:ss';
      return dateFormat(date,str);
    }
  }
}
</script>
<style lang='less' scoped>
.Detailcomment{
  margin-top:5vw;
  & > div{

    & > .banners{
      font-size:4.5vw;
      padding:2vw;
      border-top:1px solid #d5c5c596;
      border-bottom:1px solid #d5c5c596;
      display: flex;
      justify-content:space-between;
    } 
    & > .userlogo{
      vertical-align: middle;
      padding:2vw;
      & img{
        width: 12vw;
        border:1px solid #fff;
        border-radius: 50%;
        vertical-align: inherit;
      }
      & span{
        font-size: 4.5vw;
        padding-left:2.5vw;
      }
    }
    & > .content{
      padding:2vw;

      & > .extrainfo{
        font-size: 4vw;
        padding-bottom:2vw;
        display: flex;
        & span{
          padding: 1vw 2vw;
          background-color: #d2a25f;
          border-radius: 10px;
          margin-right: 2vw;
        }
      }
      & > .maincontent{
          color:#000000b5;
          font-size:4vw;
          padding-bottom: 2vw;
      }
      & > .contentdetail{
          padding-bottom:2vw;
          color:#b8b7ac;
          font-size:3.5vw;
          & span:first-child{
            padding: 0 2vw 0 0;
          }
      }
      & > .contentimg{
        display: flex;
        flex-wrap: nowrap;
        & img{
          width: 14vw;
          
          &:not(:first-child){
            margin-left: 1.5vw;
          }
        }
      }
      & > .merchant{
        font-size:4vw;
        padding-bottom: 2vw;
      }
      
    }
    
  }
}
</style>