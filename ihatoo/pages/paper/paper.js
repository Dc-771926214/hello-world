// pages/paper/paper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: '',

    array: ['大中国', '美国', '巴西', '小日本'],
    index: 0,
    date: '2016-12-20',
    time: '11:19',
    allValue: '',
    

    over:0,

    imgUrls: [
      'http://hatu-cdn.oss-cn-hangzhou.aliyuncs.com/hatu-wxapp/testpaper/f2-img-1%402x.png',
      'http://hatu-cdn.oss-cn-hangzhou.aliyuncs.com/hatu-wxapp/testpaper/f2-img-2%402x.png',
      'http://hatu-cdn.oss-cn-hangzhou.aliyuncs.com/hatu-wxapp/testpaper/f2-img-3%402x.png'
    ],
  },
  
  //表单提交按钮
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    this.setData({
      allValue: e.detail.value,
      showModal: true,
    })
    wx.pageScrollTo({
      scrollTop: 0,
    })
  },
  
  lookcor:function(){
    if(this.data.over==1){
      wx.navigateTo({
        url: '../correct/correct',
      })
    }else{
      wx.navigateTo({
        url: '../overcor/overcor',
        
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
    this.audioCtx = wx.createAudioContext('myAudio')
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