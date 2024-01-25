<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
    <div class="header-wrap">
        <div class="user-bar-container">
            <div class="user-bar">
                <ul>
                    <li>公司簡介</li><span>|</span>
                    <li>購物須知</li><span>|</span>
                    <li>門市資訊</li><span>|</span>
                    <li>會員中心</li><span>|</span>
                    <li>購物車</li>
                </ul>
            </div>

        </div>
        <div class="Bar-container">
            <div class="Bar">
                <ul>
                    <RouterLink to="/">
                        <li><a href="">釣具<img
                                src="/public/img/pngtree-fishing-logo-isolated-on-white-vector-illustration-with-water-color-on-image_214287.jpg"
                                alt="又釣到了釣具"></a></li>
                    </RouterLink>

                    <RouterLink to="/products">
                        <li>
                            <p class="subtitle">PRODUCTS</p>
                            <p>商品一覽</p> 
                        </li>
                    </RouterLink>

                    <RouterLink to="/promotion/Promotions">
                        <li>
                            <p class="subtitle">PROMOTION</p>
                            <p>促銷活動</p>
                        </li>
                    </RouterLink>

                    <RouterLink to="/brandZone">
                        <li>
                            <p class="subtitle">BRAND</p>
                            <p>品牌專區</p>
                        </li>
                    </RouterLink>

                    <RouterLink to="/video">
                        <li>
                            <p class="subtitle">VIDEO</p>
                            <p>影片專區</p>
                        </li>
                    </RouterLink>


                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header-wrap{
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 99;
}
.Bar-container {
    box-shadow: 0 10px 10px rgba(0, 0, 0, .2);
    background-color: #fff;


}

.Bar {
    max-width: 1270px;
    margin: 0 auto;
    margin-bottom: 15px;
    ul {
        display: flex;
        justify-content: space-between;
        width: 800px;
        margin: 0 auto;
        align-items: center;

        li {
            display: flex;
            flex-direction: column;
            font-weight: 500;
            color: rgb(2, 2, 68);
            font-size: 16px;
            align-items: center;
            &:hover{
                color: rgb(15, 154, 178);
            }

            .subtitle{
                font-size: 10px;
            }

            img {
                width: 100px;
            }
        }
    }
}

a {
    font-size: 0;

    img {
        max-width: 100%;
    }
}

.user-bar-container {
    background-color: rgb(77, 91, 130);

}

.user-bar {
    max-width: 1024px;
    height: 50px;
    margin: 0 auto;

    ul {
        display: flex;
        justify-content: end;
        line-height: 50px;
    }

    li {
        padding: 0 10px;
        color: #fff;
    }

    span {
        color: #fff;
    }
}
</style>