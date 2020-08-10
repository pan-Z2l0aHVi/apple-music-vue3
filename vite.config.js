import path from 'path'

const getAliasPath = dir => path.resolve(__dirname, dir)

module.exports = {
	base: './', // fix index.html files base import path
	alias: {
		'/@/': getAliasPath('./src')
	},
	proxy: {
		// // string shorthand
		// '/foo': 'http://localhost:4567/foo',
		// // with options
		// '/api': {
		// 	target: 'http://jsonplaceholder.typicode.com',
		// 	changeOrigin: true,
		// 	rewrite: path => path.replace(/^\/api/, '')
		// }
	}
}
