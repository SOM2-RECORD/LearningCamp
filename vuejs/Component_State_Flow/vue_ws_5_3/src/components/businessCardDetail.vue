<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    businessCard:{
        id : Number,
        name : String,
        title : String
    }
})

const emit = defineEmits(['remove-card'])

const removeCard = function(cardId){
    emit('remove-card', cardId)
}

</script>


<template>
    <h3>이름 : {{businessCard.name}}</h3>
    <p>직함 : {{businessCard.title}}</p>
    <button @click="$emit('remove-card', businessCard.id)">명함 삭제</button>
</template>