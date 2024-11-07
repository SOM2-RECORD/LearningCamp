<template>
    <h1>에스파(AESPA)</h1>
    <div>
        <img class="circle-image" src="@/assets/singer.jpg"/>
    </div>
    <p>카리나, 윈터, 지젤, 닝닝</p>
    <div class="card-album" v-for="_ in albumCount" :key="_">
        <SingerAlbum/>
    </div>
</template>

<script setup>
import SingerAlbum from '@/components/singers/SingerAlbum.vue';
const albumCount = 2;
</script>

<style scoped>
.circle-image{
    width : 200px;
    height : 200px;
    border-radius: 50%;
    object-fit: cover;
}
.card-album{
    display: inline-block;
    border : 1px solid gray;
    border-radius: 2ch;
    background-color: rgb(241, 239, 239);
    width:30%;
    margin: 10px;
    box-sizing: border-box;
}
</style>
<style>
/* h1{
    color: green;
} */
</style>