import { createRouter, createWebHistory } from 'vue-router'
import { Page } from '/@/components/base'
import Libary from '/@/views/libary/Libary.vue'

const libaryRoutes = [
	{
		path: '',
		component: Libary
	},
	{
		path: 'artist_list',
		component: () => import('/@/views/libary/ArtistList.vue')
	}
]

const routes = [
	{
		path: '/',
		redirect: '/libary'
	},
	{
		path: '/libary',
		component: Page,
		children: libaryRoutes
	},
	{
		path: '/recommend',
		component: Page,
		children: [
			{
				path: '',
				component: () => import('/@/views/About.vue')
			}
		]
	},
	{
		path: '/find',
		component: () => import('/@/views/About.vue')
	},
	{
		path: '/broadcast',
		component: () => import('/@/views/About.vue')
	},
	{
		path: '/search',
		component: () => import('/@/views/About.vue')
	},
	{
		path: '/detail',
		component: Page,
		children: [
			{
				path: 'playlist/:id',
				component: () => import('/@/views/playlistdetail/playlistDetail.vue')
			}
		]
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	linkActiveClass: 'active'
})

export default router
