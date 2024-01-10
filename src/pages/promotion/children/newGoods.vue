<script setup>
import { ref } from 'vue';
const promotionItems = ref(
    [
        {
            img: '/public/img/20230626150723520.jpg',
            title:'𝙉𝙀𝙒 𝘿𝘼𝙄𝙒𝘼 - 𝘕𝘌𝘖𝘚𝘛𝘈𝘎𝘌 𝘋𝘎',
            date:'2023.06.26',
            Classification:'新貨到',
            id: '0'
        },
        {
            img: '/public/img/20230519144159453.jpg',
            title:'𝙉𝙀𝙒 𝙈𝙀𝙂𝘼𝘽𝘼𝙎𝙎 - 𝘖𝘕𝘐𝘔𝘈𝘙𝘜',
            date:'2023.05.19',
            Classification:'新貨到',
            id: '1'
        },
        {
            img: '/public/img/20240103092926353.jpg',
            title:'𝙉𝙀𝙒 DAIWA 防曬部品合集',
            date:'2023.05.18',
            Classification:'新貨到',
            id: '2'
        },
        {
            img: '/public/img/20230323142440995.jpg',
            title:'𝙉𝙀𝙒 𝑲𝑨𝑻𝑺𝑼𝑰𝑪𝑯𝑰',
            date:'2024.01.01',
            Classification:'新貨到',
            id: '3'
        },
        {
            img: '/public/img/20230322143059857.jpg',
            title:'𝙃𝙊𝙏 磯鬥荒礁 [ 實戰磯釣鞋款 ] ',
            date:'2024.12.21',
            Classification:'新貨到',
            id: '4'
        },
        {
            img: '/public/img/20230317110605173.jpg',
            title:'𝙉𝙀𝙒 HR GB-22101 [低筒毛氈防滑釘鞋]',
            date:'2023.15.15',
            Classification:'新貨到',
            id: '5'
        },
    ]
)


</script>

<template>

    <RouterView  :promotionItems="promotionItems"/>

    <div class="main-continer" v-show="$route.path === '/promotion/newGoods'">
        <div class="card-container" v-for="promotionItem of promotionItems" :key="promotionItem.id">

            <RouterLink :to="{ name: 'newGoodsMessageDetails',query: { id: promotionItem.id }}">
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