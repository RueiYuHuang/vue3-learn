import axios from "axios";
import { useRoute } from "vue-router";
import { defineStore, storeToRefs } from 'pinia'
import { ref, watch, onMounted } from "@vue/runtime-core";
import { parse } from "@vue/compiler-dom";

export const useCartStore = defineStore( "cartStore", () => {
    const cart = ref([])

    //開啟關閉購物車
    const cartBoolean = ref(false)
    const cartToggle = () => {
        cartBoolean.value = !cartBoolean.value
    }

    //讀取購物車
    const getCart = () => {
        onMounted(() => {
            cart.value =  JSON.parse(localStorage.getItem('cart'))
            console.log(cart);
        })
    }

    //新增商品
    const pushProduct = (product) => {
        cart.value = [...cart.value,...product]
        localStorage.setItem('cart',JSON.stringify(cart.value))
    }
    //增加商品數量
    const addProduct = (product) => {
        cart.value = cart.value.map((data, index) => {
            if(data.id === product.id){
                return {...data, count: data.count+1}
            }
        })
        localStorage.setItem('cart',JSON.stringify(cart.value))
    }
    //減少商品數量
    const subProduct = (product) => {
        cart.value = cart.value.map((data, index) => {
            if(data.id === product.id){
                return {...data, count: data.count-1}
            }
        })
        localStorage.setItem('cart',JSON.stringify(cart.value))
    }
    //設定商品數量
    const setProduct = (product, setcount) => {
        cart.value = cart.value.map((data, index) => {
            if(data.id === product.id){
                return {...data, count: setcount}
            }
        })
        localStorage.setItem('cart',JSON.stringify(cart.value))
    }
    //刪除商品
    const deleteProduct = (product) => {
        cart.value = cart.value.filter((data) => {
            return data.id !== product.id
        })
        localStorage.setItem('cart',JSON.stringify(cart.value))
    }
    
    return { 
        cart, 
        getCart, 
        cartBoolean, 
        cartToggle,
        pushProduct,
        addProduct,
        subProduct,
        setProduct,
        deleteProduct
     }
} )