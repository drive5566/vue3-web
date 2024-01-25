<script setup>
import { ref } from 'vue'
import Swiper from '@/components/Swiper/Swiper.vue'
import Title from '@/components/Title/Title.vue'


const slidesPerView = ref(5)

const clickable = ref(false)

const item = ref([
    {
        img: 'MAIN-GRASS RIPPER-1 4oz - 複製.jpg',
        id: 11
    },
    {
        img: 'MAIN-FLAT CAP - 複製.jpg',
        id: 10
    },
    {
        img: 'MAIN-IxI FURIOUS 1.5 - 複製.jpg',
        id: 9
    },
    {
        img: 'MAIN-BIG BACKER FIT VIB-70mm - 複製.jpg',
        id: 8
    },
    {
        img: 'MAIN-GM-3721 - 複製.jpg',
        id: 7
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