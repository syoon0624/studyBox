import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import About from './About'
import Movie from './Movie'
import MovieTitle from './MovieTitle'
import MoviePoster from './MoviePoster'
import MovieHeader from './MovieHeader'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/movies/:item',
            component: Movie,
            children: [
                {
                    name: 'MovieTitle',
                    path: 'title',
                    components: {
                        MovieHeader,
                        default: MovieTitle
                    }
                },
                {
                    name: 'MoviePoster',
                    path: 'poster',
                    component: MoviePoster
                }
            ]
        }
    ]
})