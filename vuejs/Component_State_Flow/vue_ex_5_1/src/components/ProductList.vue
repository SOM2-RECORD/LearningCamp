<template>
    <li v-for="product in products" :key="product.id">
        {{product.name}} - {{ product.price }}원
    </li>
</template>

<script setup>
import { defineProps } from 'vue'

// props 정의
const props = defineProps({
  products: {
    type: Array,
    required: true
  }
})
</script>