<template>
    <div v-if="cartItems.length > 0">
        <h1>장바구니</h1>
        <ul>
            <li v-for="item in cartItems" :key="item.id">
                {{ item.name }} - {{ item.price }}원
                <button @click="$emit('remove-from-cart', item.id)">삭제</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    cartItems : {
        id : Number,
        name : String,
        price : Number
    }
})

const emit = defineEmits(['remove-from-cart'])

const removeFromCart = function(productId){
    emit('remove-from-cart', productId)
}

</script>