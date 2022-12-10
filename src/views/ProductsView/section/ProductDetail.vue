<script setup>
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/useProductStore.js'

const productStore = useProductStore()
const { fetchDataDetail } = productStore
const { dataDetail } = storeToRefs(productStore)

fetchDataDetail()

</script>

<template>
    <div>
        ProductDetail
        {{dataDetail}}
    </div>
</template>

<style lang="scss" scoped>

</style>