// 导入配置
import config from "./config";

// 引入 fly
const Fly = require("flyio/dist/npm/wx");
const fly = new Fly;

// 超时配置
fly.config.timeout = 5 * 1000;

// 公共 Headers
fly.config.headers["X-Tag"] = "flyio";

// 服务器地址
fly.config.baseURL = config.baseURL;

// 添加请求拦截器
fly.interceptors
  .request.use((request) => {

  // 自定义请求头
  request.headers["X-Tag"] = 'flyio';

  const accessToken = wx.getStorageSync('access_token');

  // 如果包含了 token，直接返回
  if (accessToken === undefined || request.headers['Authorization']) {
    return request;
  }

  // 如果没有 token，在 headers 里添加
  request.headers['Authorization'] = `Bearer ${accessToken}`;

  // 打印请求体
  console.log("fly请求体 -->>>%o", request.body);

  return request;
});

// 添加响应拦截器
fly.interceptors
  .response.use(response => {

  // 打印返回体
  console.log("fly返回体 -->>>%o", response.data);

  // 将请求的结果返回
  return response;

}, error => {

  // 发生网络错误
  console.log("fly错误 -->>>%o", error);
});


export default  fly

