import config from '/@/config/index'
import axiosFetch from './axiosFetch'

const _failTemp = (code: number) => `status code: ${code}: request fail!`

const createOpts = {
	baseUrl: config.BASE_URL,
	method: 'GET',
	headers: {
		// 'Content-Type': 'application/json;charset=UTF-16'
		// 'Access-Control-Allow-Origin': '*'
	},
	reqInterceptor: cfg => cfg,
	resInterceptor: (res, err) => {
		if (err) return Promise.reject(_failTemp(err.status))

		if (res.code === 200) {
			return res.result
		} else {
			return Promise.reject(_failTemp(res.code))
		}
	}
}

const request = axiosFetch.create(createOpts)

export default request
