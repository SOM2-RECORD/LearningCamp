<template>
  <ul>
    <ProductListItem 
      v-for="product in products" 
      :key="product.id" 
      :product="product"
      @add-to-cart="handleAddToCart"
    />
  </ul>
</template>

<script setup>
import ProductListItem from '@/components/ProductListItem.vue'

const props = defineProps({
  products: Array
})

const emit = defineEmits(['add-to-cart'])

const handleAddToCart = (product) => {
  emit('add-to-cart', product)
}
</script>
