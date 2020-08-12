import _ from 'lodash-es'
import qs from 'qs'
import urlJoin from 'url-join'
export { default as abortable } from './abortable'

enum Methods {
	GET = 'get',
	POST = 'post',
	PUT = 'put',
	DELETE = 'delete'
}

interface IRequestOpts extends RequestInit {
	url: string
	params?: object
	data?: object
}

interface ICreateOpts {
	baseUrl?: string
	reqInterceptor?<T = ICreateOpts>(cfg: T): T
	resInterceptor?(res, err): Promise<any> | void
}

interface IRequest {
	(reqOpts: IRequestOpts): Promise<any>
}

interface IGet {
	(url: string, params?: object): Promise<any>
}

interface IPost {
	(url: string, data?: object, params?: object): Promise<any>
}

interface IAxiosFetch extends Function {
	create?: ICreate
	request?: IRequest
	get?: IGet
	post?: IPost
}

interface ICreate {
	(createOpts?: ICreateOpts): IAxiosFetch
}

const _defaultOptions: ICreateOpts = {
	baseUrl: '',
	reqInterceptor: cfg => cfg,
	resInterceptor: (res, err) => (err ? Promise.reject(err) : res)
}

/**
 * Simply encapsulate a axios style request library base on ECMAScript native fetch api.
 * @param options
 */
class _Fetch {
	private options: ICreateOpts

	public constructor(options: ICreateOpts = _defaultOptions) {
		this.options = { ..._defaultOptions, ...options }
	}

	private getRequestInfo(path: string, params: object): RequestInfo {
		const querystring = qs.stringify(params)
		let prefix = this.options.baseUrl
		let suffix = (querystring ? (path.match(/\?/) ? '&' : '?') : '') + querystring
		return decodeURI(urlJoin(prefix, path, suffix))
	}

	private getRequestInit(opts: IRequestOpts) {
		const usefulOpts = _.omit(opts, ['reqInterceptor', 'resInterceptor'])
		const { method = Methods.GET, data } = usefulOpts
		let requestInit: RequestInit

		/**
		 * TODO:
		 * Except get & post, here are still many things to do.
		 */
		switch (method.toLowerCase()) {
			case Methods.GET:
				requestInit = _.omit(opts, ['url', 'data'])
				break
			case Methods.POST:
				const preOpts = _.omit(opts, ['url'])
				requestInit = { ...preOpts, body: JSON.stringify(data) }
				break
			default:
				requestInit = _.omit(opts, ['url'])
				break
		}
		return requestInit
	}

	public request: IRequest = async reqOpts => {
		const { url, params } = this.options.reqInterceptor(reqOpts)

		const fetchUrl = this.getRequestInfo(url, params)
		const fetchOpts = this.getRequestInit({ ...this.options, ...reqOpts })

		const resp = await fetch(fetchUrl, fetchOpts)

		/**
		 * TODO:
		 * In addition to the 200 status code, 2xx,3xx status code also need to be processed.
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

	public get: IGet = (url, opts) =>
		this.request({
			url,
			method: Methods.GET,
			...opts
		})

	public post: IPost = (url, opts) =>
		this.request({
			url,
			method: Methods.POST,
			...opts
		})
}

const create: ICreate = createOpts => {
	const instance = new _Fetch(createOpts)
	const axiosFetch: IAxiosFetch = instance.request
	axiosFetch.create = create

	for (const key in instance) {
		// when called alone, prototype's function is missing 'this', filter them out.
		if (Object.prototype.hasOwnProperty.call(instance, key)) {
			const prop = instance[key]
			if (typeof prop === 'function') {
				axiosFetch[key] = prop
			}
		}
	}
	return axiosFetch
}

export default create()
