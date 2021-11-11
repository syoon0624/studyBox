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
                url: '/.netlify/functions/auth',
                method: 'POST',
                data: {
                    id: this.id,
                    pw: this.password
                }
            })
            console.log(res.data.accessToken)
            sessionStorage.setItem('accessToken', res.data.accessToken)
            this.$router.push('/')
        }
    }
}
</script>