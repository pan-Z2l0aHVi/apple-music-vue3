<template>
	<li class="square-card">
		<AspectRatio :aspectRatio="5 / 4">
			<div class="cover">
				<img
					:src="
						picSrc ? picSrc + `?param=${picSize.w}y${picSize.h}` : 'https://iph.href.lu/200x200'
					"
				/>
			</div>
			<div class="bottom">
				<router-link class="title" to="/">{{ title }}</router-link>
				<router-link class="author" to="/">{{ author }}</router-link>
			</div>
		</AspectRatio>
	</li>
</template>

<script>
import { AspectRatio } from '/@/components/base'
export default {
	name: 'SquareCard',

	props: {
		title: String,
		author: String,
		picSrc: String,
		picSize: {
			type: Object,
			default: {
				w: 600,
				h: 600
			}
		}
	},

	components: { AspectRatio }
}
</script>

<style lang="scss" scoped>
@use 'src/assets/styles/variables' as *;
@use 'src/assets/styles/functions' as *;

.square-card {
	min-width: 14rem;
	max-width: 24rem;
	background: getColor('light', 'background');

	.cover {
		width: 100%;
		height: 80%;
		border-radius: 4px;
		box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);

		> img {
			width: 100%;
			height: 100%;
			border-radius: inherit;
			vertical-align: text-top;
			background: getColor('light', 'divider');

			object-fit: cover;
		}
	}

	.bottom {
		display: flex;
		flex-direction: column;
		padding-top: 4px;
		word-break: break-word;
		line-height: 1.4;

		> .title {
			margin: 0;
			color: getColor('light', 'textPrimary');
			text-align: left;
			font-size: 1.2rem;
		}

		> .author {
			margin: 0;
			color: getColor('light', 'textSecondary');
			text-align: left;
			font-size: 1.2rem;
		}
	}
}
</style>
