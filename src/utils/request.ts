import _ from 'lodash-es'
import qs from 'qs'
import urlJoin from 'url-join'
import config from '/@/config/index'

interface IOptions {
	baseUrl?: string
	reqInterceptor?<T = IOptions>(cfg: T): T
	resInterceptor?(res, err): Promise<any> | void
}

interface IRequestOpts {
	url: string
	method: string
	params?: object
	data?: object
}

enum Methods {
	GET = 'get',
	POST = 'post',
	PUT = 'put',
	DELETE = 'delete'
}

const defaultOptions: IOptions = {
	baseUrl: '',
	reqInterceptor: cfg => cfg,
	resInterceptor: (res, err) => (err ? Promise.reject(err) : res)
}

/**
 * Simply encapsulate a request library base on ECMAScript fetch api
 * @param options
 */
class Fetch {
	private options: IOptions

	constructor(options: IOptions = defaultOptions) {
		this.options = { ...defaultOptions, ...options }
	}

	public request = async (reqOpts: IRequestOpts) => {
		const { url, params } = this.options.reqInterceptor(reqOpts)

		let fetchUrl = this.getFetchUrl(url, params)
		let fetchOpts = this.getFetchOpts(reqOpts)

		const resp = await fetch(fetchUrl, fetchOpts)

		/**
		 * TODO: In addition to the 200 status code, 2xx,3xx status code also need to be processed.
		 * The result is automatically parsed in JSON format,
		 * Other formats can only be parsed manually.
		 */
		if (resp.status === 200) {
			let res = resp.headers.get('Content-Type').match('application/json')
				? await resp.json()
				: resp
			return this.options.resInterceptor(res, null)
		} else {
			let err = resp
			return this.options.resInterceptor(null, err)
		}
	}

	public get = (url: string, params?: object) => {
		const opts: IRequestOpts = {
			url,
			method: Methods.GET,
			params
		}
		return this.request(opts)
	}

	public post = (url: string, data?: object, params?: object) => {
		const opts: IRequestOpts = {
			url,
			method: Methods.POST,
			params,
			data
		}
		return this.request(opts)
	}

	private getFetchUrl(path: string, params: object) {
		const querystring = qs.stringify(params)
		let prefix = this.options.baseUrl
		let suffix = (querystring ? (path.match(/\?/) ? '&' : '?') : '') + querystring
		return decodeURI(urlJoin(prefix, path, suffix))
	}

	private getFetchOpts(reqOpts: IRequestOpts) {
		const { method = Methods.GET, data = {} } = reqOpts
		let res
		switch (method.toLowerCase()) {
			case Methods.GET:
				res = _.omit(reqOpts, ['url', 'data'])
				break
			case Methods.POST:
				const preOpts = _.omit(reqOpts, ['url'])
				res = { ...preOpts, body: JSON.stringify(data) }
				break
			default:
				break
		}
		return res
	}
}

const _failTemp = (code: number) => `status code: ${code}: request fail!`

const instance = new Fetch({
	baseUrl: config.BASE_URL,
	reqInterceptor: cfg => cfg,
	resInterceptor: (res, err) => {
		if (err) return Promise.reject(_failTemp(err.status))

		if (res.code === 200) {
			return res.result
		} else {
			return Promise.reject(_failTemp(res.code))
		}
	}
})

export const get = instance.get
export const post = instance.post

export default instance.request
