// pages/newMileStone/newMileStone.js
const DB = wx.cloud.database().collection("bookList")//设置数据库

Page({
  data: {
    bookName:"Hello World",
    maxPage:166,
    mileStoneNum:16,
    currentPage:58,
  },

  f1: function (event) {
    wx.navigateTo({
      url: '/pages/addFriend/addFriend',
    })
  },

  f2: function (event) {
    wx.navigateTo({
      url: '/pages/searchBook/searchBook',
    })
  },
// f3--发布函数
  f3: function (event) {
    var percent=(this.data.currentPage/this.data.maxPage)*100;
    DB.add({
      data:{
        bookName:this.data.bookName,
        mileStoneNum:this.data.mileStoneNum,
        maxPage:this.data.maxPage,
        currentPage:this.data.currentPage,
        percent:percent
      },
      success(res) {
        console.log("Add Succeeded", res)
      },
      fail(res) {
        console.log("Add Failed", res)
      }
    }),
    wx.redirectTo({
      url:"/pages/index/index",
    })

  },
// 测试函数
  temp: function(){
    console.log("书名",this.data.bookName)
  },

  selectCurrentPage:function(event){
    this.setData({
      currentPage:event.detail.value,
    })
  }

})