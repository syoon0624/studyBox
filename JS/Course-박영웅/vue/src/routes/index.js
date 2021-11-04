import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import About from './About'
import Movie from './Movie'
import MovieTitle from './MovieTitle'
import MoviePoster from './MoviePoster'


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
                    component: MovieTitle
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