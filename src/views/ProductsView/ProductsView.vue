<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <div class="container">
        PRODUCTS
        <RouterLink to="products/detail">detail</RouterLink>
        <RouterView />
    </div>
</template>

<style lang="scss" scoped>

</style>