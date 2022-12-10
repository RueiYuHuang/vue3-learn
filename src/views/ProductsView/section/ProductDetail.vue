<script setup>
import { storeToRefs } from 'pinia'
import { useRoute } from "vue-router";
import { useProductStore } from '@/stores/product.js'
import { watch,onMounted } from "@vue/runtime-core";

const productStore = useProductStore()
const { fetchDataDetail } = productStore
const { dataDetail } = storeToRefs(productStore)

fetchDataDetail()
// const route = useRoute();
// console.log("pudid:",route.query.pudid);
// onMounted(()=>{
//     getDataDetail(route)
// })


</script>

<template>
    <div>
        ProductDetail
        {{dataDetail}}
    </div>
</template>

<style lang="scss" scoped>

</style>