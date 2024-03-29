import axios from "axios";
import { useRoute } from "vue-router";
import { defineStore, storeToRefs } from 'pinia'
import { ref, watch, onMounted, nextTick } from "@vue/runtime-core";
import { useLoading } from "../composables/useLoading";


export const useProductStore = defineStore( "productStore", () => {
    const originalData = ref([])
    const datas = ref([])
    const dataDetail = ref([])
    const errorMessage = ref([])
    const { startLoading, endLoading, loadings } = useLoading();

    const fetchData = () => {
        const route = useRoute();
        
        onMounted(()=>{
            fetchInit(route)
        })
        
        watch(route, (newRoute) => {
            fetchInit(newRoute)
        })

        // 模擬延遲
        const delay = (ms) => {
            return new Promise((resolve) => {setTimeout(resolve, ms)})
        }

        const fetchInit = async (route) => {
            try {
                // 防止重複fetch
                // if (loadings.value.products) return 
                startLoading('products')
                const response = await axios.get('https://mocki.io/v1/5b3c1207-a424-4f47-bf49-33d0af474024')
                originalData.value = response.data
                if(route.query.class === undefined){
                    //沒有class表示全部商品
                    datas.value = originalData.value
                }else{
                    //篩選商品
                    datas.value = originalData.value.filter((data) => {
                        return data.class === route.query.class
                    })
                }
                // await delay(10000)
            } catch (err) {
                errorMessage.value = err
            } finally {
                endLoading('products')
            }
        }
        // fetchInit(route)
    }

    const fetchDataDetail = () => {
        const route = useRoute();
        // console.log("pudid:",route.query.pudid);
        onMounted(()=>{
            fetchInit(route)
        })

        const fetchInit = async (route) => {
            try {
                const response = await axios.get('https://mocki.io/v1/5b3c1207-a424-4f47-bf49-33d0af474024')
                originalData.value = response.data
                if(route.query.pudid === undefined){
                    //沒有pudid表示無此商品
                    dataDetail.value = originalData.value
                }else{
                    //篩選商品
                    dataDetail.value = originalData.value.filter((data) => {
                        return data.id === Number(route.query.pudid) 
                    })
                    //取出陣列第0個
                    dataDetail.value = dataDetail.value[0]
                }
            } catch (err) {
                errorMessage.value = err
            }
        }
    }
    
    
    return { loadings, datas, fetchData, dataDetail, fetchDataDetail, errorMessage }
} )