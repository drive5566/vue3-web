<script setup>
import { ref } from 'vue';
const promotionItems = ref(
    [
        {
            img: '/public/img/20240103093546115.jpg',
            title:'1.1 ~ 1.17 限量滿額折價券',
            date:'2024.01.01',
            Classification:'促銷活動',
            id: '0',
            text:'1月,限量滿額折價券,請先登入會員,才可領取折價券'
        },
        {
            img: '/public/img/20240103092445839.jpg',
            title:'2024 新年快樂！凡會員一月首購(不限金額)輸入vip99即送好禮 HR 伸縮扣一個！',
            date:'2024.01.01',
            Classification:'促銷活動',
            id: '1',
            text:'2024新年快樂,,會員一月首購(不限金額)即送首購好禮 HR 伸縮扣乙個！,活動內容：會員當月首購，不限結帳金額,結帳時在折扣碼欄位輸入「vip99」,即贈HR HPI-2701 伸縮扣一個！'


            

        },
        {
            img: '/public/img/20240103092926353.jpg',
            title:'2024_1月，消費單筆滿額贈好禮，白金海豚以上會員另有加碼贈！',
            date:'2024.01.01',
            Classification:'促銷活動',
            id: '2',
            text:'2024 Happy New Year 1月,,會員消費單筆滿額,送超實用禮物,白金海豚等級以上會員再加碼'

        },
        {
            img: '/public/img/20240102103040678.jpg',
            title:'2024 一月 單筆結帳滿額贈百元折價券',
            date:'2024.01.01',
            Classification:'促銷活動',
            id: '3',
            text:'活動時間：2024/01/01~01/31,,單筆結帳滿NT$1000元,隨貨附贈100元折價券'

        },
        {
            img: '/public/img/20231221134325112.jpg',
            title:'進口名牌釣具特價中 ~ 優惠7折起，數量有限售完為止！',
            date:'2024.12.21',
            Classification:'促銷活動',
            id: '4',
            text:'進口名牌釣具特價中❗,超多商品優惠7折起,數量有限,售完為止,一慢就沒啦~'

        },
        {
            img: '/public/img/20231215103929637.jpg',
            title:'HR 年終慶 品牌釣竿 4折起！',
            date:'2023.15.15',
            Classification:'促銷活動',
            id: '5',
            text:'Hearty Rise 品牌年終慶,超多款式釣竿,特價4折起'

        },
    ]
)


</script>

<template>
    <RouterView  :promotionItems="promotionItems"/>

    <div class="main-continer" v-show="$route.path === '/promotion/Promotions'">
        <div class="card-container" v-for="promotionItem of promotionItems" :key="promotionItem.id">

            <RouterLink :to="{ name: 'PromotionsMessageDetails',query: { id: promotionItem.id }}">
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