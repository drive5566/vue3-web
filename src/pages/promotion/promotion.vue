<script setup>
// provide 和 inject 跨級傳值
// const promotionObject = {
//   promotionItems,
// };
</script>

<template>
    <div class="wrap">
        <div class="bar-container">
        <ul>
            <RouterLink :to="{name:'Monthly'}" >
                <li >
                    <a>月刊</a>
                </li>
            </RouterLink>

            <RouterLink :to="{name:'Promotions'}">
                <li >
                    <a>促銷活動</a>
                </li>
            </RouterLink>

            <RouterLink :to="{name:'newGoods'}">
                <li >
                    <a>新貨到</a>
                </li>
            </RouterLink>

            <RouterLink :to="{name:'introduce'}">
                <li >
                    <a>新品介紹</a>
                </li>
            </RouterLink>



        </ul>
    </div>
    <RouterView />
    </div>


</template>

<style lang="scss" scoped>
.wrap{
    max-width: 1270px;
    margin: 0 auto;
}
.bar-container{
    ul{
        display: flex;
        justify-content: center;
        gap: 20px;
        li{
            text-align: center;
            width: 80px;
            font-size: 16px;
            border: 1px solid rgb(77, 91, 130);
            padding: 5px;
            border-radius: 10px;
            &:hover{
                    color: #FFF;
                    background-color: rgb(77, 91, 130);
                }


        }
    }
}

.router-link-exact-active{
    color: #FFF;
    background-color: rgb(77, 91, 130);
    border-radius: 10px;

}

</style>