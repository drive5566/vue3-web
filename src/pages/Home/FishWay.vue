<script setup>
import Title from '@/components/Title/Title.vue'
const title = '釣法 FISHING METHOD'


</script>

<template>
    <div class="topic-wrap">
        <Title :title="title" />


        <div class="fishway-container">
            <ul>
                <li>海水路亞<img src="/public/img/06.jpg" alt="海水路亞"></li>
                <li>淡水路亞<img src="/public/img/00.jpg" alt="海水路亞"></li>
                <li>磯釣<img src="/public/img/02.jpg" alt="海水路亞"></li>
                <li>船釣路亞<img src="/public/img/01.jpg" alt="海水路亞"></li>
            </ul>
        </div>
        <div class="fishway-container">
            <ul>
                <li>船釣正餌<img src="/public/img/12.jpg" alt="海水路亞"></li>
                <li>遠投<img src="/public/img/04.jpg" alt="海水路亞"></li>
                <li>池溪<img src="/public/img/05.jpg" alt="海水路亞"></li>
                <li>蝦<img src="/public/img/07.jpg" alt="海水路亞"></li>
            </ul>
        </div>
        <div class="fishway-container">
            <ul>
                <li>穿著品<img src="/public/img/08.jpg" alt="海水路亞"></li>
                <li>綜合品<img src="/public/img/09.jpg" alt="海水路亞"></li>
                <li>露營旅行<img src="/public/img/10.jpg" alt="海水路亞"></li>
                <li>特價出清<img src="/public/img/11.jpg" alt="海水路亞"></li>
            </ul>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.topic-wrap {
    width: 100%;
    background-color: rgba(216, 216, 216, 0.2);
    padding: 10px 0;

    .topic {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        padding: 20px;

        h2 {
            font-size: 26px;
            margin-right: 10px;
        }

        span {
            border-top: 1px solid #000;
            width: 65%;
            height: 1px;
        }
    }
}

.fishway-container {
    max-width: 1270px;
    margin: 0 auto;
    margin-bottom: 20px;

    ul {
        display: flex;
        justify-content: space-around;
        text-align: center;

        li {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 20%;
            border: 1px solid;
            padding: 20px;
            border-radius: 15px;
            background-color: #fff;
            font-size: 16px;

            img {
                max-width: 100%;
                width: 60px;
            }
        }
    }

}
</style>