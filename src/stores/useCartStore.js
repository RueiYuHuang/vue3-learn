import axios from "axios";
import { useRoute } from "vue-router";
import { defineStore, storeToRefs } from 'pinia'
import { ref, watch, onMounted } from "@vue/runtime-core";
import { parse } from "@vue/compiler-dom";
import { computed } from 'vue-demi';


export const useCartStore = defineStore( "cartStore", () => {
    const cart = ref(null)

    //開啟關閉購物車
    const cartBoolean = ref(false)
    const cartToggle = () => {
        cartBoolean.value = !cartBoolean.value
    }

    //讀取購物車
    const getCart = () => {
        onMounted(() => {
            cart.value = JSON.parse(localStorage.getItem('cart'))
            console.log('讀取購物車',cart.value);
            if(cart.value === null){
                //未讀取到購物車設定購物車為空陣列
                cart.value = []
            }
        })
    }

    //新增商品
    const pushProduct = (product) => {
        //先確認商品是否已在購物車
        const findProduct = cart.value.find((data,index) => {
            return data.id === product.id
        })
        console.log("findProduct", findProduct);
        if(findProduct !== undefined){
            alert('此商品已在購物車中') 
        }else{
            //新增商品數量1
            product = {...product, count: 1}
            //加入購物車
            cart.value = [...cart.value, product]
            localStorage.setItem('cart',JSON.stringify(cart.value))
            //顯示購物車
            cartBoolean.value = true
            alert('加入購物車')
            console.log('購物車內容',cart.value);
        }  

    }

    //增加商品數量
    const addProduct = (product) => {
        cart.value = cart.value.map((data, index) => {
            if(data.id === product.id){
                return {...data, count: data.count+1}
            }
            return data
        })
        localStorage.setItem('cart',JSON.stringify(cart.value))
    }

    //減少商品數量
    const subProduct = (product) => {
        cart.value = cart.value.map((data, index) => {
            if(data.id === product.id && data.count > 1){
                return {...data, count: data.count-1}
            }
            return data
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

    //總金額
    const totalPrice = computed(() => {
        return cart.value.reduce((prev, next) => {
            return prev + Number(next.price) * next.count
        },0)
    })

    return { 
        cart, 
        getCart, 
        cartBoolean, 
        cartToggle,
        pushProduct,
        addProduct,
        subProduct,
        deleteProduct,
        totalPrice
     }
} )