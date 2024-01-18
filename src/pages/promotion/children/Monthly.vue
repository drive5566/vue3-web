<script setup>
import { ref } from 'vue';
import { getImagePath } from "@/Mixins/getImagePath.js";

const promotionItem = ref(
    [
        {
            img: '20230414140705309.jpg',
            title:'202304 花月訪卷',
            date:'2024.01.01',
            Classification:'月刊',
            id: '0'
        },
        {
            img: '20230317171237155.jpg',
            title:'202303 Z字流 PENCIL',
            date:'2024.01.01',
            Classification:'月刊',
            id: '1'
        },
        {
            img: '20230210103748701.jpg',
            title:'202302 初階管池',
            date:'2024.01.01',
            Classification:'月刊',
            id: '2'
        },
        {
            img: '20230110092242458.jpg',
            title:'202301 探究 溪谷獵人',
            date:'2024.01.01',
            Classification:'月刊',
            id: '3'
        },
        {
            img: '20230110093759618.jpg',
            title:'202212 冬日戀鯛',
            date:'2024.12.21',
            Classification:'月刊',
            id: '4'
        },
        {
            img: '20221124114718579.jpg',
            title:'202211 冬起',
            date:'2023.15.15',
            Classification:'月刊',
            id: '5'
        },
    ]
)


</script>

<template>
    <div class="main-continer" >
        <div class="card-container" v-for="promotionItems of promotionItem" :key="promotionItems.id">
            <a :href="getImagePath(promotionItems.img)" target="_blank">
                <img :src="getImagePath(promotionItems.img)" :alt="promotionItems.title">
            </a>
            <div class="card-text">
                <p>{{promotionItems.Classification}}</p>
                <span>{{ promotionItems.date }}</span>
            </div>
            <h3>{{ promotionItems.title }}</h3>
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