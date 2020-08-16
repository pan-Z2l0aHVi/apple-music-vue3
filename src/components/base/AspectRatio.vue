<template>
	<div class="aspect-ratio-container" :style="`padding-bottom: calc(${aspectRatio} * 100%);`">
		<div class="content"><slot /></div>
	</div>
</template>

<script>
export default {
	name: 'AspectRatio',
	props: {
		aspectRatio: {
			default: 1,
			type: Number
		}
	}
}
</script>

<style lang="scss" scoped>
.aspect-ratio-container {
	position: relative;
	width: 100%;
	height: 0;

	> .content {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		height: auto;
	}
}
</style>
