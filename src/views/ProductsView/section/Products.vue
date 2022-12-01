<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { onMounted, reactive, watch } from "@vue/runtime-core";

const { datas } = defineProps({datas:{}})
console.log(datas);
</script>

<template>
    <div>
        <div class="grid-list">
            <div class="card" v-for="(data, index) in datas" :key="data.id">
                <div class="card__img">
                    <img class="" src="" alt="">
                </div>
                <p>{{ data.name }}</p>
                <p>price${{ data.price }}</p>
                <RouterLink :to="{ path: '/products/detail', query: { pudid: data.id } }">DETAIL</RouterLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .grid-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    // grid-auto-rows: 15rem;
    gap: 1.5rem;
    .card {
        box-sizing: border-box;
        width: 100%;
        aspect-ratio: 4 / 5;
        // height: 100%;
        background-color: rgb(255, 255, 255);
        text-align: center;
        padding: 1rem;
        &__img {
            background-color: gray;
            width: 100%;
            height: 50%;
            object-fit: contain;
            
        }
    }
}
@media screen and (max-width: 768px) {
    //md
    .grid-list {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>