<script setup>
import { ref } from 'vue';
const promotionItems = ref(
    [
        {
            img: '/public/img/20221215104518565.jpg',
            title:'HR HTT-2701 輕量摺疊桌',
            date:'2024.01.01',
            Classification:'新品介紹',
            id: '0'  
        },
        {
            img: '/public/img/20221215103314901.jpg',
            title:'HR HR-9004 冰絲涼感抗UV 防曬外套',
            date:'2024.01.01',
            Classification:'新品介紹',
            id: '1'
        },
        {
            img: '/public/img/20221215103708064.jpg',
            title:'HR VALLEY HUNTER 溪谷獵人 SPOON',
            date:'2024.01.01',
            Classification:'新品介紹',
            id: '2'
        },
        {
            img: '/public/img/20221215101949385.jpg',
            title:'FEV SQUIDER 透抽人 手持透抽竿',
            date:'2024.01.01',
            Classification:'新品介紹',
            id: '3'
        },
        {
            img: '/public/img/20221215100616355.jpg',
            title:'HR 扣環式 / 別針式 伸縮扣',
            date:'2024.12.21',
            Classification:'新品介紹',
            id: '4'
        },
        {
            img: '/public/img/20221215095142670.jpg',
            title:'HR PS-2701 彩鈦 PE線剪刀',
            date:'2023.15.15',
            Classification:'新品介紹',
            id: '5'
        },
    ]
)


</script>

<template>
    <RouterView :promotionItems="promotionItems" />

    <div class="main-continer" v-show="$route.path === '/promotion/introduce'">
        <div class="card-container" v-for="promotionItem of promotionItems" :key="promotionItem.id">

            <RouterLink :to="{name:'introduceMessageDetails',query: { id: promotionItem.id }}">
                <img :src="promotionItem.img" :alt="promotionItem.title">
            </RouterLink>

            <div class="card-text">
                <p>{{promotionItem.Classification}}</p>
                <span>{{ promotionItem.date }}</span>
            </div>

            <h3>{{ promotionItem.title }}</h3>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.main-continer{
    max-width: 1270px;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
    .card-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: 30%;
        margin-top: 20px;
        padding: 30px;
        margin-right: auto;
    }
    .card-text{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 50px;
        p{
            border: 1px solid;
            border-radius: 10px;
            background-color: rgb(119, 119, 119);
            color: #fff;
            padding: 5px 10px;
        }
    }
    img{
        max-width: 100%;
        width: 300px;
        margin: 0 auto;
    }
    h3{
        overflow: hidden;
        color: #394e6d;
        font-size: 18px;
    }
}

</style>