<template>
    <input v-model="id" type="text" />
    <input v-model="pw"  type="password" />
    <button @click="signIn">로그인</button>
</template>

<script>
export default {
    data() {
        return {
            id: '',
            pw: ''
        }
    },
    methods: {
        signIn() {
            const userToken = '1234asdf'
            // 로그인했음!

            localStorage.setItem('token', userToken);
            this.$router.push('/');
        }
    }
}
</script>