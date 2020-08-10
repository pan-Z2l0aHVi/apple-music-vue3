<template>
	<div class="todo-list-container">
		<TaskInput :inputVal="state.inputVal" :onInputTask="onInputTask" :onAddTask="onAddTask" />
		<TaskList v-if="state.todoList.length" :todoList="state.todoList" :onRemoveTask="onRemoveTask" />
		<Nothing v-else />
	</div>
</template>

<script>
import { reactive } from 'vue'
import TaskInput from './TaskInput.vue'
import TaskList from './TaskList.vue'
import Nothing from './Nothing.vue'
import request, { get, post } from '/@/utils/request.ts'

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
	width: 100%;
	padding: 16px;
}
</style>
