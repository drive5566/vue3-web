<script setup>
import Home from './pages/Home/Home.vue'
import HeaderBar from '@/components/HeaderBar/HeaderBar.vue'
import Footer from '@/components/Footer/Footer.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
        <HeaderBar />
        
        <RouterView />
        
        <Footer />

</template>


<style scoped>

</style>
