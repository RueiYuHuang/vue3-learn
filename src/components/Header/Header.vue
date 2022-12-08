<script setup>
import { ref } from '@vue/reactivity';
import { watch } from '@vue/runtime-core';
import { RouterLink, RouterView } from 'vue-router';

const checked = ref(false)
const toggleList = () => {
    checked.value = !checked.value
}

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
                    <li><RouterLink class="link" @click="toggleList" to="/">Home</RouterLink></li>
                    <li><RouterLink class="link" @click="toggleList" to="/about">About</RouterLink></li>
                    <li><RouterLink class="link" @click="toggleList" to="/products">Products</RouterLink></li>
                    <li><RouterLink class="link" @click="toggleList" to="/contacts">Contacts</RouterLink></li>
                </ul>
            </div>
            <div class="nav__btn">
                <button class="switch">切換</button>
                <button class="member">會員</button>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>

.nav {
    box-sizing: border-box;
    padding: 0 2rem;
    width: 100%;
    height: var(--header-height);
    background-color: var(--main-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
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
                background-color: rgb(0, 0, 0);
                margin: 0.6rem;
            }
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
                background-color: white;
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