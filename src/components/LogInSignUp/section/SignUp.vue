<script setup>

</script>

<template>
    <form class="SignUpCard">
        <label>
            NAME
            <input name="text" type="text" @change="formDataChange" required autocomplete="off"/>
        </label>
        <label>
            E-MAIL
            <input name="email" type="email" @change="formDataChange" required autocomplete="off"/>
        </label>
        <label>
            PASSWORD
            <input name="password" type="password" @change="formDataChange" required autocomplete="off"/>
        </label>
        <label>
            CONFIRM PASSWORD
            <input name="password" type="password" @change="formDataChange" required autocomplete="off"/>
        </label>
        <button type="button">SignUp</button>
    </form>
</template>

<style lang="scss" scoped>
.SignUpCard {
    padding: 1rem;
    label {
        display: block;
        margin: 0 0 1rem 0;
        input {
            width: 100%;
            box-sizing: border-box;
        }
    }
    button {
        width: 100%;
        background-color: var(--button-color);
        padding: 0.5rem 0;
        font-size: 1.6rem;
        cursor: pointer;
    }
}

</style>