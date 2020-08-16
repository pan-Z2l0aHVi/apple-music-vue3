<template>
	<h2 class="heading2"><slot /></h2>
</template>

<script>
export default {
	name: 'Heading2'
}
</script>

<style lang="scss" scoped>
.heading2 {
	padding-left: 1rem;
	text-align: left;
	font-weight: 600;
	font-size: 1.8rem;
}
</style>
