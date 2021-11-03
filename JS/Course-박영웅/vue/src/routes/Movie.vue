<template>
    <h1>Movie Page!</h1>
    <h2>{{ title }}</h2>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            title: []
        }
    },
    watch: {
        $route() {
            this.fetchMovie()
        }
    },
    created() {
        this.fetchMovie()
    },
    methods: {
        async fetchMovie() {
            const { data } = await axios.get(`https://www.omdbapi.com/?apikey=7035c60c&i=${this.$route.params.item}`)
            console.log(data)
            this.title = data.Title
        }
    }
}
</script>