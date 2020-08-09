<template>
	<!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
	<TodoList />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TodoList from './components/TodoList/index.vue'

export default {
	name: 'App',
	components: {
		TodoList
	},
	setup() {
		const testProps = a => {
			console.log(a)
		}

		return {
			testProps
		}
	}
}
</script>
