<template>
	<article class="todo-list-container">
		<TaskInput :inputVal="state.inputVal" :onInputTask="onInputTask" :onAddTask="onAddTask" />
		<TaskList
			v-if="state.todoList.length"
			:todoList="state.todoList"
			:onRemoveTask="onRemoveTask"
		/>
		<Nothing v-else />
	</article>
</template>

<script>
import { reactive, watchEffect } from 'vue'
import TaskInput from './TaskInput.vue'
import TaskList from './TaskList.vue'
import Nothing from './Nothing.vue'

export default {
	name: 'TodoList',

	components: { TaskInput, TaskList, Nothing },

	setup() {
		const state = reactive({
			inputVal: '',
			todoList: [],
			uniqueCount: 0
		})

		const onInputTask = e => {
			state.inputVal = e.target.value
		}

		const onAddTask = () => {
			if (state.inputVal.trim()) {
				state.todoList.push({
					id: state.uniqueCount++,
					name: state.inputVal
				})
				state.inputVal = ''
			}
		}

		const onRemoveTask = id => {
			state.todoList = state.todoList.filter(task => task.id !== id)
		}

		watchEffect(async () => {
			console.log('inputVal', state.inputVal)
		})

		return {
			state,
			onInputTask,
			onAddTask,
			onRemoveTask
		}
	}
}
</script>

<style lang="scss" scoped>
.todo-list-container {
	box-sizing: border-box;
	padding: 16px;
	width: 100%;
}
</style>
