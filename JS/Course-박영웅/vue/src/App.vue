<template>
    <TheHeader />
    <input type="text" v-model="searchText" @keyup.enter="fetchMovies" />
    <br><br>
    <div v-for="movie in movies"
    :key="movie.imdbID"
    @click="moveTo(movie.imdbID)">{{ movie.Title }}</div>
    <RouterView />
</template>

<script>
import axios from 'axios'
import TheHeader from '~/components/TheHeader'

export default {
    components: {
        TheHeader
    },
    data() {
        return {
            searchText: '',
            movies: []
        }
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