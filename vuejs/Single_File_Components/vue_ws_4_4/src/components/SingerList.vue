<template>
    <h1 class="text-center color-orange">가수 목록</h1>
    <div class="card-container text-center">
        <div class="card solid-border" v-for="_ in singerCount" :key="_">
            <SingerDetail/>
        </div>
    </div>
</template>

<script setup>
import SingerDetail from '@/components/singers/SingerDetail.vue';

const singerCount = 4;
</script>

<style scoped>
.color-orange{
    color:orange;
}

.solid-border{
    border: 1px solid;
}
.card{
    display: inline-block;
    width: 40%;
    margin: 20px;
    padding : 20px;
    box-sizing: border-box;
}
</style>