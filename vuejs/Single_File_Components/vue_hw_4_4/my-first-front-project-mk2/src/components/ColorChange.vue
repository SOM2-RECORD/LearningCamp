<template>
    <input v-model="color" type="text"/>
    <p :class="color">입력창에 올바른 색상 명을 입력하면 글자색이 바껴요.</p>
</template>

<script setup>
import { ref } from 'vue';
const color = ref('');
</script>

<style scoped>
.red{
    color:red;
}
.blue{
    color:blue;
}
.green{
    color:green;
}
</style>