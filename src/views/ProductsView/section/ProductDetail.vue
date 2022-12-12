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
        ProductDetail<br/>
        {{dataDetail}}
        <p>商品ID:    {{dataDetail.id}}</p>
        <p>商品類別: {{dataDetail.class}}</p>
        <p>商品名稱: {{dataDetail.name}}</p>
        <p>商品價格: {{dataDetail.price}}</p>
        <br/>
        <button class="addbtn" @click="pushProduct(dataDetail)">ADD TO CART</button>
    </div>
</template>

<style lang="scss" scoped>

.addbtn {
    color: var(--main-font-color);
    background-color: var(--button-color);
    padding: 1rem;
    cursor: pointer;
    &:hover {
        color: var(--font-hover-color);
    }
}
</style>