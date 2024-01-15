<script setup> 
import Title from '@/components/Title/Title.vue'

const title = '品牌專區 BRAND'

const brands =[
    {
        img:'/public/img/S10001.jpg',
        id:0,
        brand:'HR'
    },    
    {
        img:'/public/img/S00116.jpg',
        id:1,
        brand:'SHIMANO'

    },    
    {
        img:'/public/img/S00019.jpg',
        id:2,
        brand:'DAIWA'

    },
    {
        img:'/public/img/S00013.jpg',
        id:3,
        brand:'GAMAKATSU'

    },
    {
        img:'/public/img/S00188.jpg',
        id:4,
        brand:'JACKALL'

    },    
    {
        img:'/public/img/S00155.jpg',
        id:5,
        brand:'MEGABASS'

    },    
    {
        img:'/public/img/S00162.jpg',
        id:6,
        brand:'OSP'

    },
    {
        img:'/public/img/S00192.jpg',
        id:7,
        brand:'EVERGREEN'

    },

]

</script>

<template>
    <div class="wrap">

        <Title :title="title"/>

        <div class="main-container" >
            <ul>
                <li v-for="brand of brands" :key="brand.id">
                    <RouterLink :to="{name:'products',query: { id: brand.brand }}">
                        <img :src="brand.img" alt="">
                    </RouterLink>
                </li>
            </ul>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.wrap{
    max-width: 1270px;
    margin: 0 auto;
    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        li{
            width: 25%;
            img{
                max-width: 100%;
                width: 200px;
            }
        }

    }
    .main-container{
        width: 1000px;
        margin: 0 auto;
    }
}
</style>