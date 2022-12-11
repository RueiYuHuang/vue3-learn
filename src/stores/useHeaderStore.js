import axios from "axios";
import { useRoute } from "vue-router";
import { defineStore, storeToRefs } from 'pinia'
import { ref, watch, onMounted } from "@vue/runtime-core";

export const useHeaderStore = defineStore( "headerStore", () => {
    
    var logInSignUpBoolean = ref(false)
    const logInSignUpToggle = () => {
        logInSignUpBoolean.value = !logInSignUpBoolean.value
    }
    
    return { logInSignUpBoolean, logInSignUpToggle }
} )