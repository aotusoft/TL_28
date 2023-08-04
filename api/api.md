# API

## 定义

Application Programming Interface 应用程序编程接口 是一些内置的函数

## 类型

- 数据类API
  > `getMonth()/reverse()`
- BOMAPI 
- > `alert()/prompt()/log()`
- DOMAPI
  > `write()`

## DOM 对象

节点 元素 方法

### 结构树

- 文档(Document)
  > 一个网页可看作一个文档
- 元素(Element)
  > 标签
- 属性(Attribute)
  > 元素的属性(class/id/type)
- 节点
  > 网页中全部的内容均为节点(Document Element Attribute Comment)

### 操作

  操作DOM就是操作DOM中的节点
  
#### 获取

- 通过ID **单元素**
  > `document.getElementById()`
- 通过类名 **多元素**
  > `document.getElementsByClass()`
- 通过元素名 **多元素**
- 通过 `name` 属性名 **多元素**
- 通过 `querySelector()` **单元素**
  > 指定选择器的第一个元素
- 通过 `querySelectorAll()` **多元素**
  > 指定选择器的所有元素

### 事件

异步操作

触发 - 响应 的过程

三要素

- 事件源
  > 触发的元素或浏览器
- 事件类型
  > 事件触发的方式(鼠标事件 键盘事件 浏览器事件)
- 事件处理程序
  > 事件触发后指向的代码 通常是函数

语法
`事件源.事件类型 = 事件处理程序`

```javascript
// 在事件函数中 this 指向当前事件源
document.getElementById("btn").onclick = function () {
  
}

```

事件源

- `onclick()` 鼠标单击事件
- `ondbclick()` 鼠标双击事件
- `onmouseover()` 鼠标移入事件
- `onmouseout()` 鼠标移出事件
- `onmousedown()` 鼠标按下事件
- `onmouseup()` 鼠标抬起事件
- `onmouseup()` 鼠标抬起事件
- `onmouseenter()` 鼠标进入事件
- `onmouseleave()` 鼠标离开事件

移入移出和进入进出区别

`mouseenter`不会冒泡 它不会被它本身的子元素的状态影响到

`mouseover`就会被它的子元素影响到,在触发子元素的时候,`mouseover`会冒泡触发它的父元素


- `onfocus()` 获取焦点
- `onblur()` 失去焦点

- `onkeydown()` 键盘按下事件
- `onkeyup()` 键盘抬起事件

- `onload()` 浏览器加载完成事件
- `onscroll()` 浏览器滚动事件

位置
内部`script` 标签
行内元素
外部js文件

在事件函数中 this 指向当前事件源

表单元素

非表单元素

设置宽高

`xxx.height=yyy`
`xxx.width=yyy`

设置行内属性

`xxx.style.yyy=zzz`

带有连字符的CSS属性需要去掉连字符并大写第二个首字母

添加类名
`xxx.className= '类名' ` 会覆盖原有的类名

操作文本节点
 `innerText` 会覆盖其他内容
操作所有节点
 `innerHTML`