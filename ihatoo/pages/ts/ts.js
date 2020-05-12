// pages/ts/ts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo')

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    // // 登录授权
    wx.login({
      success: res => {
        // ------ 获取凭证 ------
        var code = res.code;
        var rawData = that.data.rawData;
        var signature = that.data.signature;
        var encryptedData = that.data.encryptedData;
        var iv = that.data.iv;
        console.log(code)
        console.log(res)
        if (code) {
          console.log('获取用户登录凭证：' + code);
        }
      }
    })
    // 查看是否授权
    wx.getSetting({
      success: function(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function(res) {
              console.log(res)
              //从数据库获取用户信息
              that.queryUsreInfo();
              //用户已经授权过
              // wx.switchTab({
              //   url: ''
              // })
            }
          });
        }
      }
    })
   
  },
  bindGetUserInfo: function(e) {
    if (e.detail.userInfo) {
      console.log(e) //用户按了允许授权按钮
      var that = this;
      //插入登录的用户的相关信息到数据库
      // wx.request({
      //   url: getApp().globalData.urlPath + 'hstc_interface/insert_user',
      //   data: {
      //     openid: getApp().globalData.openid,
      //     nickName: e.detail.userInfo.nickName,
      //     avatarUrl: e.detail.userInfo.avatarUrl,
      //     province: e.detail.userInfo.province,
      //     city: e.detail.userInfo.city
      //   },
      //   header: {
      //     'content-type': 'application/json'
      //   },
      //   success: function (res) {
      //     //从数据库获取用户信息
      //     that.queryUsreInfo();
      //     console.log("插入小程序登录用户信息成功！");
      //   }
      // });
      //授权成功后，跳转进入小程序首页
      // wx.switchTab({
      //   url: ''
      // })
    } else {
      //用户按了拒绝按钮
     
    }
  },
  queryUsreInfo: function() {
    // wx.request({
    //   url: getApp().globalData.urlPath + 'hstc_interface/queryByOpenid',
    //   data: {
    //     openid: getApp().globalData.openid
    //   },
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   success: function (res) {
    //     console.log(res.data);
    //     getApp().globalData.userInfo = res.data;
    //   }
    // }) ;
  },
  getPhoneNumber(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})