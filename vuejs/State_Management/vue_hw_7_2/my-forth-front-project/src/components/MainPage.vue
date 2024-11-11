<template>
    <h1>pinia 연습하기</h1>
    <ParentPage
        v-for="(family, index) in familyInfos" 
        :key="index" 
        :family="family"
    />
</template>

<script setup>
import { userFamilyStore } from '@/stores/family';
import ParentPage from '@/components/ParentPage.vue';

const store = userFamilyStore()
const familyInfos = store.familyInfos

const props = defineProps({
    familyName : String,
    father : String,
    mother : String,
    children : Array
})

</script>

<style>
.text-center{
    text-align: center;
}
</style>