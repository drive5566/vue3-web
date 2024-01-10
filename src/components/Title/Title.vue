<script setup>
const props = defineProps(['title'])

</script>

<template>
    <div class="title-container">
        <h2>{{ title }}</h2>
        <span></span>
    </div>
</template>

<style lang="scss" scoped>
.title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 20px;
    max-width: 1270px;

    h2 {
        font-size: 26px;
        margin-right: 10px;
    }

    span {
        border-top: 1px solid #000;
        width: 75%;
        height: 1px;
    }
}
</style>