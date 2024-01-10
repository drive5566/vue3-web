<script setup>
import { ref } from 'vue'
import Swiper from '@/components/Swiper/Swiper.vue'
import Title from '@/components/Title/Title.vue'


const slidesPerView = ref(5)

const clickable = ref(false)

const item = ref([
    {
        img: '/public/img/MAIN-VIB 46S-HS - 複製.jpg',
        id: 1
    },
    {
        img: '/public/img/750-SPOON 50g - 複製.jpg',
        id: 2
    },
    {
        img: '/public/img/750-SPOON 100g - 複製.jpg',
        id: 3
    },
    {
        img: '/public/img/750-SPOON 70g - 複製.jpg',
        id: 4
    },
    {
        img: '/public/img/750-口太速攻 - 複製.jpg',
        id: 5
    },
]
)
const title = '人氣商品 TOP'

</script>

<template>
    <div class="TopProduct-container">
        <Title :title="title" />

        <Swiper v-bind="{ item, slidesPerView, clickable }" class="swiperbox swiper-img" />

    </div>
</template>

<style lang="scss" scoped>

.swiperbox {
    margin: 0 auto;
    margin-bottom: 20px;
    padding-left: 20px;

    ::v-deep .swiper-img {
        width: 160px;
        height: 160px;
 
    }
}
</style>