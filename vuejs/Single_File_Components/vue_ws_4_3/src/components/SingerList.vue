<template>
    <h1 class="text-center">가수 목록</h1>
    <div class="solid-border">
        <SingerDetail/>
    </div>
</template>

<script setup>
import SingerDetail from '@/components/singers/SingerDetail.vue';
</script>

<style scoped>
.solid-border{
    border: 1px solid;
}
</style>