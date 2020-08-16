<template>
	<h1 class="heading1"><slot /></h1>
</template>

<script>
export default {
	name: 'Heading1'
}
</script>

<style lang="scss" scoped>
@use 'src/assets/styles/functions';

.heading1 {
	padding-left: 1rem;
	color: getColor('light', 'textPrimary');
	text-align: left;
	font-weight: 600;
	font-size: 3.4rem;
}
</style>
