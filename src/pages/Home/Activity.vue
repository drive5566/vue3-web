<script setup>
import {ref} from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue' // swiper 所需组件
import { Autoplay, Navigation, Pagination, A11y } from 'swiper'// 分页器
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Title from '@/components/Title/Title.vue'

const modules = [Autoplay, Pagination, Navigation, A11y]


const item = ref(
[
    {
        src:'/public/img/20231101091930685.jpg',
        time:'2023-12-12',
        id:'1'
    },
    {
        src:'/public/img/20231109101150960.jpg',
        time:'2023-12-30',
        id:'2'
    },
    {
        src:'/public/img/20231110103843589.jpg',
        time:'2023-12-30',
        id:'3'
    },
    {
        src:'/public/img/20231127094138952.jpg',
        time:'2023-12-26',
        id:'4'
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
        <img :src=" items.src " alt=""> 
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