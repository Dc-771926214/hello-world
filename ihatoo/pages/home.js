/*
* @Author: 丁聪

*/

Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular: true,
    currentTab: 0,
    // imgUrl:[
    //   'http://hatu-cdn.oss-cn-hangzhou.aliyuncs.com/hatu-wxapp/sy/f2-btn-zwcp-n%402x.png',
    //   'http://hatu-cdn.oss-cn-hangzhou.aliyuncs.com/hatu-wxapp/sy/f2-btn-zwcp-n%402x.png',
    //   'http://hatu-cdn.oss-cn-hangzhou.aliyuncs.com/hatu-wxapp/sy/f2-btn-zwcp-n%402x.png'
    // ],
    items: [{
      img: 'http://hatu-cdn.oss-cn-hangzhou.aliyuncs.com/hatu-wxapp/sy/f2-btn-zwcp-n%402x.png',
        text: '中文评测',
        url: ''
      },
      {
        img: 'http://hatu-cdn.oss-cn-hangzhou.aliyuncs.com/hatu-wxapp/sy/f2-btn-jgs-n%402x.png',
        text: '小兔故事',
        url: ''
      },
      {
        img: 'http://hatu-cdn.oss-cn-hangzhou.aliyuncs.com/hatu-wxapp/sy/f2-btn-htsp-n%402x.png',
        text: '哈兔视频',
        url: ''
      },
      {
        img: 'http://hatu-cdn.oss-cn-hangzhou.aliyuncs.com/hatu-wxapp/sy/f2-btn-htsh-n%402x.png ',
        text: '哈兔生活',
        url: ''
      }
    ],
    chineseFoundation: [
      'http://hatu-cdn.oss-cn-hangzhou.aliyuncs.com/hatu-wxapp/sy/f3-img-cygs%402x.png',
      'http://hatu-cdn.oss-cn-hangzhou.aliyuncs.com/hatu-wxapp/sy/f3-img-cygs%402x.png',
      'http://hatu-cdn.oss-cn-hangzhou.aliyuncs.com/hatu-wxapp/sy/f3-img-cygs%402x.png'

    ]
  },
  clickTab: function(e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },

  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })

  },

  /* 点击跳转  */


  dispath: function(e) {
    //e.currentTarget.dataset.text获取点击的模块的值
    if ("中文评测" == e.currentTarget.dataset.text) {
      // this.setData({
      //   showModal: true
      // })
      wx.navigateTo({
        url: './test/test',
      })
    }

    if ("小兔故事" == e.currentTarget.dataset.text) {
      wx.navigateTo({
        url: './talk/talk',
      })
    }

    if ("哈兔视频" == e.currentTarget.dataset.text) {
      wx.navigateTo({
        url: './video/video',
      })
    }
    if ("哈兔生活" == e.currentTarget.dataset.text) {
      wx.navigateTo({
        url: './life/life',
      })
    }
  },
  close_mask: function() {
    this.setData({
      showModal: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that =this;
    wx.request({
      url: 'http://dev.ihatoo.com/wxapi/Home/BannerSelect', // 仅为示例，需填写自己服务器的地址
      data: {
       bannerImage:"bannerImage",
      },
      method: "POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        var arrs = [];
        console.log(res.data)
        console.log(res.data.data)
        res.data.data.forEach(item => {
          console.log(item.BannerImage)
          arrs.push(item.BannerImage)
        });
        console.log(arrs)
        
        that.setData({
         imgUrl:arrs
        })
      }
    })
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