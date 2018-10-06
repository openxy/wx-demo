// 当前环境是否为开发环境
const devTools = process.env.NODE_ENV === 'development'

export default {
  // 主机域名
  baseURL: devTools ? 'http://127.0.0.1:3000' : '',
  // 小程序 Key
  appKey: '',
  // 小程序 Id
  appId: ''
}
