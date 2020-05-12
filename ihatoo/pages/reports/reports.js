// pages/report/report.js

/*
* @Author: 丁聪

*/


Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'ABC',
    age: '8岁',
    intro: 'ABC性格较活泼，平时喜欢户外运动，也对画画写字很有兴趣，本次试读课由AA老师授课，与老师沟通主动积极，如果参照本学习计划建议展开下一步的学习，将会获得很大的中文水平提升。',
    currentTab: 0,
    width:[
      {write: '196',
      recognition: '384',
        listen: '314',
      speak: '384'}
    ],
   number:[{
     writing:'1.5',
     recognitioning:'3.0',
     listening:'2.5',
       speaking: '3.0'
   }
   ]
  },

// tab 切换

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
  // *****  柱状图



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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