import path from 'path'

const getAliasPath = dir => path.resolve(__dirname, dir)

module.exports = {
	// fix index.html files base import path
	base: './',
	// vite's alias must named prefix and suffix '/', otherwise it will be spliced '@/modules'
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
