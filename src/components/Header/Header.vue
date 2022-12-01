<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
    <header>
        <nav class="nav">
            <div class="nav__logo">LOGO</div>
            <div class="nav__menu">
                <ul class="nav__menu__list">
                    <li><RouterLink to="/">Home</RouterLink></li>
                    <li><RouterLink to="/about">About</RouterLink></li>
                    <li><RouterLink to="/products">Products</RouterLink></li>
                    <li><RouterLink to="/contacts">Contacts</RouterLink></li>
                </ul>
                <button class="nav__menu--close">關閉</button>
            </div>
            <div class="nav__buttons">
                <button class="nav__buttons__toggle">切換</button>
                <button class="nav__buttons__member">會員</button>
                <button class="nav__buttons__menu">清單</button>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
.nav {
    width: 100%;
    height: var(--header-height);
    background-color: var(--main-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__menu__list {
        display: flex;
        gap: 0 1.5rem;
        text-transform: uppercase;
    }
    &__menu--close {
        display: none;
    }
}
@media screen and (max-width: 768px) {
    //md
    
}
@media screen and (max-width: 576px) {
    //sm

}
</style>