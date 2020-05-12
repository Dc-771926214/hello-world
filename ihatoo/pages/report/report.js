// pages/report/report.js

/*
* @Author: 丁聪

*/
var wxCharts = require('../../utils/wxcharts.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    


    name: 'ABC',
    age: '8岁',
    intro: 'ABC性格较活泼，平时喜欢户外运动，也对画画写字很有兴趣，本次试读课由AA老师授课，与老师沟通主动积极，如果参照本学习计划建议展开下一步的学习，将会获得很大的中文水平提升。',
    currentTab: 0,
    width: [
      {
        write: '196',
        recognition: '384',
        listen: '314',
        speak: '384'
      }
    ],
    number: [{
      writing: '1.5',
      recognitioning: '3.0',
      listening: '2.5',
      speaking: '3.0'
    }
    ]
  },

back:function(){
  wx.switchTab({

    url: '../home',

  });
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
  clickTab1: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
    wx.pageScrollTo({
      scrollTop: 1070,
    })
  },
  clickTab2: function (e) {
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
  
  updateData: function () {
    ringChart.updateData({
     
      subtitle: {
        color: '#ff0000'
      }
    });
  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    //获取屏幕宽度，获取自适应单位
    
  
  },

  


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var rpx;
    wx.getSystemInfo({
      success: function (res) {
        rpx = res.windowWidth / 375;
      },
    })
    var windowWidth = 200*rpx;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    var ringChart = new wxCharts({
      animation: true,
      canvasId: 'ringCanvas',
      type: 'ring',
      extra: {
        ringWidth: 50*rpx,
        pie: {
          offsetAngle: -80
        }
      },
      series: [
        {

          data: 5,
          stroke: false,
          color: 'white'
        },{
        name: '听',
        data: 120,
        stroke: false,
          color:'rgba(255, 233, 166, 1)'
      }, 
        {
          data: 5,
          stroke: false,
          color: 'white'
        },{
        name: '说',
          data: 90 ,
          color:'rgba(194, 194, 194, 1)',
        stroke: false
      },
        {

          data: 5,
          stroke: false,
          color: 'white'
        }, {
        name: '写',
        data: 60,
          color:'rgba(132, 132, 132, 1)',
        stroke: false
      }, 
        {

          data: 5,
          stroke: false,
          color: 'white'
        },{
        name: '读',
        data: 120 ,
        stroke: false,
          color:'rgba(240, 190, 35, 1)'
      }
      ],
      disablePieStroke: true,
      width: windowWidth,
      height: 200*rpx,
      dataLabel: false,
      legend: false,
      background: 'white',
      padding: 0
    });
    ringChart.addEventListener('renderComplete', () => {
      console.log('renderComplete');
    });
    setTimeout(() => {
      ringChart.stopAnimation();
    }, 500);
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