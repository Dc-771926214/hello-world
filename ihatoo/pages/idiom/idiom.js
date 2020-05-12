 // pages/idiom/idiom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courIntro: ['http://hatu-cdn.oss-cn-hangzhou.aliyuncs.com/hatu-wxapp/course/%E6%88%90%E8%AF%AD%E6%95%85%E4%BA%8B.jpg', 'http://hatu-cdn.oss-cn-hangzhou.aliyuncs.com/hatu-wxapp/course/%E5%9C%B0%E7%90%83.jpg','http://hatu-cdn.oss-cn-hangzhou.aliyuncs.com/hatu-wxapp/course/%E6%95%85%E5%AE%AB.jpg'],
    coureBan:'http://hatu-cdn.oss-cn-hangzhou.aliyuncs.com/hatu-wxapp/course/%E6%88%90%E8%AF%AD%E6%95%85%E4%BA%8B.jpg',
    currentTab: 0,
    giftList:[{
      img:'http://hatu-cdn.oss-cn-hangzhou.aliyuncs.com/hatu-wxapp/course/f5-icon-cw%402x.png',
      text:'测试课程'
    }, {
        img: 'http://hatu-cdn.oss-cn-hangzhou.aliyuncs.com/hatu-wxapp/course/f5-icon-zy%402x.png',
        text: '配套作业'
      }, {
        img: 'http://hatu-cdn.oss-cn-hangzhou.aliyuncs.com/hatu-wxapp/course/f5-icon-fx%402x.png',
        text: '复习资料'
      }, {
        img: 'http://hatu-cdn.oss-cn-hangzhou.aliyuncs.com/hatu-wxapp/course/f5-icon-hz%402x.png',
        text: '汉字卡'
      }, {
        img: 'http://hatu-cdn.oss-cn-hangzhou.aliyuncs.com/hatu-wxapp/course/f5-icon-mr%402x.png ',
        text: '每日一次'
      }
    ]
  },

  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
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