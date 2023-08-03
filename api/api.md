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
