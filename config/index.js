import devCfg from './dev'
import prodCfg from './prod'

const proxyEnv = import.meta.env.VITE_PROXY_ENV
console.log('VITE_PROXY_ENV: ', proxyEnv)

export default proxyEnv === 'prod' ? prodCfg : devCfg
