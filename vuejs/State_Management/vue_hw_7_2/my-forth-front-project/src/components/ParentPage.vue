<template>
    <div class="card-parent">
        <h2>부모 컴포넌트</h2>
        <!-- <p>{{ userFamilyStore.father }}</p>
        <p>{{ use }}</p> -->
        <ChildPage/>
    </div>
</template>
<script setup>
import ChildPage from '@/components/ChildPage.vue';

</script>

<style>
.card-parent{
    text-align: center;
    padding : 10px;
    margin: 20px;
    background-color: rgb(247, 247, 247);
}
</style>