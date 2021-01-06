<template>
	<strong class="empty-container">nothing.</strong>
</template>

<script>
export default {
	name: 'Nothing'
}
</script>

<style lang="scss" scoped>
@use 'src/assets/styles/mixins' as *;
.empty-container {
	width: inherit;
	height: 160px;

	@include flexCenter;
}
</style>
