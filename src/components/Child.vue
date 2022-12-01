<script setup>
import { ref } from "@vue/reactivity";

var toggle = ref(true)
const changeColor = () => {
    // document.documentElement.style.setProperty('--your-variable', '#YOURCOLOR');
    var root = document.querySelector(":root")
    console.log(toggle.value);
    if(toggle.value === true){
        root.style.setProperty('--font-color', 'white');
        root.style.setProperty('--background-color', 'black');
        toggle.value = false
    }else{
        root.style.setProperty('--font-color', 'black');
        root.style.setProperty('--background-color', 'white');
        toggle.value = true
    }
    // root.remove();
}
</script>

<template>
<div class="block">
    <div class="item1">1</div>
    <div class="item1">2</div>
    <div class="item1">3</div>
    <div class="item1">4</div>
    <div class="item1">5</div>
    <p>TEST</p>
    <button @click="changeColor">換色</button>
    
</div>
</template>

<style lang="scss" scoped>

.block {
    // transition: 5s;
    width: 500px;
    background-color:var(--background-color);
    .item1 {
    color: var(--font-color);
    // transition: p 5s;

;
    }
}

</style>