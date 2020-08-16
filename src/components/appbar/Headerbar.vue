<template>
	<header class="header-bar"><slot /></header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@use 'src/assets/styles/functions' as *;

.header-bar {
	position: fixed;
	top: 0;
	left: 0;
	z-index: getZIndex('header');
	display: flex;
	align-items: center;
	padding: 0 1rem;
	width: 100vw;
	height: 5rem;
	// border-bottom: 1px solid rgba(#000000, 0.1);
	background: rgba(#ffffff, 0.7);

	backdrop-filter: saturate(50%) blur(20px);
}
</style>
