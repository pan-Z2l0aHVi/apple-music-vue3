<template>
	<ul class="task-list">
		<li class="task-item" v-for="task in todoList" :key="task.id">
			{{ task.name }}
			<span @click="onRemoveTask(task.id)">x</span>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'TaskList',

	props: { todoList: Array, onRemoveTask: Function }
}
</script>

<style lang="scss" scoped>
.task-list {
	width: 100%;
	padding: 0;
	border: 1px solid #ddd;
	border-radius: 2px;
	margin: 0;

	> .task-item {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: inherit;
		height: 40px;
		padding: 0 8px;
		border-bottom: 1px solid #ddd;

		&:last-child {
			border-bottom: none;
		}

		> span:last-child {
			position: absolute;
			right: 16px;
			cursor: pointer;

			&:hover {
				color: red;
			}
		}
	}
}
</style>
