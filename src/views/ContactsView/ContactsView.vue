<script setup>

import { useSubmitForm } from '@/composables/useSubmitForm.js'

const {formData, formDataChange, formDataSubmit, errorMessage } = useSubmitForm(); //表單模組

</script>

<template>
    <div class="container">
        <h2>CONTACTS</h2> 
        <div class="layout">
            <form class="form" id="myForm" @submit.prevent="formDataSubmit" action="">
                <div>
                    <label for="">Name*</label>
                    <br>
                    <input name="name" type="text" @change.prevent="formDataChange"/>
                </div>
                <div>
                    <label for="">E-MAIL *</label>
                    <br>
                    <input name="email" type="email" @change="formDataChange"/>
                </div>
                <div>
                    <label for="">PHONE</label>
                    <br>
                    <input name="phone" type="phone" @change="formDataChange">
                </div>
                <div>
                    <label for="">GENDER</label>
                    <br>
                    <label><input type="radio" value="none" name="gender" @change="formDataChange" />None</label> 
                    <label><input type="radio" value="male" name="gender" @change="formDataChange"/>Male</label>
                    <label><input type="radio" value="female" name="gender" @change="formDataChange"/>Female</label>
                </div>
                <div>
                    <label for="">SUBJECT *</label>
                    <br>
                    <select name="subjet" @change="formDataChange" id="">
                        <option value="none">Select.</option>
                        <option value="Product">Product</option>
                        <option value="Order">Order</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label for="" >YOUR MESSAGE</label>
                    <br>
                    <textarea  name="content" id="" cols="30" rows="5" value="" @change="formDataChange">
                    </textarea>
                </div>
                <button type="submit">SUBMIT</button>
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
    & > div {
        margin: 1rem 0;
        box-sizing: border-box;
    }
    input {
        width: 100%;
        // height: 2rem;
        padding: .5rem;
        box-sizing: border-box;
        background-color: var(--background-color);
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
        background-color: var(--background-color);
        color: var(--main-font-color);
        border: 0
    }
    textarea {
        width: 100%;
        box-sizing: border-box;
        background-color: var(--background-color);
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