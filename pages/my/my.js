// pages/my/my.js
var common = require('../../utils/common')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self=this;
    
    // wx.login({
    //   success(res) {
    //     //js调用登陆命令获取到code
    //     if (res.code) {
    //       console.log(1)
    //       //通过code调用自己服务接口获取到openid
    //       wx.request({
    //         url: 'https://api.sopans.com/third/wxOpenId.php',
    //         data: {
    //           code: res.code
    //         },
    //         success:function(wxInfo){
    //           console.log(self.data);
    //           self.data.openid = wxInfo.data.openid
    //         }
    //       })
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // })
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
    if(this.isLogin)this.getMyFavorites()
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

  },
  getMyInfo(e){
    // await wx.getUserInfo({
    //   lang: lang,
    //   withCredentials: true,
    //   success: (result) => {},
    //   fail: (res) => {},
    //   complete: (res) => {},
    // })
    let info = e.detail.userInfo;
    // console.log(info)
    this.setData({
      isLogin:true,
      src:info.avatarUrl,
      nickName:info.nickName
    })
    this.getMyFavorites()
  },
  getMyFavorites(){
    let info = wx.getStorageInfoSync();
    console.log(info)
    let keys = info.keys
    // .filter((item=>item!='logs'));
    console.log(keys)
    let num = keys.length;
    let myList = []
    for(let i=0;i<num;i++){
      let obj=wx.getStorageSync(keys[i]);
      myList.push(obj)
    }
    this.setData({
      newsList:myList,
      num:num
    })
  },
  goToDetail(e){
    let id= e.currentTarget.dataset.id;
    wx.navigateTo({
      url:'../detail/detail?id='+id
    })
  },
  loginOut(){
    var that = this;
    this.setData({
      isLogin:false,
      src:'',
      nickName:''
    })
    
  }
})