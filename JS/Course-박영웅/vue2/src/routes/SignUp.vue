<template>
    id:
    <input v-model="id" type="text" />
    <br>
    pw:
    <input v-model="password" type="password" />
    <br>
    닉네임:
    <input v-model="displayName" type="text" />
    <br>
    <button @click="signUp">회원가입!</button>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            id: '',
            password: '',
            displayName: ''
        }
    },
    methods: {
        async signUp() {
            const res = await axios({
                url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/signup',
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                    "apikey": "FcKdtJs202110",
                    "username": "pascal"
                },
                data: {
                    "email": this.id,
                    "password": this.password,
                    "displayName": this.displayName,
                }
            })
            console.log(res)
        }
    }
}
</script>