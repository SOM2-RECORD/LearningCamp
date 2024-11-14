<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    businessCard:{
        name : String,
        title : String
    }
})
</script>

<template>
    <h3>이름 : {{businessCard.name}}</h3>
    <p>직함 : {{businessCard.title}}</p>
</template>