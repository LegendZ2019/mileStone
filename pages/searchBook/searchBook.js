// pages/searchBook/searchBook.js
Page({
  data: {
    searchedBook: [
      {
        bookName: "Nehaoa",
        pages: 50,
      }
    ],
    addBook:{
      bookName:"Nihaoa",
      pages: 60,
    }
  },

  add:function(event){
    var that = this;
    var pages=getCurrentPages();
    var prevPage = pages[pages.length-2];
    prevPage.setData({
      bookName:this.data.addBook.bookName,
      maxPage:this.data.addBook.pages
    }),
    console.log("bookName to be transfered:",that.data.addBook.bookName),
    console.log("pages to be transfered:",that.data.addBook.pages),
    console.log("targetBookName:",prevPage.bookName),
    console.log("targetPages:",prevPage),
    wx.navigateBack({
      delta: 1,
    })
  }

})