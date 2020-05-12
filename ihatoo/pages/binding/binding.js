// pages/binding/binding.js
// pages/condition/condition.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a: '',
    nickName: '',
    firstClass:'http://hatu-cdn.oss-cn-hangzhou.aliyuncs.com/hatu-wxapp/course/%E4%B8%8A%E4%B8%8B%E4%BA%94%E5%8D%83%E5%B9%B4.jpg',
    twoClass:'http://hatu-cdn.oss-cn-hangzhou.aliyuncs.com/hatu-wxapp/course/%E7%9C%8B%E5%9B%BE%E5%86%99%E8%AF%9D.jpg'
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // wx.getSetting({
    //   success(res) {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称
    //       wx.getUserInfo({
    //         success: function (res) {
    //           console.log(res.userInfo)
    //         }
    //       })
    //     }
    //   }
    // })
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
        that.setData({
          a: avatarUrl,
          nickName: nickName
        })
      },
    })

  },
  kebiao:function(){
    wx.navigateTo({
      url: '../calendar/calendar',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})