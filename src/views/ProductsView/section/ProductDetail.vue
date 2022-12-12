<script setup>
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/useProductStore.js'
import { useCartStore } from '@/stores/useCartStore.js'

const productStore = useProductStore()
const { fetchDataDetail } = productStore
const { dataDetail } = storeToRefs(productStore)

const cartStore = useCartStore()
const { cartToggle, getCart, pushProduct } = cartStore
const { cartBoolean } = storeToRefs(cartStore)

fetchDataDetail()

</script>

<template>
    <div>
        ProductDetail
        <br/>
        {{dataDetail}}
        <br/>
        <button @click="pushProduct(dataDetail)">Add to Cart</button>
    </div>
</template>

<style lang="scss" scoped>

</style>