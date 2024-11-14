<template>
  <div>
    <h1>쇼핑 애플리케이션</h1>
    <ProductList :products="products" @add-to-cart="addToCart"/>
  </div>
  <div>
    <p v-if="cartItems.length > 0">
      총 가격 : {{cartTotal}}원
    </p>
  </div>
  <div>
    <Cart :cartItems="cartItems" @remove-from-cart="removeFromCart"/>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProductList from '@/components/ProductList.vue'
import Cart from '@/components/Cart.vue'

let id = 0

const products = ref([
  { id: id++, name: '사과', price: 1000 },
  { id: id++, name: '바나나',  price: 1500 },
  { id: id++, name: '딸기', price: 2000 },
  { id: id++, name: '포도', price: 3000 },
  { id: id++, name: '복숭아', price: 2000 },
  { id: id++, name: '수박', price: 5000 }
])

const cartItems = ref([])

const addToCart = (product) => {
  if (product && product.price !== undefined) {
    cartItems.value.push(product)
  }
}

const removeFromCart = (productId) => {
  cartItems.value = cartItems.value.filter(item => item.id !== productId)
}

const cartTotal = computed(() => {
  return cartItems.value.reduce((total, item) => {
    return item && item.price ? total + item.price : total
  }, 0)
})

</script>
