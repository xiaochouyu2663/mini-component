const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    APPID: 'wxf2375a3e4afdce00',
    APPSECERT: '4e10c121cd69783b13253f36daa5ae62',
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      },
      {
        text: '第 10s 出现的弹幕',
        color: '#000',
        time: 10
      }],
    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ],
    nodes: "<h1 style='color:red;'>html标题</h1>",
    nodes1: [{
      name: "h1",
      attrs: {
        style: "color:red",
        class: "red"
      },
      children: [{
        type: "text",
        text: '结点列表标题'
      }]
    }],
    nodes2: [{
      name: "ul",
      attrs: {
        style: "padding:20px;border:1px solid blue;",
        class: "red"
      },
      children: [
        {
          name: "li",
          attrs: {
            style: "color:red",
            class: "red"
          },
          children: [{
            type: "text",
            text: '多层结点 无序列表'
          }],
        }, {
          name: "li",
          attrs: {
            style: "color:red",
            class: "red"
          },
          children: [{
            type: "text",
            text: '多层结点 无序列表1'
          }],
        }]
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   // this.getAccessToken(this.data.APPID, this.data.APPSECERT)
    // console.log(wx.canIUse('movable-area'))
    this.dialog = this.selectComponent("#dialog");
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  getAccessToken(APPID, APPSECERT) {
    try {
      var value = wx.getStorageSync('AccessToken')
      if (value) {
        if (new Date().getTime() - value.expires_in >= 7200000) {
          wx.request({
            url: 'https://api.weixin.qq.com/cgi-bin/token',
            data: {
              grant_type: 'client_credential',
              appid: APPID,
              secret: APPSECERT
            },
            method: 'GET',
            header: { 'content-type': 'application/json' },
            success: function (res) {
              var AccessToken = {
                'access_token': res.data.access_token,
                'expires_in': new Date().getTime()
              }
              try {
                wx.setStorageSync('AccessToken', AccessToken)
              } catch (e) {

              }
              return res.data.access_token
            },
            fail: function (error) {
              console.info(error);
            }
          })
        } else {
          console.log('已有token', value.access_token)
          return value.access_token
        }

      } else {
        wx.request({
          url: 'https://api.weixin.qq.com/cgi-bin/token',
          data: {
            grant_type: 'client_credential',
            appid: APPID,
            secret: APPSECERT
          },
          method: 'GET',
          header: { 'content-type': 'application/json' },
          success: function (res) {
            console.log(res)
            var AccessToken = {
              'access_token': res.data.access_token,
              'expires_in': new Date().getTime()
            }
            try {
              wx.setStorageSync('AccessToken', AccessToken)
            } catch (e) {

            }
            return res.data.access_token
          },
          fail: function (error) {
            console.info(error);
          }
        })
      }
    } catch (e) {
      console.log(e)
    }

  },
  play(){
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = true
    innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },
  showDialog() {
    console.log(this.dialog)
    this.dialog.showDialog();
  },

  //取消事件
  _cancelEvent() {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent() {
    console.log('你点击了确定');
    this.dialog.hideDialog();
  },
  onMyEvent: function (e) {
    e.detail // 自定义组件触发事件时提供的detail对象
    console.log(e)
  }



})