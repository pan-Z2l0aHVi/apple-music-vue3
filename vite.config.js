import path from 'path'
import config from './config/dev'

const getAliasPath = dir => path.resolve(__dirname, dir)

module.exports = {
	// fix build index.html files base import path
	base: './',
	// vite's alias must named prefix and suffix '/', otherwise it will be spliced '@/modules'
	alias: {
		'/@/': getAliasPath('./src'),
		'/config/': getAliasPath('./config')
	},
	proxy: {
		'/api': {
			target: config.PROXY_URL,
			changeOrigin: true,
			rewrite: path => path.replace(/^\/api/, '')
		}
	},
	cssPreprocessOptions: {
		sass: {}
	}
}
