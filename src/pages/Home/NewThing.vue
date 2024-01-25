<script setup>
import { ref } from 'vue';
import Title from '@/components/Title/Title.vue'
import { getImagePath } from "@/Mixins/getImagePath.js";


const item = ref([
    {
        img: 'MAIN-SABULL HB SHAD-28g - 複製.jpg',
        productName: 'JACKALL SABULL HB SHAD 28g [路亞硬餌] [灘拋用]',
        sold: 50,
        price: 470,
        id: 0
    },
    {
        img: 'MAIN-JETTROW-35g - 複製.jpg',
        productName: 'JACKALL JETTROW 35g [路亞助投器套組] [類水球釣組]',
        sold: 6540,
        price: 500,
        id: 1
    },
    {
        img: 'MAIN-JETTROW-45g - 複製.jpg',
        productName: 'JACKALL JETTROW 45g [路亞助投器套組] [類水球釣組]',
        sold: 230,
        price: 550,
        id: 2
    },
    {
        img: 'MAIN-JETTROW BUDDY - 複製.jpg',
        productName: 'JACKALL JETTROW BUDDY [類弓角] [阿兵哥釣組]',
        sold: 10,
        price: 170,
        id: 3
    }
])

const title = '最新商品 NEW'


</script>

<template>

    <div class="new-thing-container">

        <Title :title="title" />

        <div class="new-thing-card" v-for="items of item" :key="items.id">
            <div class="newThingImg">
                <RouterLink :to="{name:'productsDetails',query:{id:items.id}}">
                    <img :src="getImagePath(items.img)" alt="">
                </RouterLink>
            </div>
            <div class="new-thing-content">
                <RouterLink :to="{name:'productsDetails',query:{id:items.id}}">
                    <h3>{{ items.productName }}</h3>
                </RouterLink>
                <p class="sold">已售出{{ items.sold }}</p>
                <p class="price">NT.{{ items.price }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.new-thing-container {
    background-color: rgba(216, 216, 216, 0.2);
}



.new-thing-card {
    margin: 0 auto;
    max-width: 1270px;
    display: flex;
    justify-content: start;
    gap: 20px;
    padding: 30px;
    border-bottom: 1px solid hsl(0, 0%, 0%,.2);
    a{
        color: black;
    }
    h3 {
        font-size: 26px;
    }

    .sold {
        margin: 10px 0;
    }

    .price {
        color: red;
        font-size: 18px;
    }
    .newThingImg{
        width: 20%;
        img {
        max-width: 100%;
        border: 1px solid rgb(0, 0, 0, .2);
        margin-right: 50px;
    }
    }

}
</style>