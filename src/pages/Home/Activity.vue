<script setup>
import {ref} from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue' // swiper 所需组件
import { Autoplay, Navigation, Pagination, A11y } from 'swiper'// 分页器
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Title from '@/components/Title/Title.vue'
import { getImagePath } from "@/Mixins/getImagePath.js";

const modules = [Autoplay, Pagination, Navigation, A11y]


const item = ref(
[
    {
        img:'20240103093546115.jpg',
        time:'2024.01.01',
        id:'0'
    },
    {
        img:'20240103092445839.jpg',
        time:'2024.01.01',
        id:'1'
    },
    {
        img:'20240103092926353.jpg',
        time:'2024.01.01',
        id:'2'
    },
    {
        img:'20240102103040678.jpg',
        time:'2024.01.01',
        id:'3'
    }
]
)

const title = '活動資訊 Activity'


</script>

<template>

<Title :title="title"/>

<div class="Activity-container">

 <div class="swiperbox">
    <swiper
      :slidesPerView="3"
      :spaceBetween="10"
      :loop="true"
      :centeredSlides="true"
      :navigation="true"
      :modules="modules"
    >

      <swiper-slide v-for="items of item" :key="items.id"> 
        <RouterLink :to="{name:'Promotions'}">
            <img :src=" getImagePath(items.img) " alt=""> 
        </RouterLink>
        <div class="activity-content">
            <h3 class="activity-title">促銷活動</h3>
            <p class="activity-time">{{ items.time }}</p>
        </div>
      </swiper-slide> -->
        
    </swiper>
  </div> 
</div>

</template>

<style lang="scss" scoped>
.Activity-container{
    padding-bottom: 50px;
        .Activity{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 auto;
            max-width: 1270px;
            padding: 20px;
        h2{
            font-size: 26px;
            margin-right: 10px;
        }
        span{
            border-top: 1px solid #000;
            width: 75%;
            height: 1px;
        }
}
}

.swiperbox{
    max-width: 1270px;
    margin: 0 auto;
    .swiper{
        padding-left: 80px;
        .activity-content{
            margin: 15px 0 0 10px;

        }
        .activity-title{
            border: 1px solid;
            width: 80px;
            text-align: center;
            border-radius: 5px;
            padding: 0 5px;
            margin-bottom: 5px;
            background-color: gray;
            color: #fff;
        }
        .activity-time{
            font-size: 14px;
        }

    }
    img{
        max-width: 100%;
        width: 230px;
    }
}
</style>