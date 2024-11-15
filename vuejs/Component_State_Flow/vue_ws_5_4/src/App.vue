<script setup>

import BusinessCard from './components/BusinessCard.vue';

</script>

<template>
  <header>
    <div>
      <h1>명함 관리 페이지</h1>
    </div>
  </header>
  <main>
    <p>명함을 관리하는 페이지입니다. 여기에 명함 목록이 표시됩니다.</p>
  </main>

  <article>
    <h1>보유 명함 목록</h1>
    <BusinessCard/>
  </article>

  <footer>
    ⓒ 2024 My Business Cards
  </footer>


</template>

<style>

header {
    margin: 0 auto;
    text-align: center;
    width: 350px;
    padding: 20px;
    color: white;
    background-color: rgb(68, 122, 240);
}

main {
    text-align: center;
}

article {
    text-align: center;
}

footer {
    padding: 20px;
    font-weight: 700;
    text-align: center;
    background-color: rgb(241, 239, 239);
}
</style>
