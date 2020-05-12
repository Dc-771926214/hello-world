// pages/talk/talk.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

clickPlay:function(e){
  console.log(e)
  console.log(e.currentTarget.id)
  let storyId = e.currentTarget.id
  wx.navigateTo({
    url: `../tale/tale?storyId=${storyId}`,
  })
  
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.audioCtx = wx.createAudioContext('myAudio');
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
        console.log(res)
        console.log(res.data.data)
        res.data.data.forEach(item => {
          console.log(item.StoryTitle)
          console.log(item.StoryId)
          arrs.push(item.StoryTitle)
        });
        console.log(arrs)

        that.setData({
          songList: arrs,
          
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