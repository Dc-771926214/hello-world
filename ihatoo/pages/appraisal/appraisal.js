var numCount = 4;  //元素个数
var numSlot = 4;  //一条线上的总节点数
var mW = 400;  //Canvas的宽度
var mCenter = mW / 2; //中心点
var mAngle = Math.PI * 2 / numCount; //角度
var mRadius = mCenter - 60; //半径(减去的值用于给绘制的文本留空间)
//获取指定的Canvas
var radCtx = wx.createCanvasContext("radarCanvas")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chanelArray1: [["写", 20], ["读", 40], ["说", 65], ["听", 65]],
remark:'我是评语我，是评语我是评语我是评语，我是评语我是评语我是评语我是评语我是评语。我是评语我是评语我是评语，我是评语我是评语我是评语。我是评语我是评语。'
  },
  // 雷达图
  drawRadar: function () {
    var sourceData1 = this.data.chanelArray1
    //调用
    this.drawEdge() 
    
    this.drawLinePoint()
    //设置数据
    this.drawRegion(sourceData1, 'rgba(240, 190, 35, 0.5)') //第一个人的
 
    //设置文本数据
    this.drawTextCans(sourceData1)
    //设置节点
    this.drawCircle(sourceData1, 'rgba(240, 190, 35, 1)')
    
    //开始绘制
    radCtx.draw()
  },
  // 绘制6条边
  drawEdge: function () {
    radCtx.setStrokeStyle("#ccc")
    radCtx.setLineWidth(2)  //设置线宽
    for (var i = 0; i < numSlot; i++) {
      //计算半径
      radCtx.beginPath()
      var rdius = mRadius / numSlot * (i + 1)
      //画6条线段
      for (var j = 0; j < numCount; j++) {
        //坐标
        var x = mCenter + rdius * Math.cos(mAngle * j);
        var y = mCenter + rdius * Math.sin(mAngle * j);
        radCtx.lineTo(x, y);
      }
      radCtx.closePath()
      radCtx.stroke()
    }
  },

  // 绘制连接点
  drawLinePoint: function () {
    radCtx.beginPath();
    for (var k = 0; k < numCount; k++) {
      var x = mCenter + mRadius * Math.cos(mAngle * k);
      var y = mCenter + mRadius * Math.sin(mAngle * k);

      radCtx.moveTo(mCenter, mCenter);
      radCtx.lineTo(x, y);
    }
    radCtx.stroke();
  },
  //绘制数据区域(数据和填充颜色)
  drawRegion: function (mData, color) {

    radCtx.beginPath();
    for (var m = 0; m < numCount; m++) {
      var x = mCenter + mRadius * Math.cos(mAngle * m) * mData[m][1] / 100;
      var y = mCenter + mRadius * Math.sin(mAngle * m) * mData[m][1] / 100;

      radCtx.lineTo(x, y);
    }
    radCtx.closePath();
    radCtx.setFillStyle(color)
    radCtx.fill();
  },

  // //绘制文字
  drawTextCans: function (mData) {

    radCtx.setFillStyle("rgba(53, 53, 53, 1)")
    radCtx.font = ' 30rpx'  //设置字体
    for (var n = 0; n < numCount; n++) {
      var x = mCenter + mRadius * Math.cos(mAngle * n);
      var y = mCenter + mRadius * Math.sin(mAngle * n);
      // radCtx.fillText(mData[n][0], x, y);
      //通过不同的位置，调整文本的显示位置
      if (mAngle * n >= 0 && mAngle * n <= Math.PI / 2) {
        radCtx.fillText(mData[n][0], x + 10, y + 5);
      } else if (mAngle * n > Math.PI / 2 && mAngle * n <= Math.PI) {
        radCtx.fillText(mData[n][0], x - radCtx.measureText(mData[n][0]).width - 7, y + 5);
      } else if (mAngle * n > Math.PI && mAngle * n <= Math.PI * 3 / 2) {
        radCtx.fillText(mData[n][0], x - radCtx.measureText(mData[n][0]).width+5 , y-10);
      } else {
        radCtx.fillText(mData[n][0], x-5 , y +5);
      }

    }
  },
  //画点
  drawCircle: function (mData, color) {
    var r = 5; //设置节点小圆点的半径
    for (var i = 0; i < numCount; i++) {
      var x = mCenter + mRadius * Math.cos(mAngle * i) * mData[i][1] / 100;
      var y = mCenter + mRadius * Math.sin(mAngle * i) * mData[i][1] / 100;

      radCtx.beginPath();
      radCtx.arc(x, y, r, 0, Math.PI * 2);
      radCtx.fillStyle = color;
      radCtx.fill();
    }

  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //雷达图
    this.drawRadar()
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //雷达图

    // this.drawEdge();
    // this.drawLinePoint();
    // this.drawTextCans();
    // this.drawCircle();
  },
})