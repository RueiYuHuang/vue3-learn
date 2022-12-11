import axios from "axios";
import { useRoute } from "vue-router";
import { defineStore, storeToRefs } from 'pinia'
import { ref, watch, onMounted } from "@vue/runtime-core";

export const useHeaderStore = defineStore( "headerStore", () => {
    
    var toggle = ref(false)
    const logInSignUpToggle = () => {
        toggle.value = !toggle.value
    }
    
    return { toggle, logInSignUpToggle }
} )