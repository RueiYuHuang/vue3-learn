import axios from "axios";
import { ref } from "@vue/runtime-core";

export const useFetchProduct = () => {
    const originalData = ref([])
    const fliterData = ref([])
    const errorMessage = ref([])

    const getData = async () => {
        try {
            const response = await axios.get('https://mocki.io/v1/5b3c1207-a424-4f47-bf49-33d0af474024')
            originalData.value = response.data
            fliterData.value = response.data
        } catch (err) {
            errorMessage.value = err
        }
    }

    return { originalData, fliterData, getData, errorMessage }
}