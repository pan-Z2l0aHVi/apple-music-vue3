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
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 16px;

	> input {
		width: calc(100% - 88px);
		height: 32px;
		padding: 0 8px;
	}

	> button {
		width: 72px;
		height: 32px;
	}
}
</style>
