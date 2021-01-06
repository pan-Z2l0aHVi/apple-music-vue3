<template>
	<div>
		<Headerbar v-bind="$attrs">
			<router-link class="return-libary" to="/libary"><Icon type="left" />资料库</router-link>
		</Headerbar>
	</div>
</template>

<script>
import Headerbar from '/@/components/appbar/Headerbar.vue'
import { List, Icon } from '/@/components/base'
import { watchEffect, onMounted } from 'vue'
import { musicApi } from '/@/apis'
import { useRoute } from 'vue-router'

export default {
	name: 'SongsDetail',

	components: { Headerbar, Icon },

	setup() {
		const route = useRoute()

		watchEffect(async () => {
			try {
				const res = await musicApi.fetchPlaylistDetail(route.params.id)
			} catch (err) {
				console.error('api failed', err)
			}
			console.log(route.params.id)
		})
	}
}
</script>

<style lang="scss" scoped>
@use 'src/assets/styles/functions' as *;

$highlight: getTheme('highlight');
$divider: getColor('light', 'divider');

.header-bar {
	> .return-libary {
		position: absolute;
		top: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		color: $highlight;
		font-size: 1.6rem;

		> .icon {
			font-size: 2.2rem;
		}
	}
}
</style>
