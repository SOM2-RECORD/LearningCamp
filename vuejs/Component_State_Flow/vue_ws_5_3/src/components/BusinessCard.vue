<script setup>
import {ref} from 'vue'
import BusinessCardDetail from './businessCardDetail.vue';

let id = 0;

const businessCards = ref([
    {
        id : id++,
        name : "일론 머스크",
        title : "테슬라 테크노킹"
    },
    {
        id : id++,
        name : "래리 엘리슨",
        title : "오라클 창업주"
    },
    {
        id : id++,
        name : "빌 게이츠",
        title : "마이크로소프트 공동창업주"
    },
    {
        id : id++,
        name : "래리 페이지",
        title : "구글 공동창업주"
    },
    {
        id : id++,
        name : "세르게이브린",
        title : "구글 공동창업주"
    },
])

const removeCard = (cardId) => {
    businessCards.value = businessCards.value.filter(item => item.id !== cardId)
}

</script>

<template>
<div class="cardlist">
    <div class="card" 
        v-for="businessCard in businessCards" 
        :key="businessCard.id"
        >
        <BusinessCardDetail 
        :businessCard = "businessCard"
        @remove-card="removeCard"/>
    </div>
</div>
</template>
<style scoped>
.cardlist {
    text-align: center;
    min-height: 150px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.card{
    background-color: rgb(247, 247, 247);
    width: 35%;
    padding : 10px;
    margin: 10px 0;
    border: 1px solid gainsboro;
}
</style>