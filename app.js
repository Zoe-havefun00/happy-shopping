import request from "./utils/request.js";

//app.js
App({

  // 全局的生命周期函数

  // 小程序创建运行时候会触发,用来初始化小程序的内容，5分钟小程序会自动销毁
  onLaunch() {
    // console.log("小程序开始执行")

    request.defaults.baseURL = "https://api.zbztb.cn/api/public/v1";

    // 传入一个函数，统一处理请求错误
    request.onError(res => {
      if (res.statusCode == 200) {

        // 弹窗
        // wx.showModal({
        //   title: '提示',
        //   content: '请求错误',
        // })
      }
    })
  },

  // 小程序显示的时候触发的，
  onShow() {
    //console.log("小程序显示的时候触发的")
  },

  // 小程序隐藏的时候触发的
  onHide() {
    //console.log("小程序隐藏的时候触发的")
  }

})