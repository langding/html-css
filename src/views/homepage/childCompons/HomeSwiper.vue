<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperImgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import Swiper from "@/components/common/swiper2/Swiper.vue";
  import SwiperItem from "@/components/common/swiper2/SwiperItem.vue";

  export default {
    name: "HomeSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      swiperImgLoad() {
        this.$emit("swiperImgLoad");
      }
    }
  }
</script>

<style scoped>

</style>
