<template>
	<li class="list-item">
		<slot />
	</li>
</template>

<script>
export default {
	name: 'ListItem'
}
</script>

<style lang="scss" scoped>
@use 'src/assets/styles/functions' as *;

.list-item {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0;
	width: inherit;
	height: 5rem;
	border-top: 1px solid getColor('light', 'divider');
	list-style: none;
	font-size: inherit;
	color: inherit;

	> span:last-child {
		position: absolute;
		right: 2rem;
		cursor: pointer;
	}
}
</style>
