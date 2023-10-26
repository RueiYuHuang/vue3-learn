<script setup>
import { ref } from 'vue';
// const { count, test } = defineProps(['count', 'test'])
const { count, test } = defineProps({
    count: { 
        type: Number,
        default: 100 
        },
    test: Function
})
const emit = defineEmits(['addCount'])
const inputCount = ref(1)

</script>
<template>
    <br>
    {{ count }}
    <br>
    <input v-model="inputCount" type="number">
    <button class="btn" @click="() => {emit('addCount', inputCount)}">
        add
    </button>
    
    <button class="btn" @click="test">
        add2
    </button>
</template>
<style scoped>
.btn {
    margin: .5rem;
    padding: .5rem 1.5rem;
    background-color: white;
}
</style>