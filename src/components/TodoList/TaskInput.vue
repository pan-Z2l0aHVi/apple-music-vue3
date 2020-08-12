<template>
	<div class="todo-input">
		<input
			type="text"
			placeholder="do something..."
			:value="inputVal"
			@input="onInputTask"
			@keyup.enter="onAddTask"
		/>
		<button @click="onAddTask">Add</button>
	</div>
</template>

<script>
export default {
	name: 'TaskInput',

	props: { inputVal: String, onInputTask: Function, onAddTask: Function }
}
</script>

<style lang="scss" scoped>
.todo-input {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 16px;
	width: 100%;

	> input {
		padding: 0 8px;
		width: calc(100% - 88px);
		height: 32px;
	}

	> button {
		width: 72px;
		height: 32px;
	}
}
</style>
