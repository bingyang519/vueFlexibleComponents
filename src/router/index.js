import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import PageTextScroll from '@/pages/PageTextScroll'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/TextScroll',
            name: 'TextScroll',
            component: PageTextScroll,
        }
    ]
})
