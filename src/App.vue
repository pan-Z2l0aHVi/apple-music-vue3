<template>
	<div id="nav">
		<router-link to="/">Home</router-link>
		<router-link to="/about">About</router-link>
		<router-link to="/test">Test</router-link>
	</div>
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
