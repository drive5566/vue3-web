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
                    <RouterLink to="/products"><li>商品一覽</li></RouterLink>
                    <RouterLink to="/promotion/Promotions"><li>促銷活動</li></RouterLink>
                    <li>品牌專區</li>
                    <li>活動資訊</li>
                    <li>影片專區</li>
                    <li>釣魚小教室</li>
                    <li>釣場介紹</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header-wrap{
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 99;
}
.Bar-container {
    box-shadow: 0 10px 10px rgba(0, 0, 0, .2);
    background-color: #fff;


}

.Bar {
    max-width: 1270px;
    height: 100px;
    margin: 0 auto;
    margin-bottom: 15px;
    ul {
        display: flex;
        justify-content: space-between;

        li {
            width: 125px;
            height: 100px;
            padding: 5px;
            text-align: center;
            line-height: 100px;
            font-weight: 600;
            color: rgb(2, 2, 68);
            font-size: 16px;

            img {
                width: 90px;
                height: 90px;
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