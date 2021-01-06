import { createStore, createLogger } from 'vuex'
import user from './user'
import media from './media'

const store = createStore({
	state() {
		return {
			count: 1
		}
	},
	modules: {
		user,
		media
	},
	plugins: [createLogger()]
})

export default store
