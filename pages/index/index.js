// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.init()
  },
  init() {
    const params = {
      // name 云函数的名称  建议使用 ty-service
      name: "ty-service",
      data: {
      // action 对应的接口名  具体接口可以参数 API 文档
          action: "user.wx-applet.synchronization",
      // params 接口参数
          params: {
                open_id: "cloud",
                app_schema: "cloud"
          }
      }
    };
    
    // 调用接口
    wx.cloud.callFunction(params).then(res =>{
        console.log('获取用户 id', res);
        this.getTicket(res.result.data.uid)
        this.getGid(res.result.data.uid)
        
    }).catch(err => console.log('err', err))
  },
  getTicket(uid) {
    const params2 = {
      // name 云函数的名称  建议使用 ty-service
      name: "ty-service",
      data: {
      // action 对应的接口名  具体接口可以参数 API 文档
          action: "system.userTicket",
      // params 接口参数
          params: {
            uid: uid,
          }
      }
    };
    
    // 调用接口
    wx.cloud.callFunction(params2).then(res2 =>{
        console.log('获取用户票据', res2);
    }).catch(err => console.log('err', err))
  },
  getGid(uid) {
    const params = {
      // name 云函数的名称  建议使用 ty-service
      name: "ty-service",
      data: {
      // action 对应的接口名  具体接口可以参数 API 文档
          action: "home.memberHomeList",
      // params 接口参数
          params: {
                uid: uid,
          }
      }
  };
  
  // 调用接口
  wx.cloud.callFunction(params).then(res =>{
      console.log('res', res);
  }).catch(err => console.log('err', err))
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
  jumpTo() {

    wx.navigateTo({
      url: `plugin://tuya-ap-plugin/step1?ticket=${ticket}&clientId=${clientId}`,
    });
  }
})