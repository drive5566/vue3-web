<script setup>
import { ref  } from 'vue'
import { useRoute  } from 'vue-router'

const props = defineProps(['promotionItems'])

const route = useRoute()
const messageId = route.query.id
const itemDetails = props.promotionItems[messageId]
console.log(messageId);


</script>

<template>

    <h3>{{ itemDetails.title }}</h3>
    <div @click="updateProps">1231321321</div>
</template>