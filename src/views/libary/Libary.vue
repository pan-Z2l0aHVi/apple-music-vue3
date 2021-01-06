<template>
	<!-- Parent component of the fragment to declare "btn-clicked" in emits or to do v-bind="$attrs" on one of the children. It prevents the warning.
	https://github.com/vuejs/vue-next/issues/1001 -->
	<Headerbar v-bind="$attrs">
		<span class="edit">编辑</span>
	</Headerbar>
	<Heading1>资料库</Heading1>
	<List class="sort-list">
		<router-link v-for="sort in sortList" :key="sort.name" :to="sort.path">
			<ListItem class="sort-item">
				{{ sort.name }}
				<Icon type="right" />
			</ListItem>
		</router-link>
	</List>
	<Heading2>最近添加</Heading2>
	<ul class="card-list">
		<SquareCard
			class="card"
			v-for="songs in state.playlist"
			:key="songs.id"
			:title="songs.name"
			:author="songs.creator.nickname"
			:picSrc="songs.coverImgUrl"
			@click="goToDetail"
		/>
	</ul>
</template>

<script>
import { reactive, watchEffect, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import Headerbar from '/@/components/appbar/Headerbar.vue'
import Heading1 from '/@/components/heading/Heading1.vue'
import Heading2 from '/@/components/heading/Heading2.vue'
import { Icon, List, ListItem } from '/@/components/base'
import SquareCard from '/@/components/card/SquareCard.vue'
import { userApi } from '/@/apis'
import { useRoute, useRouter } from 'vue-router'

export default {
	name: 'Libary',

	components: { Headerbar, Heading1, Heading2, List, ListItem, Icon, SquareCard },

	setup() {
		const sortList = [
			{
				name: '播放列表',
				path: '/libary/artist_list'
			},
			{
				name: '艺人',
				path: '/libary/artist_list'
			},
			{
				name: '专辑',
				path: '/libary/artist_list'
			},
			{
				name: '歌曲',
				path: '/libary/artist_list'
			}
		]

		const store = useStore()
		const router = useRouter()

		const state = reactive({
			playlist: []
		})

		const fetchRecent = async userId => {
			try {
				const { playlist = [] } = await userApi.fetchSonglist(userId)
				state.playlist = playlist
			} catch (err) {
				console.error('api failed', err)
			}
		}

		const goToDetail = () => {
			router.push({ path: '/detail/playlist/', params: { id: '6666' } })
		}

		watchEffect(() => {
			const {
				user: { profile }
			} = store.state

			if (profile.userId) {
				fetchRecent(profile.userId)
			}
		})

		return { state, sortList, goToDetail }
	}
}
</script>

<style lang="scss" scoped>
@use 'src/assets/styles/functions' as *;

$border: 1px solid getColor('light', 'divider');
$highlight: getTheme('highlight');

.header-bar {
	> .edit {
		position: absolute;
		right: 2rem;
		color: $highlight;
		font-size: 1.6rem;
	}
}

.sort-list {
	margin: 1rem 0 3rem 0;
	padding-left: 1rem;

	> a {
		> .sort-item {
			padding-left: 0;
			color: $highlight;
			font-size: 2rem;

			.icon {
				margin-right: 1rem;
				color: getColor('light', 'textSecondary');
				font-size: 1.3rem;
			}
		}

		&:last-child {
			> .sort-item {
				border-bottom: $border;
			}
		}
	}
}

.card-list {
	display: flex;
	flex-flow: wrap;
	margin-top: 1rem;
	width: 100%;

	.card {
		margin: 1rem;
		width: calc(50% - 2rem);
	}

	@media (min-width: 500px) {
		> .card {
			width: calc(1 / 3 * 100% - 2rem);
		}
	}

	@media (min-width: 800px) {
		> .card {
			width: calc(1 / 4 * 100% - 2rem);
		}
	}

	@media (min-width: 1000px) {
		> .card {
			width: calc(1 / 5 * 100% - 2rem);
		}
	}
}
</style>
