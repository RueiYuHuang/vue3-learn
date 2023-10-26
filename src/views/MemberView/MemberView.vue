<script setup>
import axios from 'axios';
import { routerKey, useRoute, useRouter } from 'vue-router';
import { parseJwt } from '@/utils/parseJwt'
import { ref } from 'vue';

const userInfo = ref(null)
const route = useRoute()
const router = useRouter()
const getProfile = async () => {
    const state = route.query.state 
    const code = route.query.code 
    const scope = route.query.scope 
    const authuser = route.query.authuser 
    router.replace({ query: {} })
    const url = 'https://oauth2.googleapis.com/token'
    const params = {
        code: code,
        client_id: import.meta.env.VITE_CLIENT_ID,
        client_secret: import.meta.env.VITE_CLIENT_SECRET,
        redirect_uri:import.meta.env.VITE_REDIRECT_URL,
        grant_type:'authorization_code',
    }
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    const res =  await axios.post(url, params, config)

    const accessToken = res.data.access_token
    const idToken =  res.data.id_token

    userInfo.value = parseJwt(idToken)

    // userInfo
    // const url = 'https://www.googleapis.com/oauth2/v3/userinfo'
    // const config = {
    //     headers: {
    //         'Authorization': `Bearer ${accessToken}`
    //     }
    // }
    // const res =  await axios.get(url, config)
}
getProfile()

</script>

<template>
    <div class="container">
        MEMBER
        <div v-if="userInfo" class="d-flex">
            <div>
                <img :src="userInfo.picture" alt="user-picture">
            </div>
            <div>
                <div>SUB: {{ userInfo.sub }}</div>
                <div>NAME: {{ userInfo.name }}</div>
                <div>EMAIL: {{ userInfo.email }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.d-flex {
    display: flex;
}
</style>