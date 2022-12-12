<script setup>
import { RouterLink } from 'vue-router';
import { defineStore, storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/useCartStore.js'
import { computed } from 'vue-demi';

const cartStore = useCartStore()
const { cartToggle, addProduct, subProduct, deleteProduct } = cartStore
const { cart, totalPrice } = storeToRefs(cartStore)

// const totalPrice = computed(() => {
//     return cart.value.reduce((prev, next) => {
//         return prev + Number(next.price) * next.count
//     },0)
// }) 

</script>

<template>
    <div class="cart">
        <div class="cart__close">
            <button @click="cartToggle">X</button>
        </div>
        <h2 class="cart__title">- 購物車 -</h2>
        <table class="cart__table" >
            <thead>
                <tr>
                    <th colspan="2">商品名稱</th>
                    <th>售價</th>
                    <th>數量</th>
                    <th>小計</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="cart.length === 0">購物車還沒有商品</tr>
                <tr v-for="(data, index) in cart" :key="data.id">
                    <td><img src="" alt=""></td>
                    <td>{{data.name}}</td>
                    <td>$ {{data.price}}</td>
                    <td>
                        <button @click="subProduct(cart[index])">-</button>
                        {{data.count}}
                        <button @click="addProduct(cart[index])">+</button>
                    </td>
                    <td>$ {{Number(data.price) * data.count}}</td>
                    <td><button class="del" @click="deleteProduct(cart[index])">刪除</button></td>
                </tr>
                <tr>    
                    <td colspan="3"></td>
                    <td>總金額</td>
                    <td>$ {{totalPrice}}</td>
                </tr>
            </tbody>
        </table>
        <div class="cart__btn">
            <button>前往結帳</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cart {
    position: fixed;
    right: 0;
    top:var(--header-height);
    padding: 1rem;
    background-color: var(--second-color);
    min-width: 30rem;
    border: 0.1rem solid var(--main-font-color);
    // box-sizing: content-box;
    // width: 0px;
    // overflow: hidden;
    &__close {
        text-align: end;
        font-size: 1.6rem;
        button {
            cursor: pointer;
        }
    }
    &__title {
        text-align: center;
        font-weight: 600;
        font-size: 1.5rem;
    }
    &__table {
        width: 100%;
        text-align: center;
        th {
            border-bottom: 0.1rem solid var(--main-font-color);
        }
        th, td {
            width: 7rem;
            // padding: 1rem;
            font-size: 1.5rem;
            vertical-align: middle;  
        }
        img {
            background-color: var(--main-color);
            width: 6rem;
            height: 4rem;
            object-fit: contain;
        }
        button {
            transition: border-bottom 0s ;
            border-bottom: 1px solid transparent;
            cursor: pointer;
            &:hover {
                border-bottom: 1px solid var(--main-font-color);
                box-sizing: border-box;
            }  
        }
    }
    &__btn {
        text-align: end;
        button {
            margin-top: 1rem;
            padding: 0.5rem 1.5rem;
            background-color: var(--button-color);
            color: var(--main-font-color);
            font-size: 1.6rem;
            cursor: pointer;
        }
        
    }
}
</style>