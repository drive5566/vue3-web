<script setup>
import {defineProps} from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue' // swiper 所需组件
import { Autoplay, Navigation, Pagination, A11y } from 'swiper'// 分页器
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { getImagePath } from "@/Mixins/getImagePath.js";


const modules = [Autoplay, Pagination, Navigation, A11y]

const props = defineProps(['item','slidesPerView','clickable','navigation'])





</script>

<template>
    <div class="swiperbox">
    <swiper
      :slidesPerView="slidesPerView"

      :loop="true"
      :centeredSlides="true"
      :pagination=" clickable "
      :autoplay="{ delay: 3000, disableOnInteraction: false}"
      :modules="modules"
      :navigation="navigation"
      
    >

      <swiper-slide v-for="items in item" :key="items.id"> 
        <img class="swiper-img"
         :src=" getImagePath(items.img) " alt=""> 
      </swiper-slide> -->
        
    </swiper>
  </div>


</template>

<style lang="scss" scoped>


.swiperbox{
  margin: 0 auto;
    margin-bottom: 10px;
    max-width: 1270px;
    .swiper-img{
      max-width: 100%;
      margin: 0 auto;
    }
}
</style>
