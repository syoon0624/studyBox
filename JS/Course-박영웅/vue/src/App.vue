<template>
    <TheModal v-model="isShow">
        <template #activator>
            <button @click="isShow = true">On Modal!</button>
        </template>
        <template #default>
            <h1>Hello, Modal!</h1>
            <button @click="isShow = false">X</button>
        </template>
    </TheModal>
    <UserName v-for="user in users" :key="user" :user="user"/>
</template>

<script>
import axios from 'axios'
import UserName from '~/components/UserName'
import names from '~/data/names.json'

export default {
    components: {
        UserName
    },
    data() {
        return {
            users: names,
            isShow: false
        }
    },
    mounted () {
        
    },
    methods: {
        async fetchMovies() {
            const { data } = await axios.get(`https://www.omdbapi.com/?apikey=7035c60c&s=${this.searchText}`)
            this.movies = data.Search
        },
        moveTo(id) {
            this.$router.push(`/movies/${id}`)
        }
    }
}
</script>