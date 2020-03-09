// pages/config/config.js
Page({
  firstCloudFunc (event){
    wx.cloud.callFunction({
      success(res){
        console.log("获取成功",res)
      },
      fail(res){
        console.log("获取失败",res)
      }
    })
  }
})