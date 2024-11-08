<template>
    <h1>UserProfile</h1>
    <h3>Username : {{ username }}</h3>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'


const route = useRoute()
const username = ref(route.params.username)
</script>