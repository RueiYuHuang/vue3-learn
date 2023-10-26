<script setup>
import { inject, ref, getCurrentInstance } from 'vue'
import ChildrenBtn from '@/components/ChildrenBtn.vue';
import axios from 'axios';

const count = ref(0)
const addCount = (count) => {
   count.value += Number(count)
}
const test = () => {
    console.log('test')
    for (let i = 0; i < 1000000; i++) {
        count.value = count.value + 1
    }
}
const add = () => {
    count.value ++
}
const {name, sayHello} = inject('user')
const inputName = ref('')
const setName = (e, inputName) => {
    console.log('inputName',inputName )
    console.log('event.target', e.target)
    name.value = inputName
}

const {locale, setLocale} = inject('i18n')
console.log('locale', locale)

const login = async () => {
    const params = {
        client_id: '68539763288-0l8v1ur2c32fmq9g2rvjqphodgsdv2gi.apps.googleusercontent.com',
        redirect_uri:'http://localhost:3000',
        scope:'email profile',
        response_type:'code',
    }
    const res =  await axios.get('https://accounts.google.com/o/oauth2/auth', params)
    console.log('res',res )
}
</script>


<template>
    {{count}}
    <ChildrenBtn @add-count="addCount" :count="count" :test="test"/>
    <br>
    <button class="btn" @click="test">test</button>
    <button class="btn" @click="add">add</button>
    <hr>
    {{ name }}
    <br>
    <input v-model="inputName" >
    <button class="btn" @click="(e) => { setName(e, inputName)}">setName</button>
    <br>
    <button class="btn" @click="sayHello()">sayHello</button>
    <hr>
    <select v-model="locale" @change="setLocale(locale)">
        <option value="zh_TW">{{ $t('laguage.zh_TW') }}</option>
        <option value="en_US">{{ $t('laguage.en_US') }}</option>
    </select>
    <h5>{{ $t('hello','zh_TW') }}</h5>
    <h5>{{ $t('x.x') }}</h5>
    <h5>{{ $t('x.y.z') }}</h5>
    <hr>
    <button class="btn" @click="login()">login</button>
    <a href="https://accounts.google.com/o/oauth2/auth?client_id=68539763288-0l8v1ur2c32fmq9g2rvjqphodgsdv2gi.apps.googleusercontent.com&response_type=code&scope=openid%20email%20profile&redirect_uri=http://localhost:3000" target="_blank">123</a>
    <div @click="() => {console.log('1')}">
        <button @click.stop="() => {console.log('2')}">btn1</button>
        <div @click="() => {console.log('3')}">
            <button @click="() => {console.log('4')}">btn2</button>
        </div>
    </div>
    <div class="linear">
    
    </div>
</template>

<style scoped>
.btn {
    margin: .5rem;
    padding: .5rem 1.5rem;
    background-color: white;
}
.linear {
    height: 50px;
    background: linear-gradient(to bottom, var(--background-color) 0%, white 50%);
    /* color: var(--background-color) */
}
</style>