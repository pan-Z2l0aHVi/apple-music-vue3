<template>
	<Headerbar v-bind="$attrs">
		<router-link class="return-libary" to="/libary"><Icon type="left" />资料库</router-link>
	</Headerbar>
	<Heading1>艺人</Heading1>
	<List class="singer-list">
		<ArtistCard
			v-for="artist in state.artists"
			:key="artist.id"
			:name="artist.name"
			:picSrc="artist.picUrl"
		/>
	</List>
	<ul class="background">
		<li class="horizon-line" v-for="(item, index) in Array(12)" :key="index"></li>
	</ul>
</template>

<script>
import { onMounted, reactive, watchEffect } from 'vue'
import { useStore } from 'vuex'
import Headerbar from '/@/components/appbar/Headerbar.vue'
import Heading1 from '/@/components/heading/Heading1.vue'
import { List, Icon } from '/@/components/base'
import ArtistCard from '/@/components/card/ArtistCard.vue'
import { userApi } from '/@/apis'

export default {
	name: 'ArtistList',

	setup() {
		const store = useStore()

		const state = reactive({
			artists: []
		})

		watchEffect(async () => {
			const {
				user: { profile }
			} = store.state

			if (profile.userId) {
				try {
					const { data = [] } = await userApi.fetchSingerlist()
					state.artists = data
				} catch (err) {
					console.log('api failed', err)
				}
			}
		})

		return { state }
	},

	components: { Headerbar, Heading1, List, Icon, ArtistCard }
}
</script>

<style lang="scss" scoped>
@use 'src/assets/styles/functions' as *;

$highlight: getTheme('highlight');
$divider: getColor('light', 'divider');

.background {
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	overflow: hidden;
	padding: 0 2rem;
	padding-top: 10.4rem;
	width: 100vw;
	height: 100vh;

	> .horizon-line {
		height: 6rem;
		border-top: 1px solid $divider;

		&:last-child {
			border-bottom: 1px solid $divider;
		}
	}
}

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

.singer-list {
	margin-top: 1rem;
	padding: 0 1rem;
	background: getColor('light', 'background');
}
</style>
