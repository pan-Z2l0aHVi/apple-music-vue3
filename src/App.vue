<template>
	<section id="nav">
		<router-link to="/">Home</router-link>
		<router-link to="/about">About</router-link>
		<router-link to="/test">Test</router-link>
	</section>
	<router-view />
</template>

<script>
import router from '/@/router'
import TodoList from '/@/components/todolist/TodoList.vue'

export default {
	name: 'App',
	components: {
		TodoList
	},
	router,
	setup() {}
}
</script>
