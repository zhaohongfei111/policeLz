import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/BMap',
            name: 'BMap',
            component: () =>
                import ('@/views/BMap/index.vue')
        }
    ]
}
)
