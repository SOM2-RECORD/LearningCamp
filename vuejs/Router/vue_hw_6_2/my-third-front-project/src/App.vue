<script setup>
  import MainPage from '@/components/MainPage.vue';
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <MainPage/>
    <nav>
      <RouterLink :to="{name:'some'}">some</RouterLink>
      <span> | </span>
      <RouterLink :to="{name:'other'}">other</RouterLink>
    </nav>
  </header> 
  <RouterView/>
</template>
