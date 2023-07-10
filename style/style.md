# 🌈 CSS

## ❄️ 定义

Cascading Style Sheets 层叠样式表，级联样式表

## ⛄️ 作用

为了美化网页
标签中的属性不能满足所有样式的需求
标签中的属性会使页面变得臃肿
为了实现结构与样式的相分离

## 🌁 用法

- 行内样式表(内联样式表)

```html
<开始标签 style="css属性名A;css属性值A;css属性名B:css属性值B">
```

> 只能作用于单个的标签
> 没有实现结构与样式的相分离

- 内部样式表

  ```html
  <style>
      选择器 {
        css属性名A: css属性值A;
        css属性名B: css属性值B;
  </style>
  ```

  > 作用于选择器相同的标签
  > 部分实现了结构与样式的相分离
  >
- 外部样式表

  > 在外部建立后缀名为css的文件
  >

  ```html
  <link rel= "stylesheet" href="./css/style.css" /> 
  ```

  > 作用于整个站点所有页面
  > 完全实现了结构与样式的相分离
  >

## 🎨 样式

### ✒️ 字体样式

- `font-size` 字体大小

  > 默认16px Chrome中最小设置12px
  >
- `font-family` 字形

  > 还可以使用unicode编码
  >

  ```css
  font-family: \6977\4F53
  ```
- `font-weight` 字重

  > 无单位
  >
- `font-style` 字体样式

  > 可用 `italic`/`oblique`倾斜
  >
- `text-indent` 首行缩进

  > 需要使用**em**作为单位
  >
- `text-decoration` 字体间距

  > underline 下划线
  > overline 上划线
  > line-through 删除线
  >
- `letter-spacing` 字体间距
- `text-align` 水平位置

  > 内容相对于当前元素得位置
  >
- `line-height` 高度位置

  > 属性值小于高度，垂直靠上
  > 属性值大于高度，垂直靠下
  > 属性值等于高度，垂直居中
  >

### 👘 外观样式

- `color` 字体颜色
  > 可用 英文名称/rbg*a*()/HEX 形式表示 **可添加透明度**
  >
- `height` 高度
- `width` 宽度

### 🌠 背景样式

- `background-color` 背景颜色颜色

> 可用 英文名称/rbg*a*()/HEX 形式表示 **可添加透明度**
> 或添加 `opacity`属性

- `background-image` 背景图片
- `background-repeat` 重复
  > 参数 `repeat` 重复平铺 默认
  > `no-repeat` 不重复

- `background-size` 背景尺寸
  > `background-size: 宽度 高度`
  > 100% 替换
- `background-position` 背景位置
  > 第一种方式 使用 `left` `right` `top` `bottom`
  > 第二种 使用百分比 向右为正 向下为正
  > 第三种 使用像素 向右为正 向下为正

### 📮 盒子模型

### 🐬 浮动

### 📍 定位

### CSS3动画 过渡 转换

## 🎇 选择器

**CSS 选择器**规定了 CSS 规则会被应用到哪些元素上

**备注：** 暂时没有能够选择 父元素、父元素的同级元素，或 父元素的同级元素的子元素 的选择器或者组合器

### 基本选择器

#### 通用选择器

选择所有元素，可以将其限制为特定的名称空间或所有名称空间

**语法：**`*` `ns|*` `*|*`

**例子：**`*` 将匹配文档的所有元素

#### 元素选择器

按照给定的节点名称，选择所有匹配的元素

**语法：**`elementname`

**例子：**`input` 匹配任何 `<input>` 元素

#### 类选择器

按照给定的 `class` 属性的值，选择所有匹配的元素

**语法：**`.classname`

**例子：**`.index` 匹配任何 `class` 属性中含有 "index" 类的元素

#### ID 选择器

按照 `id` 属性选择一个与之匹配的元素需要注意的是，一个文档中，每个 ID 属性都应当是唯一的

**语法：**`#idname`

