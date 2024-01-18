<script setup>
import { computed, ref  } from 'vue'
import { useRoute  } from 'vue-router'
import { getImagePath } from "@/Mixins/getImagePath.js";


const props = defineProps(['promotionItems'])


const route = useRoute()
const messageId = route.query.id
const itemDetails = props.promotionItems[messageId]

const formattedText = computed(() =>{
    return itemDetails.text.replace(/,/g, '<br>');
})


</script>


<template>
<div class="wrap">
    <h3>{{ itemDetails.title }}</h3>
    <div class="container">
        <p class="Classification">{{ itemDetails.Classification }}</p>
        <p class="date">{{ itemDetails.date }}</p>
    </div>
    <img :src="getImagePath(itemDetails.img)" alt="">
    <p class="text" v-html="formattedText"></p>


</div>
</template>



<style lang="scss" scoped>
.wrap{
    max-width: 1270px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    .container{
        display: flex;
        margin: 30px 0;
        text-align: center;
        gap: 30px;
        .Classification{
            background-color: #6d6d6d;
            color: #fff;
            padding: 5px 10px;
            border: 1px solid;
            border-radius: 10px;
        }
        .date{
            font-size: 18px;
            line-height:30px ;
        }
    }
    img{
        max-width: 100%;
        width: 500px;
    }
    h3{
        color: #374e6d;
        font-size: 25px;
        font-weight: 600;
    }
    .text{
        font-size: 18px;
        margin: 30px 0;
        text-align: start;
        line-height: 30px;
    }
}


</style>