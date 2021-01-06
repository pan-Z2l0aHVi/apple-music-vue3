<template>
	<router-view></router-view>
	<Footerbar />
</template>

<script>
import router from '/@/router'
import TodoList from '/@/components/todolist/TodoList.vue'
import Footerbar from '/@/components/appbar/Footerbar.vue'
import { onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
	name: 'App',
	components: {
		TodoList,
		Footerbar
	},
	router,
	setup() {
		const store = useStore()

		onMounted(() => {
			store.dispatch('USER_LOGIN')
		})
	}
}
</script>