**例子：**`#toc` 匹配 ID 为 "toc" 的元素

#### 交集选择器

按照给定的节点名称和 `class` 属性的值，选择匹配的元素

**语法：**`elementname.classname`

**例子：**`p.index` 匹配段落标签中含 `class` 属性中含有 "index" 类的元素

#### 并集选择器

按照给定的节点名称和 `class` 属性的值，选择匹配的元素

**语法：**`elementname/#idname/.classname,elementname/#idname/.classname`

**例子：**`p,.index,#id` 匹配标签中含p标签  `class` 属性中含有 "index" 类  `id` 属性中含有 "id" 的元素

#### 属性选择器

按照给定的属性，选择所有匹配的元素

**语法：**`attr` `attr=value` `attr~=value` `attr|=value` `attr^=value` `attr$=value` `attr*=value`

**例子：**`autoplay` 选择所有具有 `autoplay` 属性的元素（不论这个属性的值是什么）

### 分组选择器（Grouping selector）

#### 选择器列表

`,` 是将不同的选择器组合在一起的方法，它选择所有能被列表中的任意一个选择器选中的节点

**语法：**`A, B`

**示例：**`div, span` 会同时匹配 `<span>`元素和 `<div>`元素

### 组合器（Combinator）

#### 后代组合器

""（空格）组合器选择前一个元素的后代节点

**语法：**`A B`

**例子：**`div span` 匹配所有位于任意 `<div>` 元素之内的 `<span>` 元素

#### 直接子代组合器

`>` 组合器选择前一个元素的直接子代的节点

**语法：**`A > B`

**例子：**`ul > li` 匹配直接嵌套在 `<ul>`元素内的所有 `<li>`元素

一般兄弟组合器

`~` 组合器选择兄弟元素，也就是说，后一个节点在前一个节点后面的任意位置，并且共享同一个父节点

**语法：**`A ~ B`

**例子：**`p ~ span` 匹配同一父元素下，`<p>`元素后的所有 `<span>`元素

#### 紧邻兄弟组合器

`+` 组合器选择相邻元素，即后一个元素紧跟在前一个之后，并且共享同一个父节点

**语法：**`A + B`

**例子：**`h2 + p` 会匹配_紧_邻在 h2元素后的第一个 `<p>`元素

#### 列组合器实验性

`||` 组合器选择属于某个表格行的节点

**语法：**`A || B`

**例子：**`col || td` 会匹配所有 `<col>`作用域内的 `<td>`元素

### 伪选择器（Pseudo）

`:` 伪选择器支持按照未被包含在文档树中的状态信息来选择元素

**例子：**`a:visited` 匹配所有曾被访问过的 `<a>`元素

`::` 伪选择器用于表示无法用 HTML 语义表达的实体

**例子：**`p::first-line` 匹配所有 `<p>`元素的第一行

## 🐖 伪类

- `:link` 链接未连接前
- `:hover` 鼠标移入时
  > 适用于所有标签
  >
- `:active` 鼠标点击时
  > 适用于所有标签
  >
- `:visited` 链接连接后

## 标签显示模式

### 分类

#### 块状元素

> h1~h6/p/div/ul/li/dd/dt/form/table/thead/tr/caption
> header/section/footer/nav/aside/article

- 有默认宽高 默认宽度是父元素的100% 高度由内容所撑起**table标签除外**
- 可设置宽高
- 可包含其他标签 **标题标签无法包含标题标签 p标签不能包含块元素 table只能**

#### 行内元素/内联元素

> span/a

- 有默认宽高 由内容撑起
- 无法设置宽高
- 只能包含行内元素

#### 行内块元素

> img/label/input/select/button

- 有默认宽高 有内容所撑起
- 可设置宽高
- 相邻的元素在同一行
- 一般不包含其他元素

### 元素间转换

CSS中设置 `display`属性

- `inline` 行内元素
- `inline-block` 行内块元素
- `block` 块状元素
