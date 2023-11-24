#  🎿 AJAX

1. AJAX(Asynchronous JavaScript and XML)异步的JavaScript和XML。
2. AJAX不是新的编程语言，而是一种使用现有标准的新方法。
3. AJAX最大的优点是在不重新加载整个页面的情况下，可以与服务器交换数
   据并更新部分网页内容。
4. AJAX可以使网页实现异步更新
5. AJAX不需要任何浏览器插件，但需要用户允许JavaScript在浏览器上执行。

> AJAX 是与服务器交换数据并更新部分网页的艺术，在不重新加载整个页面的情况下

# ✨ 特点

局部加载 异步更新

> **Google Suggest**
>
> 在 2005 年，Google 通过其 Google Suggest 使 AJAX 变得流行起来。
> 
> Google Suggest 使用 AJAX 创造出动态性极强的 web 界面：当您在谷歌的搜索框输入关键字时，JavaScript 会把这些字符发送到服务器，然后服务器会返回一个搜索建议的列表。


# 🏃‍♀️ 过程

- 创建XMLHttpRequest对象 （IE5和IE6使用 `ActiveXObject`）
    - `let xhr = new XMLHttpRequest();`
- 配置请求地址 方式 是否异步
    - `xhr.open(method,url,async)`
- 发起请求
    - `xhr.send()`
- 服务器接收数据后进行判断
- 向客户端返回数据
- 客户端进行数据渲染

| 方法                         | 描述                                                                                                                                                                 |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| open(_method_,_url_,_async_) | 规定请求的类型、URL 以及是否异步处理请求。<li> _method_：请求的类型；`GET` 或 `POST` <li> _url_：文件在服务器上的位置 <li> _async_：`true`（异步）或 `false`（同步） |
| send(_string_)               | 将请求发送到服务器。 <li> _string_：仅用于 `POST` 请求                                                                                                               |


# 🕰️ `onreadystatechange` 事件

每当 `readyState` 改变时，就会触发 `onreadystatechange` 事件。
`readyState` 属性存有 `XMLHttpRequest` 的状态信息。

## readyState

存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。

- 0: 请求未初始化
- 1: 服务器连接已建立
- 2: 请求已接收
- 3: 请求处理中
- 4: 请求已完成，且响应已就绪

在 onreadystatechange 事件中，我们规定当服务器响应已做好被处理的准备时所执行的任务。
当 readyState 等于 4 且状态为 200 时，表示响应已就绪

# 🛠️ Callback 函数

callback 函数（回调函数）是一种以参数形式传递给另一个函数的函数。

```javascript
function print(callback) {  
    callback();
}

print(function () {
  console.log("info")
})
```

# ❓ GET还是POST？

与POST相比，GET更简单也更快，并且在大部分情况下都能用。
然而，在以下情况中，应该使用POST请求：

1. 无法使用缓存文件（更新服务器上的文件或数据库）
2. 向服务器发送大量数据（POST没有数据量限制）
3. 发送包含未知字符的用户输入时，POST比GET更稳定也更可靠

配置请求头

- `application/x-www-form-urlencoded`
  最早的post请求中，参数通过浏览器url传递，不支持文件上传
- `multipart/form-data`
  可上传文件，也可键值对
- `application/json`
  JSON类型
- `text/xml`
  XML类型

# 👈 返回值

- `xhr.responseXML`
  返回XML格式数据  调用 `open()` 方法传入的URL需要为xml类型
- `xhr.responseText`
  返回String类型数据

# 💑 AJAX&jQuery

`$(selector).load(URL,data,callback)`

- **URL** 必需 规定您希望加载的 URL
- **data** 可选 规定与请求一同发送的查询字符串键值对集合
- **callback** 可选 参数是 `load()` 方法完成后所执行的函数名称

```javascript
$(selector).load(URL, data, function (data) {

})
```

只加载部分元素

```javascript
$(selector).load("x.html #id")
$(selector).load("x.html input")
```

