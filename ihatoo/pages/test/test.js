// pages/test/test.js
/*
* @Author: 丁聪

*/

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    studyTitle: '魔法拼音试读课程',
    studyTeacher:'任课老师：吴娟',
    studyTime:'时间：2020-04-23',
    studyMin:'19:30',
    
  },
  
  testTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },
  reportClick: function () {
      // this.setData({
      //   showReport: true
      // })
    wx.navigateTo({
      url: '../report/report',
    })
    },
  closeReport: function () {
    this.setData({
      showReport: false
    })
  },
  startTest: function () {
    wx.navigateTo({
      url: '../paper/paper',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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