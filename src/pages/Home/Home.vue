<script setup>
import { ref } from 'vue'
import Swiper from '@/components/Swiper/Swiper.vue'
import FishWay from '@/pages/Home/FishWay.vue'
import Activity from '@/pages/Home/Activity.vue'
import NewThing from '@/pages/Home/NewThing.vue'
import TopProduct from '@/pages/Home/TopProduct.vue'

const item = ref(
    [
        {
            img: '/public/img/20231201173916097.jpg',
            id: '1'
        },
        {
            img: '/public/img/20231201174046412.jpg',
            id: '2'
        },
        {
            img: '/public/img/20231201174313095.jpg',
            id: '3'
        },
    ]
)



</script>

<template>
<Swiper :item="item" />

<FishWay />

<Activity />

<NewThing />

<TopProduct />
 

</template>

<style lang="scss" scoped>

</style>