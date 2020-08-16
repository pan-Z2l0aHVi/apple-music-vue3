<template>
	<svg class="icon" aria-hidden="true">
		<use :xlink:href="'#icon-' + type"></use>
	</svg>
</template>

<script>
export default {
	name: 'Icon',
	props: { type: String }
}
</script>

<style lang="scss" scoped>
.icon {
	display: flex;
	overflow: hidden;
	width: 1em;
	height: 1em;
	color: inherit;
	vertical-align: -0.15em;
	font-size: inherit;

	fill: currentColor;
}
</style>
