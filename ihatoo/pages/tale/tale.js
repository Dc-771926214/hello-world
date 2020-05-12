// pages/tale/tale.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    yanse: ['http://hatu-cdn.oss-cn-hangzhou.aliyuncs.com/hatu-wxapp/talk/f3-img%402x.png',
      'http://hatu-cdn.oss-cn-hangzhou.aliyuncs.com/hatu-wxapp/talk/f3-img%402x.png',
    ],
    fengmian: 'http://hatu-cdn.oss-cn-hangzhou.aliyuncs.com/hatu-wxapp/talk/f3-img%402x.png',
    // key: '0',
    
    aa: "ture",
    duration:'',
  },
  
  clickPlay: function (e) {
    console.log(e)
    console.log(e.currentTarget.id)
    let storyId = e.currentTarget.id
    this.setData({
      storyId : e.currentTarget.id
    })
    this.audioCtx.play()
  },

  clickList: function() {
    this.setData({
      show: true
    })

  },
  audioPlay: function() {
    var aa = this.data.aa;
    if (aa) {
      this.audioCtx.play(),
        this.setData({
          aa: false
        })
    } else {
      this.audioCtx.pause()
      this.setData({
        aa: true
      })
    }

  },

  close: function() {
    this.setData({
      show: false
    })
  },
  bindtimeupdate(res) {
    function format(second) {
      let min = Math.floor(second / 60);
      let sec = second % 60;
      let str = "";
      if (min < 10) {
        str += "0" + min.toString();
      } else {
        str += min.toString();
      }

      str += ":";
      if (sec < 10) {
        str += "0" + sec.toString();
      } else {
        str += sec.toString();
      }

      return str;
    }
    this.setData({
      // currentTime: parseInt(res.detail.currentTime),
      // duration: ,
      abc: parseInt(res.detail.currentTime) / parseInt(res.detail.duration)*100,
      time: format(parseInt(res.detail.duration)),
      lotime: format(parseInt(res.detail.currentTime))
    })
   
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
    this.audioCtx = wx.createAudioContext('myAudio');
    this.audioCtx.play()
    var that = this;
    
    wx.request({
      url: 'http://dev.ihatoo.com/wxapi/Story/StorySelect', // 仅为示例，需填写自己服务器的地址
      data: {

      },
      method: "POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        var arrs = [];
        var arrs1=[];
        var sid = options.storyId
        console.log(sid)
        console.log(res)
        console.log(res.data.data)
        res.data.data.forEach(item => {
          console.log(item.StoryTitle)
          console.log(item.StoryId)
          console.log(item.StoryFileUrl)
          arrs.push(item.StoryTitle)
          arrs1.push(item.StoryFileUrl)
        });
        console.log(arrs)
        console.log(arrs1[sid-1])
        console.log(options.storyId)
        that.setData({
          songList: arrs,
          songUrl:arrs1,
          storyId: sid - 1
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