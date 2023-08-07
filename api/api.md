# 🏘️ API

## ✏️ 定义

Application Programming Interface 应用程序编程接口 是一些内置的函数

## 🍎 类型

- 数据类API
  > `getMonth()/reverse()`
  >
- BOMAPI
  > `alert()/prompt()/log()`
  >
- DOMAPI
  > `write()`
  >

## 📝 DOM 对象

节点 元素 方法

### 🏗️ 结构树

- 文档(Document)
  > 一个网页可看作一个文档
  >
- 元素(Element)
  > 标签
  >
- 属性(Attribute)
  > 元素的属性(class/id/type)
  >
- 节点
  > 网页中全部的内容均为节点(Document Element Attribute Comment)
  >

### 📍 位置

- 内部 `script` 标签
- 行内元素
- 外部js文件
  **在事件函数中 this 指向当前事件源**

### 🛠️ 操作

  操作DOM就是操作DOM中的节点

#### 🔰 获取

- 通过ID **单元素**
  > `document.getElementById()`
  >
- 通过类名 **多元素**
  > `document.getElementsByClass()`
  >
- 通过元素名 **多元素**
- 通过 `name` 属性名 **多元素**
- 通过 `querySelector()` **单元素**
  > 指定选择器的第一个元素
  >
- 通过 `querySelectorAll()` **多元素**
  > 指定选择器的所有元素
  >

### 🎿 事件

异步操作

触发 - 响应 的过程

三要素

- 事件源
  > 触发的元素或浏览器
  >
- 事件类型
  > 事件触发的方式(鼠标事件 键盘事件 浏览器事件)
  >
- 事件处理程序
  > 事件触发后指向的代码 通常是函数
  >

#### 📖 语法

`事件源.事件类型 = 事件处理程序`

```javascript
// 在事件函数中 this 指向当前事件源
document.getElementById("btn").onclick = function () {
  
}
```

#### 事件源

- `onclick()` 鼠标单击事件
- `ondbclick()` 鼠标双击事件
- `onmouseover()` 鼠标移入事件
- `onmouseout()` 鼠标移出事件
- `onmousedown()` 鼠标按下事件
- `onmouseup()` 鼠标抬起事件
- `onmouseup()` 鼠标抬起事件
- `onmouseenter()` 鼠标进入事件
- `onmouseleave()` 鼠标离开事件
- `onfocus()` 获取焦点
- `onblur()` 失去焦点

**移入移出和进入进出区别**

`mouseenter()` 或 `onmouseleave()` 不会冒泡 父元素不会被子元素的状态影响

`mouseover()` 或 `onmouseout()` 会被子元素影响 在触发子元素时会冒泡触发它的父元素

在子元素中设置 `stopPropagation()` 阻止冒泡行为 或者设置父元素事件解绑

考试

- `onkeydown()` 键盘按下事件
- `onkeyup()` 键盘抬起事件
- `onload()` 浏览器加载完成事件
- `onscroll()` 浏览器滚动事件

##### 解绑事件

`事件源.事件类型 = null`

#### 监听事件

`事件源.addEventListener(事件类型,事件处理程序)`

任何事件都有内置 `event` 对象

- `target` 当前事件源信息
- `type` 事件类型

`client` `page`
均为事件触发点距离左上角的像素值

`clientX` 和 `clientY` 不包含滚动条卷去的像素值

##### 解绑事件

`事件源.removeEventListener(事件类型,事件处理程序)`

#### 键盘事件

`keycode`

#### 阻止默认事件

`对象.preventDefault()`

考试

#### 属性

`对象.getAttribute(元素属性)` 获取元素属性的属性值

`对象.setAttribute(元素属性)` 设置元素属性的属性值

`对象.removeAttribute(元素属性)` 移除元素属性和属性值

##### 修改元素样式

- 对象.style
- 对象.className
- 对象.setAttribute("style",yyy)
- 对象.setAttribute("class",yyy)
- 对象.setProperties(CSS属性,CSS属性值)

考试

### 非表单元素

#### 设置宽高

`xxx.height=yyy`
`xxx.width=yyy`

#### 设置行内属性

`xxx.style.yyy=zzz` 带有连字符的CSS属性需要去掉连字符并大写第二个首字母

#### 添加类名

`xxx.className= '类名'` 会覆盖原有类名

#### 操作文本节点

 `innerText` 会覆盖其他内容

#### 操作所有节点

 `innerHTML`

## 节点特征

- nodeType 节点类型
- nodeName 节点名称
- nodeValue 节点值

`getAttributeNode()` 获取元素指定属性名的属性节点

`firstChild` 获取元素的文本节点

> 元素的第一个子节点为文本节点

firstChild 文本节点

innerText 文本内容

|          | 元素节点   | 属性节点       | 文本节点 | document  |
| -------- | ---------- | -------------- | -------- | --------- |
| 节点类型 | 1          | 2              | 3        | 9         |
| 节点名称 | 大写标签名 | 属性名         | #text    | #document |
| 节点值   | null       | 属性名的属性值 | 文本内容 | null      |
