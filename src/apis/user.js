import request from '/@/utils/request'

export const login = (email, password) =>
	request.post('login', {
		params: {
			email,
			password: encodeURIComponent(password)
		}
	})

export const logout = () => request.get('logout')

export const fetchSonglist = userId =>
	request.get('user/playlist', {
		params: {
			uid: userId
		}
	})

export const fetchSingerlist = () => request.get('artist/sublist')
