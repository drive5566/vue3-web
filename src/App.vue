<script setup>
import Home from './pages/Home/Home.vue'
import HeaderBar from '@/components/HeaderBar/HeaderBar.vue'
import Footer from '@/components/Footer/Footer.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <HeaderBar />
    <div class="wrap">
        <RouterView />
    </div>
    <Footer />
</template>


<style scoped>
.wrap{
    margin-top: 165px;

}
</style>
