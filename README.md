这里是关于小程序封装的基础组件
___
1.ws-input组件
  示例：
  ```<ws-input label-text="用户名" placeholder="请输入用户名"></ws-input>```
  
  |属性名|类型|默认值|说明|
  |:-|:-:|:-:|:-|
  |label-text|String||输入框label的文字|
  |label-width|String||输入框label的宽度|
  |label-align|String|center|输入框label的对齐方式|
  |label-color|String|#aaa|输入框label的颜色|
  |placeholder|String||输入框为空时的占位符|
  |type|String|text|输入框的类型|
  |bindinput|EventHandle||当键盘输入时，触发input事件，event.detail = {value, cursor}，处理函数可以直接return一个字符串，将替换输入框的内容。|
  

 
