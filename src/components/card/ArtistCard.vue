<template>
	<ListItem class="artist-card">
		<div class="avatarWrapper">
			<img class="avatar" :src="picSrc + `?param=${picSize.w}y${picSize.h}`" />
		</div>
		{{ name }}
	</ListItem>
</template>

<script>
import { ListItem } from '/@/components/base'

export default {
	name: 'ArtistCard',

	props: {
		name: String,
		picSrc: String,
		picSize: {
			type: Object,
			default: {
				w: 200,
				h: 200
			}
		}
	},

	components: { ListItem }
}
</script>

<style lang="scss" scoped>
@use 'src/assets/styles/functions' as *;

.artist-card {
	justify-content: start;
	height: 6rem;
	font-size: 1.6rem;

	> .avatarWrapper {
		display: flex;
		align-items: center;
		width: 6rem;
		height: calc(100% + 0.5rem);
		background: getColor('light', 'background');

		> .avatar {
			width: 4.8rem;
			height: 4.8rem;
			border-radius: 50%;
			background: getColor('light', 'divider');
		}
	}
}
</style>
