<template>
	<footer class="footer-bar">
		<div class="tab" v-for="tab in tabs" :key="tab.name">
			<router-link class="tab-icon" :to="tab.path">
				<Icon :type="tab.icon" />
				<span>{{ tab.name }}</span>
			</router-link>
		</div>
	</footer>
</template>

<script>
import { reactive, watchEffect, computed } from 'vue'
import clsx from 'clsx'
import { Icon } from '/@/components/base'

export default {
	name: 'Footerbar',

	setup() {
		const tabs = [
			{
				name: '资料库',
				icon: 'librarymusic',
				path: '/libary',
				selected: true
			},
			{
				name: '为你推荐',
				icon: 'custom-tolove',
				path: '/recommend',
				selected: false
			},
			{
				name: '浏览',
				icon: 'musicnote',
				path: '/find',
				selected: false
			},
			{
				name: '广播',
				icon: 'broadcast',
				path: '/broadcast',
				selected: false
			},
			{
				name: '搜索',
				icon: 'sousuo2',
				path: '/search',
				selected: false
			}
		]

		return { tabs }
	},

	components: { Icon }
}
</script>

<style lang="scss" scoped>
@use 'src/assets/styles/mixins' as *;
@use 'src/assets/styles/functions' as *;

.footer-bar {
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: getZIndex('footer');
	display: flex;
	justify-content: space-between;
	width: 100vw;
	height: 5rem;
	border-top: 1px solid getColor('light', 'dividerVariant');

	@include glass;

	> .tab {
		padding-top: 0.4rem;
		padding-bottom: 0.8rem;
		width: 20%;
		height: 100%;

		> .tab-icon {
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: space-between;
			height: 100%;
			color: getColor('light', 'textSecondary');

			> .icon {
				font-size: 2.4rem;
			}

			&.active {
				color: getTheme('highlight');
			}

			> span {
				font-size: 0.8rem;
			}
		}
	}
}
</style>
