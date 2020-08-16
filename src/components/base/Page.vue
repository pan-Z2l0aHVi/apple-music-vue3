<template>
	<section class="page">
		<router-view></router-view>
	</section>
</template>

<script>
export default {
	name: 'Page'
}
</script>

<style lang="scss" scoped>
.page {
	position: relative;
	padding: 6rem 1rem;
}
</style>
