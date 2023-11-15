# 🔃 AJAX

Asynchronous JavaScript and XML 用JavaScript执行异步网络请求

## 特点
局部加载 异步更新

## 过程

+ 创建Ajax对象
  > `let xhr = new XMLHttpRequest();`
+ 配置请求地址 方式 是否异步
  > `ajax.open(请求方式,请求地址,是否异步)`
+ 发起请求
  > `ajax.send()`
+ 服务器接收数据后进行判断
+ 向客户端返回数据
+ 客户端进行数据渲染

`onreadystatechange`

传参

GET

POST

配置请求头

- application/x-www-form-urlencoded 最早的post请求中，参数通过浏览器url传递，不支持文件上传
- multipart/form-data：可上传文件，也可键值对
- application/json json类型
- text/xml XML类型

xhr.send()

jQuery-AJAX

$.get()