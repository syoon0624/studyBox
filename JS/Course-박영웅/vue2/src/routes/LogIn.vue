<template>
    id:
    <input v-model="id" type="text" />
    <br>
    pw:
    <input v-model="password" type="password" />
    <br>
    <button @click="logIn">로그인!</button>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            id: '',
            password: ''
        }
    },
    methods: {
        async logIn() {
            const res = await axios({
                url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/login',
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                    "apikey": "FcKdtJs202110",
                    "username": "pascal"
                },
                data: {
                    email: this.id,
                    password: this.password
                }
            })
            console.log(res.data.accessToken)
            sessionStorage.setItem('accessToken', res.data.accessToken)
            this.$router.push('/')
        }
    }
}
</script>