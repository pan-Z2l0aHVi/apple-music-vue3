import _ from 'lodash-es'

type TArgs = (string | object)[]

interface IResWithAbort {
	abort?(): void
	read?(): Promise<any>
}

interface IAbortable {
	(func: Function): {
		(args?: any[]): IResWithAbort
	}
}

/**
 * Turn the request into abortable.
 * Support es native fetch and axiosFetch api such as request, get and post etc.
 * @param func function to be converted
 */
const abortable: IAbortable = func => {
	if (!_.isFunction(func)) return

	const controller = new AbortController()
	const { signal } = controller

	return (...args: TArgs) => {
		let funcArgs: TArgs

		if (args.length === 1) {
			const arg = args[0]
			if (_.isString(arg)) {
				funcArgs = [arg, { signal }]
			} else if (_.isObject(arg) && !_.isArray(arg)) {
				funcArgs = [{ ...arg, signal }]
			}
		} else if (args.length === 2) {
			const [url, opts] = args
			funcArgs = [url, { ...(opts as object), signal }]
		} else {
			return {}
		}

		return {
			abort: () => controller.abort(),
			read: () => func(...funcArgs)
		}
	}
}

export default abortable
