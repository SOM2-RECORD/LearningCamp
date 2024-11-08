<template>
    <div class="card" v-for="child in children" :key="child.name">
        <h3>자식 페이지입니다.</h3>
        <p>이름 : {{ child.name }}</p>
        <p>나이 : {{ child.age }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

// props 정의
const props = defineProps({
  children: {
    type: Array,
    // required : true
  }
})
</script>