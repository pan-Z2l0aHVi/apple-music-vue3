import config from '/config/index'
import axiosFetch from './axiosFetch'

type TErrorResponse = {
	code: number
	msg: string
}

const _reject = (code: number, msg?) =>
	Promise.reject(`\n status code: ${code}: request fail! ${msg}`)

const createOpts = {
	baseUrl: config.BASE_URL,
	method: 'GET',
	headers: {},
	mode: 'cors',
	credentials: 'same-origin',
	reqInterceptor: cfg => cfg,
	resInterceptor: (res, err) => {
		if (err) {
			return err.json
				? err.json().then((res: TErrorResponse) => _reject(res.code, res.msg))
				: _reject(err.status)
		}

		if (res.code === 200) {
			return res
		} else {
			return _reject(res.code, res.msg)
		}
	}
}

const request = axiosFetch.create(createOpts)

export default request
