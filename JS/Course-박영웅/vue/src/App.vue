<template>
    <TheModal v-model="isShow">
        <template #activator="{ attrs }">
            <button v-bind="attrs">On Modal!</button>
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