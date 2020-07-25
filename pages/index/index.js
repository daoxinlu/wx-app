var common = require('../../utils/common')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImg:[
      {src:'https://www.tsinghua.edu.cn/__local/5/3A/B3/6914F57891B6159DB07FB0DACDA_87E74253_7B0BF.jpg'},
      {src:'https://www.tsinghua.edu.cn/__local/1/EC/B5/933306C63EE516425B32DEB2582_B8565E01_43B7E.jpg'},
      {src:'https://www.tsinghua.edu.cn/__local/C/21/C2/FD8A0DC599E56F284221E23F91C_F2CD7723_6E75C.jpg'},
      {src:'https://www.tsinghua.edu.cn/__local/D/40/95/0B4FDE99CDB2B2F2921F0AA58B8_020BA18D_1909D.jpg'},
    ],
  },
  goToDetail:function(e){
    let id = e.currentTarget.dataset.id;
    // console.log(id)
    wx.navigateTo({
      url:'../detail/detail?id='+id
    })
  },
  clearAllStar(){
    wx.clearStorage()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let list = common.getNewsList()
    this.setData({newsList:list})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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