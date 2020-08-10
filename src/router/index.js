import { createRouter, createWebHistory } from 'vue-router'
import Libary from '/@/views/libary/Libary.vue'

const routes = [
	{
		path: '/',
		name: 'Libary',
		component: Libary
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '/@/views/About.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
