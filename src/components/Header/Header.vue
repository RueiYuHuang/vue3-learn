<script setup>
import { inject, ref } from 'vue';
import { onMounted, watch } from '@vue/runtime-core';
import { RouterLink, RouterView } from 'vue-router';
import { changeColor } from '../../composables/useDarkModel'; // 深色模式
import LogInSignUpVue from '../LogInSignUp/LogInSignUp.vue'; // 登入註冊元件
import CartVue from '../Cart.vue';
import { storeToRefs } from 'pinia'
import { useHeaderStore } from '@/stores/useHeaderStore.js'
import { useCartStore } from '@/stores/useCartStore.js'

const headerStore = useHeaderStore()
const { logInSignUpToggle } = headerStore
const { logInSignUpBoolean } = storeToRefs(headerStore)

const cartStore = useCartStore()
const { cartToggle, getCart } = cartStore
const { cartBoolean } = storeToRefs(cartStore)

var checked = ref(false)
const toggleList = () => {
    checked.value = !checked.value
}

getCart() //讀取購物車
const {locale, setLocale} = inject('i18n')
</script>

<template>
    <header>
        <nav class="nav">
            <div class="nav__logo">LOGO</div>      
            <div class="nav__menu">
                <label class="toggle" @click="toggleList" >
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <input class="checkbox" type="checkbox" :checked="checked"/>
                <ul class="list">
                    <li><RouterLink class="link" @click="toggleList" to="/">{{ $t('home') }}</RouterLink></li>
                    <li><RouterLink class="link" @click="toggleList" to="/about">{{ $t('about') }}</RouterLink></li>
                    <li><RouterLink class="link" @click="toggleList" to="/products">{{ $t('products') }}</RouterLink></li>
                    <li><RouterLink class="link" @click="toggleList" to="/contacts">{{ $t('contacts') }}</RouterLink></li>
                    <li><RouterLink class="link" @click="toggleList" to="/test">{{ $t('test') }}</RouterLink></li>
                </ul>
            </div>
            <div class="nav__btn">
                <select v-model="locale" @change="setLocale(locale)">
                    <option value="zh_tw">{{ $t('laguage.zh_TW') }}</option>
                    <option value="en_us">{{ $t('laguage.en_US') }}</option>
                </select>
                <button class="switch" @click="changeColor">{{ $t('dark') }}</button>
                <button class="member" @click="logInSignUpToggle">{{ $t('member') }}</button>
                <button class="member" @click="cartToggle">{{ $t('cart') }}</button>
            </div>
        </nav>
        <div class="space"></div>
    </header>
    <LogInSignUpVue v-if="logInSignUpBoolean === true"/>
    <CartVue v-if="cartBoolean === true"/>
</template>

<style lang="scss" scoped>
.space {
    height: var(--header-height);
}
.nav {
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    padding: 0 2rem;
    width: 100%;
    height: var(--header-height);
    background-color: var(--main-color);
    transition: var(--style-transition);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 998;
    &__menu {
        .checkbox {
            display: none;
        }
        .list {
            display: flex;
            gap: 0 1.5rem;
            text-transform: uppercase; 
        }
        .toggle {
            display: none;
            position: fixed;
            top: 2rem;  
            left: 1rem;
            width: 2.5rem;
            height: 2.5rem;
            & > span {
                display: block;
                width: 100%;
                height: 0.2rem;
                background-color: var(--main-font-color);
                margin: 0.6rem;
            }
        }
        
    }
    &__btn {
        button {
            cursor: pointer;
        }
    }
}

@media screen and (max-width: 768px) {
    //md
    .nav {
        padding: 0 2rem 0 6rem;
        &__menu {
            .checkbox {
                display: none;
                &:checked + .list {
                    transform: scale(1, 1);
                    opacity: 1;
                    // display: block;
                }
            }
            .list {
                display: block;
                position: fixed;
                top: 7rem;
                left: 0;
                transform: scale(1, 0);
                transition:  .5s;
                transform-origin: top;
                opacity: 0;
                // display: none;
                background-color: var(--second-color);
                width: 100vw;
                text-align: center;
                & > li {
                    margin: 1rem 0;
                }
                & > li:active {
                    margin: 1rem 0;
                }
            }
            .toggle {
                display: block;
            }
            
        }
    }    
}
@media screen and (max-width: 576px) {
    //sm

}
</style>