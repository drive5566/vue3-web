<script setup>
import { useRoute  } from 'vue-router'
import { inject ,defineProps } from 'vue'
import { getImagePath } from "@/Mixins/getImagePath.js";



const props = defineProps(['items'])
const route = useRoute()
const productsId = route.query.id
const product = props.items[productsId]
console.log(product);

</script>

<template>

<div class="container">
    <div class="img-box">
        <img :src="getImagePath(product.img)" alt="">
    </div>
    <div class="text-container">

        <div class="textBox">
            <h3 class="title">{{ product.productName }}</h3>
            <p class="sold">已售出 {{ product.sold }}</p>
            <p class="price">NT. {{ product.price }}</p>
        </div>

        <div class="buyBox">
            <a class="car">加入購物車</a>
            <a class="buyNow">立即購買</a>
        </div>
    </div>
</div>

</template>

<style lang="scss" scoped>
.container{
    display: flex;
    justify-content: center;
    gap: 30px;
}
.img-box{
    img{
        max-width: 100%;
        width: 400px;
    }
}
.text-container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title{
        font-size: 20px;
        font-weight: 600;
    }
    p{
        margin: 10px 0;
    }
    .sold{
        font-size: 16px;
    }
    .price{
        font-weight: 700;
        color: #9f005d;
        font-size: 24px;
    }
    .buyBox{
        display: flex;
        flex-direction: column;
        gap: 10px;
        text-align: center;
        width: 300px;
        color: #fff;
        font-size: 16px;
        .car{
            background-color: #384e6c;
            padding: 10px 20px;
            border: 2px solid #000;
        }
        .buyNow{
            background-color: #008a8a;
            padding: 10px 20px;
            border: 2px solid #000;

        }
    }
}
</style>