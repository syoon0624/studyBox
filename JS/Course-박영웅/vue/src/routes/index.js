import { createRouter, createWebHistory, routerKey } from 'vue-router'
import Home from './Home'
import About from './About'
import Movie from './Movie'
import MovieTitle from './MovieTitle'
import MoviePoster from './MoviePoster'
import MovieHeader from './MovieHeader'
import SignIn from './SignIn'

export default createRouter({
    history: createWebHistory(),
    scrollBehavior: () => {
        return { top: 0, left: 0 }
    },
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About,
            meta: {
                auth: true
            }
        },
        {
            path: '/signin',
            component: SignIn
        },
        {
            path: '/movies/:item',
            component: Movie,
            redirect: { name: 'MovieTitle' },
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
                    component: MoviePoster,
                    components: {
                        MovieHeader,
                        default: MoviePoster
                    }
                }
            ]
        }
    ]
})