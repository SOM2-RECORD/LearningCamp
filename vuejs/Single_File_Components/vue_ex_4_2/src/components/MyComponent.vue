<template>
  <div>
    <header class="text-center bg-success text-white py-3 fixed-top">
      <h1>My Gallery</h1>
    </header>

    <main class="container mt-5 pt-5">
      <div class="row">
        <div v-for="(item, index) in numberOfItems" :key="index" class="col-12 col-sm-6 col-md-4 mb-4">
          <div class="card h-100">
            <img src="@/assets/sample.png" class="card-img-top"/>
            <div class="card-body">
              <h5 class="card-title">Card</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
  const numberOfItems = 4;
</script>

<style scoped>
  header {
    width: 100%;
    text-align: center;
  }
  main {
    margin-top: 100px; 
  }
</style>
