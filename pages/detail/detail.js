// pages/detail/detail.js
var common = require('../../utils/common')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // isAdd:false,
    // article:{
    //   id:'264698',
    //   title:'锦屏中学喜提理科榜眼，看锦屏中学近十年高考的成功是如何做到的',
    //   poster:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2263167153,2720139363&fm=26&gp=0.jpg',
    //   content:'所谓量子通信是指利用量子纠缠效应进行信息传递的一种新型的通讯方式，是近二十年发展起来的新型交叉学科，是量子论和信息论相结合的新的研究领域。光量子通信主要基于量子纠缠态的理论，使用量子隐形传态（传输）的方式实现信息传递。光量子通信的过程如下：事先构建一对具有纠缠态的粒子，将两个粒子分别放在通信双方，将具有未知量子态的粒子与发送方的粒子进行联合测量（一种操作），则接收方的粒子瞬间发生坍塌（变化），坍塌（变化）为某种状态，这个状态与发送方的粒子坍塌（变化）后的状态是对称的，然后将联合测量的信息通过经典信道传送给接收方，接收方根据接收到的信息对坍塌的粒子进行幺正变换（相当于逆转变换），即可得到与发送方完全相同的未知量子态。经典通信较光量子通信相比，其安全性和高效性都无法与之相提并论。安全性-量子通信绝不会“泄密”，其一体现在量子加密的密钥是随机的，即使被窃取者截获，也无法得到正确的密钥，因此无法破解信息；其二，分别在通信双方手中具有纠缠态的2个粒子，其中一个粒子的量子态发生变化，另外一方的量子态就会随之立刻变化，并且根据量子理论，宏观的任何观察和干扰，都会立刻改变量子态，引起其坍塌，因此窃取者由于干扰而得到的信息已经破坏，并非原有信息。高效，被传输的未知量子态在被测量之前会处于纠缠态，即同时代表多个状态，例如一个量子态可以同时表示0和1两个数字， 7个这样的量子态就可以同时表示128个状态或128个数字：0~127。光量子通信的这样一次传输，就相当于经典通信方式的128次。可以想象如果传输带宽是64位或者更高，那么效率之差将是惊人的。 量子通信从理论上的定义而言，并没有一个非常严格的标准。在物理学中可以将其看作是一个物理极限，通过量子效应就能实现高性能的通信。而在信息学中，量子通信是通过量子力学原理中特有的属性，来完成相应的信息传递工作。量子通信同传统的通信方式相比较，有一些比较突出的特点，例如安全性比较高，还有就是传输的过程中不容易受到阻碍。当量子态在不被破坏的情况下，在传输信息的过程中是不会被窃听，也不会被复制的，所以严格意义上来看，它是绝对安全的。而在无障碍的传输中，两个分离的量子，无论分离得有多远，当一个量子变化的时候，另一个也会产生相应的变化。根据应用途径，量子通信可分为：量子密码通信、量子远程传态和量子密集编码等。按其所传输的信息内容分为是经典通信和量子通信而分为两类。前者主要传输量子密钥，后者则可用于量子隐形传态和量子纠缠的分发。',
    //   add_date:"2020-7-25"
    // }
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id;
    console.log(id);
    let result = common.getNewsDetail(id)
    if(result.code=='200'){
      this.setData({article:result.news})
    }

    //检查是否已收藏
    var article = wx.getStorageSync(id)
    if(article!=''){
      this.setData({isAdd:true})
    }else{
      this.setData({isAdd:false})
    }
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

  },
  addFavorites(options){
    console.log(options);
    let article = this.data.article;
    wx.setStorageSync(article.id, article); //添加到本地缓存
    this.setData({isAdd:true})
  },
  cancelFavorites(){
    let article = this.data.article;
    wx.removeStorageSync(article.id); //移除
    this.setData({isAdd:false})
  }
})