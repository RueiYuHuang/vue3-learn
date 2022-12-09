<script setup>
import axios from "axios";
import { onMounted, reactive, ref, watch, watchEffect } from "@vue/runtime-core";
import { RouterLink, RouterView, useRoute } from "vue-router";
import { useFetchProduct } from '@/composables/useFetchProduct.js'

const { originalData, fliterData, errorMessage, getData } = useFetchProduct(); //讀取商品模組

onMounted(() => {
    getData()
});

//類別篩選功能
const route = useRoute();
watch(route, (newRoute) => {
    //axios 依類別抓取資料 *這裡測試直接用原資料篩選
    if(newRoute.query.class === undefined){
        //沒有class表示全部商品
        fliterData.value = originalData.value
    }else{
        //篩選商品
        fliterData.value = originalData.value.filter((data) => {
            return data.class === newRoute.query.class
        })
    } 
});

</script>

<template>
    <div class="container">
        <h2>PRODUCTS</h2> 
        <div class="grid">
            <div class="aside">
                <ul>
                    <li><RouterLink to="/products">ALL PRODUCTS</RouterLink></li>
                    <li><RouterLink to="/products?class=1">CLASS1</RouterLink></li>
                    <li><RouterLink to="/products?class=2">CLASS2</RouterLink></li>
                    <li><RouterLink to="/products?class=3">CLASS3</RouterLink></li>
                    <li><RouterLink to="/products?class=4">CLASS4</RouterLink></li>
                    <li><RouterLink to="/products?class=5">CLASS5</RouterLink></li>
                </ul>
            </div>
            <div  class="products">
                <!-- <div v-if="datas.length === 0">Loading</div> -->
                <div v-if="fliterData.length !== 0" >
                    <RouterView :datas="fliterData" />
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
    .grid-list {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media screen and (max-width: 576px) {
    //sm
}
</style>
