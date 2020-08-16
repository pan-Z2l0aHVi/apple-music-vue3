<template>
	<ul :class="'list' + (bordered ? 'bordered' : '')">
		<slot />
	</ul>
</template>

<script>
export default {
	name: 'List',
	props: { bordered: Boolean }
}
</script>

<style lang="scss" scoped>
.list {
	margin: 0;
	padding: 0;
	width: 100%;
	border: none;
	border-radius: 2px;

	&.bordered {
		border: 1px solid rgba(#000000, 0.1);
	}
}
</style>
