Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /*组件的属性列表 */
  properties: {
    labelText:{
      type:String,
      value:null
    },
    labelWidth:{
      type:String,
      value:'0'
    },
    labelAlign:{
      type:String,
      value:'center'
    },
    labelColor:{
      type:String,
      value:'#aaa'
    },
    placeholder:{
      type:String,
      value:''
    },
    type:{
      type:String,
      value:'text'
    }
  },

  /*组件的初始数据 */
  data: {

  },

  /* 组件的方法列表*/
  methods: {
    mybindinput:function(){
      this.triggerEvent('input', {})
    },
    inputchange: function (e) {
      e.detail // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('input', e.detail, myEventOption)
    }
  },
  attached:function(){
    //console.log(this)
  }
})