# 🥊 GET vs. POST

- **GET** - 从指定的资源请求数据
- **POST** - 向指定的资源提文要处理的数据

使用jQuery中的Ajax，其中回调函数中只会返回请求成功的值，如果要得到请求失败的返回值需要使用`$.ajax()`方法或原生Ajax

## GET

`$.get(URL,callback)`

```javascript
$.get(URL, function (data, status) {

})
```

回调函数中的`data`为返回值中的`responseText`
**外部无法访问回调函数中的值 异步**

## POST

`$.post(URL,data,callback)`

```javascript
$.post(URL, {'a': 1, 'b': 2}, function (data) {

})
```

# 🌦️ ajax()

`$.ajax()` 方法通过 HTTP 请求加载远程数据。
该方法是 jQuery 底层 AJAX 实现。简单易用的高层实现可见 `$.get()`,`$.post()`等。$ajax() 返其创建的 XMLHttpRequest 对象。
大多数情况下无需直接使用该函数，除非需要操作不常用的选项，以获得更多的灵活性。
最简单的情况下，`$.ajax()`可以不带任何参数直接使用。

```javascript
$.ajax({
    url: 'text.txt',
    type: 'POST',
    async: true,
    data: {'a': 1, 'b': 2},
    success: function (data) {

    },
    error: function (data) {

    }
})
```

# 🥖 JSON

JSON: JavaScript Object Notation(JavaScript 对象表示法)

- JSON 是存储和交换文本信息的语法。类似 XML。
- JSON 比 XML 更小、更快，更易解析。
- JSON 是轻量级的文本数据交换格式
- JSON 独立于语言：JSON 使用 Javascript语法来描述数据对象，但是 JSON 仍然独立于语言和平台。JSON 解析器和 JSON 库支持许多不同的编程语言。 目前非常多的动态（PHP，JSP，.NET）编程语言都支持JSON。
- JSON 具有自我描述性，更易理解


# 📃 语法

JSON 语法是 JavaScript 对象表示语法的子集。

数据在名称/值对中、数据由逗号分隔、大括号保存对象、中括号保存数组。
名称/值对包括字段名称（在双引号中），后面写一个冒号，然后是值

JSON 值可以是：数字（整数或浮点数）、字符串（在双引号中）、逻辑值（true 或 false）、数组（在中括号中）、对象（在大括号中）、null

```javascript
let obj = {
    'name': 'abc',
    'age': 18
}
```

## 🌷 JSON 数组

```json
{ 
  "sites": [ 
    { "name":"菜鸟教程" , "url":"www.runoob.com" }, 
    { "name":"google" , "url":"www.google.com" }, 
    { "name":"微博" , "url":"www.weibo.com" } 
  ]
}

```

# 🥂 JSON 对象

- JSON 对象使用在大括号`{}`中书写
- 对象可以包含多个 `key/value` 对
- `key` 必须是字符串，`value` 可以是合法的 JSON 数据类型（字符串, 数字, 对象, 数组, 布尔值或 null）。
- `key` 和 `value` 中使用`:`分割
- 每个 `key/value` 对使用`,`分割
- 可以使用`.`来访问对象的值
- 也可以使用`[]`来访问对象的值


## 🥨 转换

- `let string = JSON.stringify(json)`
  JSON对象转换为字符串
- `let json = JSON.parse(string)`
  字符串转换为JSON对象

`eval()` 一般用于将数组格式的json字符串转换为数组json对象
也可以进行运算 `eval("1+8")`

# 🖇️ JSONP

Jsonp(JSON with Padding) 是 json 的一种"使用模式"，可以让网页从别的域名（网站）那获取资料，即**跨域读取数据**。
为什么我们从不同的域（网站）访问数据需要一个特殊的技术(JSONP)呢？这是因为**同源策略**。
同源策略，它是由 Netscape 提出的一个著名的安全策略，现在所有支持 JavaScript 的浏览器都会使用这个策略。
