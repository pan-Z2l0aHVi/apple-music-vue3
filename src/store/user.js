import { userApi } from '/@/apis'

const user = {
	state() {
		return {
			profile: {}
		}
	},

	mutations: {
		UPDATE_PROFILE(state, payload) {
			state.profile = payload
		}
	},

	actions: {
		async USER_LOGIN(context) {
			try {
				const { profile } = await userApi.login('pbs_net_ease_email@163.com', '37vWY66acc3FbQ7')

				if (profile) {
					context.commit('UPDATE_PROFILE', profile)
				}
			} catch (err) {
				console.error('api login failed', err)
			}
		}
	}
}

export default user
