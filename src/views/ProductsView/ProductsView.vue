<script setup>
import axios from "axios";
import { onMounted, reactive, ref, watch, watchEffect } from "@vue/runtime-core";
import { RouterLink, RouterView, useRoute } from "vue-router";
import { storeToRefs } from 'pinia'
// import { useFetchProduct } from '@/composables/useFetchProduct.js'
import { useProductStore } from '@/stores/useProductStore.js'

const productStore = useProductStore()
const { fetchData } = productStore
const { datas } = storeToRefs(productStore)

fetchData()


</script>

<template>
    <div class="container">
        <h2>PRODUCTS</h2> 
        <div class="grid">
            <div class="aside">
                <ul>
                    <li><RouterLink class="link" to="/products">ALL PRODUCTS</RouterLink></li>
                    <li><RouterLink class="link" to="/products?class=1">CLASS1</RouterLink></li>
                    <li><RouterLink class="link" to="/products?class=2">CLASS2</RouterLink></li>
                    <li><RouterLink class="link" to="/products?class=3">CLASS3</RouterLink></li>
                    <li><RouterLink class="link" to="/products?class=4">CLASS4</RouterLink></li>
                    <li><RouterLink class="link" to="/products?class=5">CLASS5</RouterLink></li>
                </ul>
            </div>
            <div  class="products">
                <!-- <div v-if="datas.length === 0">Loading</div> -->
                <div v-if="datas.length !== 0" >
                    <RouterView/>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.grid {
    display: grid;
    grid-template-columns: 15rem 1fr;
    .aside {
        background-color:var(--main-color);
        padding: 1.5rem;
        li {
            margin: 1rem 0;
        }
    }
    .products {
        padding: 1rem;
        border: 2px solid var(--main-color) ;
    }

}
@media screen and (max-width: 768px) {
    //md
    .grid {
        grid-template-columns: 10rem 1fr;
        li {
            font-size: 1.4rem;
        }
    }
    .grid-list {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media screen and (max-width: 576px) {
    //sm
}
</style>
