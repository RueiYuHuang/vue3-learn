<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { RouterLink, RouterView } from 'vue-router';
import HeaderVue from './components/Header/Header.vue';
import FooterVue from './components/Footer.vue';
// import LogInSignUpVue from './components/LogInSignUp/LogInSignUp.vue';
</script>

<template>
    <HeaderVue />
    <!-- <LogInSignUpVue /> -->
    <div class="main">
      <RouterView />
    </div>
    
    <FooterVue />
</template>

<style scoped>
.main {
  min-height: calc(100vh - 17rem);
}
</style>
