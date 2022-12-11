<script setup>
import { ref } from 'vue-demi';
import LogInVue from './section/LogIn.vue';
import SignUpVue from './section/SignUp.vue';

import { useHeaderStore } from '@/stores/useHeaderStore.js'

const headerStore = useHeaderStore()
const { logInSignUpToggle } = headerStore


const btnClick = ref(true)

const LogInClick = () => {
    btnClick.value = true
}
const SignUpClick = () => {
    btnClick.value = false
}


</script>

<template>
    <div class="background" @click.self="logInSignUpToggle">
        <div class="card">
            <div class="card__close">
                <button @click="logInSignUpToggle">X</button>
            </div>
            <div class="card__btn">
                <button @click="LogInClick" :class="[ btnClick ? 'active':'' ]">LogIn</button>
                <button @click="SignUpClick" :class="[ btnClick ? '':'active' ]">SignUp</button>
            </div>
            <div class="card__content">
                <LogInVue v-if="btnClick === true" />
                <SignUpVue v-else />
            </div>
            
        </div>
    </div>

</template>

<style lang="scss" scoped>
.background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--card-background-color);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    // display: none;
    .card {
        width: 100%;
        max-width: 25rem;
        // height: 40rem;
        background-color: var(--background-color);
        padding: 2rem;
        &__close {
            text-align: end;
            button {
                font-size: 1.6rem;
                cursor: pointer;
            }
        }
        &__btn {
            display: flex;
            justify-content: space-around;
            // margin: 1rem;
            // padding: 1rem;
            button {
                // background-color: var(--main-color);
                cursor: pointer;
                width: 100%;
                padding: 1rem 0;
                font-size: 1.6rem;
                transition: 0s;
                &:hover {
                    background-color: var(--font-hover-color);
                }
                &.active {
                    background-color: var(--main-color);
                }
            }
            
        }
        &__content {
            box-sizing: border-box;
            background-color: var(--main-color);
        }
    }

}

</style>