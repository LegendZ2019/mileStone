// pages/addFriend/addFriend.js
Page({

  data: {
    imgUrl:"",
  },



  firstCloudFunc(event) {
    wx.cloud.callFunction({
      name: "getID",
      success(res) {
        console.log("获取成功", res.result.openid)
      },
      fail(res) {
        console.log("获取失败", res)
      }
    })
  },


  selectImg(event) {
    let that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        console.log("选择成功",res)
        that.uploadImg(res.tempFilePaths[0])
      },
      
    })
  },

  uploadImg(imgUrl) {
    wx.cloud.uploadFile({
      cloudPath: 'qqser.png',
      filePath: imgUrl, // 文件路径
      success: res => {
        console.log(res.fileID),
        console.log("update Successed", res),
        this.setData({
          imgUrl:res.fileID
        })
      },
      fail: err => {
        // handle error
        console.log("upload failed", res)
      }
    })

  }
})