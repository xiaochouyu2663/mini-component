Page({

  data: {
    canIUse: wx.canIUse('rich-text'),
    nodes: [{
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
    }],
    markers: [{
      iconPath: "/static/images/logo.png",
      id: 0,
      title:'当前位置',
      latitude: 39.0864,
      longitude: 117.122215,
      width: 30,
      height: 30,
      rotate: 360,
      alpha: 0.6,
      callout:{
        content:'鑫茂科技园',
        color:'#ff0000',
        fontSize:'18',
        borderRadius:'20',
        bgColor:'#ffff00',
        padding:'5',
        display:'ALWAYS'
      },
      label:{
        content:'科技公司'
      }
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/static/images/logo.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }],
    location:{
      latitude:'',
      longitude:''
    },
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    },
    item1: {
      index: 1,
      msg: 'this is a template',
      time: '2017-09-15'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var self = this;
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        console.log('当前地里位置',res)
        self.setData({
          'location.latitude': res.latitude,
          'location.longitude': res.longitude,
          'markers[0].latitude': res.latitude,
          'markers[0].longitude': res.longitude,
        })
        var mapContext=wx.createMapContext('map')
        mapContext.getCenterLocation({
          success: function (res) {
            console.log(res.longitude)
            console.log(res.latitude)
          }
        })
      },
      fail:function(err){
        console.log(err)
      }
    })
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
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})