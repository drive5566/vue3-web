<script setup>
import { ref } from 'vue';
import { getImagePath } from "@/Mixins/getImagePath.js";

const promotionItems = ref(
    [
        {
            img: '20221215104518565.jpg',
            title:'HR HTT-2701 輕量摺疊桌',
            date:'2024.01.01',
            Classification:'新品介紹',
            id: '0',
            text:'HEARTY RISE HR HTT-2701 輕量摺疊桌,,桌面尺寸：60 x 40 cm,桌面高度：39 cm,展開尺寸：60 x 40 x 39 cm,收納尺寸：42 x 12 x 10 cm (收到收納袋內),重量：760 g,承重：約 30 kg,顏色：黑色,材質：桌面、置物籃 - 高密度尼龍布料搭配尼龍網、腳架 - 鋁管7075航太鋁合金'  
        },
        {
            img: '20221215103314901.jpg',
            title:'HR HR-9004 冰絲涼感抗UV 防曬外套',
            date:'2024.01.01',
            Classification:'新品介紹',
            id: '1',
            text:'HEARTY RISE HR-9004 冰絲涼感抗UV 防曬外套,,· 採用抗UV涼感纖維製造，有效抵擋紫外線,· 快速吸濕排汗，炎熱夏天也能感覺非常舒適,· 高彈力伸縮性材質，舒適又服貼,· 拉鍊擋布，防止拉鍊與肌膚摩擦,· 半掌式袖口 + 露指洞設計'  

        },
        {
            img: '20221215103708064.jpg',
            title:'HR VALLEY HUNTER 溪谷獵人 SPOON',
            date:'2024.01.01',
            Classification:'新品介紹',
            id: '2',
            text:'HEARTY RISE VALLEY HUNTER 溪谷獵人 SPOON VHF 寬版湯匙亮片,,寬版型態樣式，落水後漂落時間更長，增加泳層停滯時間，擺動幅度更寬,能在魚追咬時增加追餌攻擊性，尤其在淺水域效果更能體現，溪流卷仔、馬口、鱒魚或是曲腰都能有極佳的誘釣效果'  

        },
        {
            img: '20221215101949385.jpg',
            title:'FEV SQUIDER 透抽人 手持透抽竿',
            date:'2024.01.01',
            Classification:'新品介紹',
            id: '3',
            text:'FEV SQUIDER 透抽人 手持透抽竿,,全新的【SQUIDER】系列，專為透抽泥棒釣法所設計的船釣手持透抽竿。,【強韌】竿身採用高密度碳纖維製成，完美的調性大大降低透抽的脫鈎率。,【敏感度】竿尾採用實心碳纖維素材，連觸鬚觸碰的微小動作都能感應的到。,【防纏】槍柄款釣竿，導環採用旋轉式設計，可以避免因為操作晃餌，所造成的導環纏線情形發生。,【輕量化】無論是操竿及晃餌等動作，都能輕鬆完成，享受釣透抽所帶來的樂趣。'

        },
        {
            img: '20221215100616355.jpg',
            title:'HR 扣環式 / 別針式 伸縮扣',
            date:'2024.12.21',
            Classification:'新品介紹',
            id: '4',
            text:'HEARTY RISE HR HPI-2701 扣環式 / HPI-2702 別針式 伸縮扣,'  

        },
        {
            img: '20221215095142670.jpg',
            title:'HR PS-2701 彩鈦 PE線剪刀',
            date:'2023.15.15',
            Classification:'新品介紹',
            id: '5',
            text:'HEARTY RISE HR PS-2701 彩鈦 PE線剪刀,, ▪ 鋸齒狀刀鋒，可以輕鬆剪斷PE線,▪ 貼心扣環設計，可吊掛失手繩或佩掛於顯眼處,▪ 高強度鋼材鋁合金製成,▪ 刀刃處質感彩鈦設計'  

        },
    ]
)


</script>

<template>
    <RouterView :promotionItems="promotionItems" />

    <div class="main-continer" v-show="$route.path === '/promotion/introduce'">
        <div class="card-container" v-for="promotionItem of promotionItems" :key="promotionItem.id">

            <RouterLink :to="{name:'introduceMessageDetails',query: { id: promotionItem.id }}">
                <img :src="getImagePath(promotionItem.img)" :alt="promotionItem.title">
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