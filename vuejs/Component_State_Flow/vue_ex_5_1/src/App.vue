<template>
  <div>
    <h1>쇼핑 애플리케이션</h1>
    <ul>
      <ParentChild product-list="productList" />
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let id = 0
const products = ref([
  { id: id++, name: '사과', price: 1000 },
  { id: id++, name: '바나나', price: 1500 },
  { id: id++, name: '딸기', price: 2000 },
  { id: id++, name: '포도', price: 3000 },
  { id: id++, name: '복숭아', price: 2000 },
  { id: id++, name: '수박', price: 5000 }
])

defineProps(productList({id : Number, name : String, price : Number}))
</script>
