<script setup>

</script>

<template>
    <div class="footer-container">
        <div class="footer-list">
            <img src="/public/img/qr.ioi.tw.png" alt="">
            <ul>
                <li>公司簡介</li>
                <li>人力招募</li>
                <li>畢業合作</li>
            </ul>
            <ul>
                <li>會員權益</li>
                <li>購物須知</li>
                <li>門市資訊</li>
            </ul>
            <ul>
                <li>電話:(02)2222-5555</li>
                <li>週一至週五am9:00~18:00</li>
                <li>例假日無提供電話客服</li>
            </ul>
        </div>

        <div class="footer-text">
            <p>Copyright © ETUOH All Rights Reserved Privacy policyTerms and conditions</p>
            <p>企業股份有限公司 統一編號:22722222</p>

        </div>

    </div>
</template>

<style lang="scss" scoped>
.footer-container {
    width: 100%;
    background-color: rgb(156, 156, 156);
    color: #fff;
    font-size: 14px;
    padding: 20px 0;
    margin-top: 10%;

    .footer-list {
        margin: 0 auto;
        max-width: 1024px;
        display: flex;
        justify-content: space-between;
        img{
            width: 100px;
        }

    }

    li {
        margin: 10px;
        &:hover{
            text-decoration: underline;
            cursor: pointer;
        }

    }

    .footer-text {
        margin-top: 20px;
        text-align: center;
        font-size: 8px;
    }

}
</style>