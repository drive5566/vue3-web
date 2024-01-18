<script setup>
import Title from "@/components/Title/Title.vue";
import { getImagePath } from "@/Mixins/getImagePath.js";


const title = '影片專區 VIDEOS'

const videoItems = [
    {
        img:'20230927094457928.jpg',
        src:'https://www.youtube.com/embed/UrhRY9ZksEE?si=yvi6WyjR8uJWW1Au',
        id:0,
        date:'2023-09-27',
        title:'HR 溪谷獵人 限定版 實釣影片'
    },
    {
        img:'20230927095332952.jpg',
        src:'https://www.youtube.com/embed/zI1cyQYdYtc?si=X1pqab-hzkgsEYvv',
        id:1,
        date:'2023-09-27',
        title:'2023 TOYO 新品 JIN BATSU'
    },
    {
        img:'20230927094819407.jpg',
        src:'https://www.youtube.com/embed/XV7Lk8MrQu8?si=ysqbxBGmOT7hpid-',
        id:2,
        date:'2023-08-08',
        title:'HR 溪谷獵人 強悍直柄竿'

    },
    {
        img:'20230927095040915.jpg',
        src:'https://www.youtube.com/embed/jUErNS3nY7c?si=fiwE4L8wwdoZd0Dp',
        id:3,
        date:'2023-03-31',
        title:'2023 HR SKYWALKER'

    },
    {
        img:'20221014140849558.jpg',
        src:'https://www.youtube.com/embed/1_MkaeDm1VY?si=wz1QyA1LJr-oNc6Y',
        id:4,
        date:'2023-20-14',
        title:'【SHIMANO】BEAST MASTER'

    },
    {
        img:'20220922133450574.jpg',
        src:'https://www.youtube.com/embed/eN1l4Rd-oKE?si=3VsuYeU1D9_uDjg-',
        id:5,
        date:'2023-09-22',
        title:'【SHIMANO】絶景に出会う'

    },
]
</script>


<template>
    <div class="wrap">
        <Title :title="title"></Title>

        <div class="main-container" >
            <ul>
                <li v-for="videoItem of videoItems" :key="videoItem.id">
                    <img :src="getImagePath(videoItem.img)" alt="">
                    <h3>{{ videoItem.title }}</h3>
                    <p>{{ videoItem.date }}</p>
                </li>
            </ul>

        </div>

        <!-- <iframe width="350" height="215" src="https://www.youtube.com/embed/zI1cyQYdYtc?si=X1pqab-hzkgsEYvv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
    </div>
</template>

<style lang="scss" scoped>
.wrap{
    max-width: 1270px;
    margin: 0 auto;
    ul{
        display: flex;
        gap: 30px;
        flex-wrap: wrap;
        justify-content: space-between;

        li{
            width: 25%;
            text-align: left ;

            img{
                max-width: 100%;
                width: 400px;
            }
            h3{
                font-weight: 600;
                font-size: 16px;
                margin: 10px 0;
            }
        }
    }
}
</style>