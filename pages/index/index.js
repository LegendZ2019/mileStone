//index.js
//获取应用实例
const DB = wx.cloud.database().collection("bookList")//设置数据库
const app = getApp()
var rate=0;

Page({
  
  
  data: {
    mileStoneList: [
      {
        bookName:"",
        mileStoneNum: 0,
        currentPage:50,
        maxPage:100,
        percent:80
      }
    ],
    
  },

  
  f0: function (event) {
    wx.navigateTo({
      url: '/pages/newMileStone/newMileStone',
    })
  },

  

  onLoad:function(){
   {
      let that = this;
      DB.get({
        success(res) {
          console.log("Get Succeeded", res),
            that.setData({
              mileStoneList: res.data,
            })
        },
        fail(res) {
          console.log("Get Failed", res)
        }
      })
        
    }
  },

  calc: function(){
    console.log(60/480*100)
  }


})
