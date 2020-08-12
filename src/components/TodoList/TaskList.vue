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
	margin: 0;
	padding: 0;
	width: 100%;
	border: 1px solid #ddd;
	border-radius: 2px;

	> .task-item {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 8px;
		width: inherit;
		height: 40px;
		border-bottom: 1px solid #ddd;

		&:last-child {
			border-bottom: none;
		}

		> span:last-child {
			position: absolute;
			right: 16px;
			cursor: pointer;
		}
	}
}
</style>
