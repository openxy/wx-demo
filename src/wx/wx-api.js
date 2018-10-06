function f (func, obj) {
  return new Promise((resolve, reject) => {
    func({
      ...obj,
      success: resolve,
      fail: reject
    })
  })
}

export default {

  // 获取 code
  login: obj => f(wx.login, obj),

  // 获取用户信息
  getUserInfo: obj => f(wx.getUserInfo, obj),

  // 动态请求权限
  authorize: obj => f(wx.authorize, obj),

  // 保存到本地
  setStorage: obj => f(wx.setStorage, obj)
}
