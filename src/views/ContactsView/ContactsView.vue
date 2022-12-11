<script setup>

import { useSubmitForm } from '@/composables/useSubmitForm.js'

const {formData, formDataChange, formDataSubmit, errorMessage } = useSubmitForm(); //表單模組

</script>

<template>
    <div class="container">
        <h2>CONTACTS</h2> 
        <div class="layout">
            <form class="form" id="myForm" action="">
                <label>
                    NAME *
                    <input name="name" type="text" @change="formDataChange" required autocomplete="off" />
                </label>
                <label>
                    E-MAIL *
                    <input name="email" type="email" @change="formDataChange" required autocomplete="off"/>
                </label>  
                <label>
                    PHONE
                    <input name="phone" type="phone" @change="formDataChange" required autocomplete="off" />
                </label>
                <label>
                    GENDER
                    <label><input type="radio" value="none" name="gender" @change="formDataChange" />None</label> 
                    <label><input type="radio" value="male" name="gender" @change="formDataChange"/>Male</label>
                    <label><input type="radio" value="female" name="gender" @change="formDataChange"/>Female</label>
                </label>
                <label>
                    SUBJECT *
                    <select name="subjet" @change="formDataChange" >
                        <option value="none">Select.</option>
                        <option value="Product">Product</option>
                        <option value="Order">Order</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <label>
                    YOUR MESSAGE
                    <textarea name="content" id="" cols="30" rows="5" value="" @change="formDataChange"></textarea>
                </label>
                <button type="button" @click="formDataSubmit" >SUBMIT</button>
            </form>
            <div class="aside">
                <h2>表單物件</h2>
                <div>{{formData}}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    .aside div{
        border: 1px solid var(--main-font-color) ;
        border-radius: .5rem;
        width: 100%;
        min-height: 30rem;
    }
}
.form {
    // max-width: 50rem;
    width: 100%;
    padding: 1rem;
    background-color: var(--second-color);
    box-sizing: border-box;
    & > label {
        display: block;
        margin: 1rem 0;
        box-sizing: border-box;
    }
    input {
        width: 100%;
        // height: 2rem;
        padding: .5rem;
        box-sizing: border-box;
        background-color: var(--input-background-color);
        color: var(--main-font-color);
        border: 0
    }
    input[type = radio] {
        width: auto;
        accent-color:var(--button-color)
    }
    select {
        width: 100%;
        padding: .5rem;
        background-color: var(--input-background-color);
        color: var(--main-font-color);
        border: 0
    }
    textarea {
        width: 100%;
        box-sizing: border-box;
        background-color: var(--input-background-color);
        color: var(--main-font-color);
        border: 0
    }
    button {
        background-color: var(--button-color);
        
        padding: 1rem;
    }
}
@media screen and (max-width: 768px) {
    //md
    .container {
        padding: 0 2rem;
    }
    .layout {
    grid-template-columns: 1fr;
    }
}
</style>