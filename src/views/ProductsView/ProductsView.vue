<script setup>
import axios from "axios";
import { onMounted, reactive, watch } from "@vue/runtime-core";
import { RouterLink, RouterView, useRoute } from "vue-router";

// 測試用資料
const datas = reactive([
    {
        id: 1,
        name: "name1",
        price: "10",
        class: "1",
    },
    {
        id: 2,
        name: "name2",
        price: "20",
        class: "1",
    },
    {
        id: 3,
        name: "name3",
        price: "30",
        class: "5",
    },
    {
        id: 4,
        name: "name4",
        price: "40",
        class: "4",
    },
    {
        id: 5,
        name: "name5",
        price: "50",
        class: "2",
    },
    {
        id: 6,
        name: "name6",
        price: "60",
    },
    {
        id: 7,
        name: "name7",
        price: "70",
    },
    {
        id: 8,
        name: "name8",
        price: "80",
    },
    {
        id: 9,
        name: "name9",
        price: "90",
    },
    {
        id: 10,
        name: "name10",
        price: "100",
    },
    {
        id: 11,
        name: "name11",
        price: "110",
    },
    {
        id: 12,
        name: "name12",
        price: "120",
    },
    {
        id: 13,
        name: "name13",
        price: "130",
    },
]);
const route = useRoute();
onMounted(() => {
    //axios 抓取資料
    console.log("class:", route.query.class);
});
watch(route, (newRoute) => {
    console.log("class:", newRoute.query.class);
    //axios 依類別 抓取資料
});
</script>

<template>
    <div class="container">
        PRODUCTS
        <div class="grid">
            <div>
                <ul>
                    <li><RouterLink to="/products">ALL PRODUCTS</RouterLink></li>
                    <li><RouterLink to="/products?class=1">CLASS1</RouterLink></li>
                    <li><RouterLink to="/products?class=2">CLASS2</RouterLink></li>
                    <li><RouterLink to="/products?class=3">CLASS3</RouterLink></li>
                    <li><RouterLink to="/products?class=4">CLASS4</RouterLink></li>
                    <li><RouterLink to="/products?class=5">CLASS5</RouterLink></li>
                </ul>
            </div>
            <div>
                <RouterView :datas="datas" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.grid {
    display: grid;
    grid-template-columns: 15rem 1fr;
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
