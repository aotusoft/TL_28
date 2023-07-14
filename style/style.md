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

  > 内容相对于当前元素的位置
  > 不能让元素内的块状元素居中
  > 行内元素与行内块元素添加属性无效
  >
- `line-height` 高度位置

  > 无法让行内块元素垂直居中
  > 让当前元素中没有设置高度的块状元素设置高度
  > 属性值小于高度，垂直靠上
  > 属性值大于高度，垂直靠下
  > 属性值等于高度，垂直居中
  >

### 👘 外观样式

- `color` 字体颜色

  > 可用 英文名称/rbg*a*()/HEX/hsl() 形式表示 **可添加透明度**
  > hsl() **CSS3 新特性**
  >
  >> h hus 色调 0或者360是红色 120是绿色 240是蓝色
  >> s saturation 饱和度 0%低饱和 100%高饱和
  >> l lightness 亮度
  >>
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
  >
- `background-size` 背景尺寸

  > `background-size: 宽度 高度`
  > 100% 替换
  >
- `background-position` 背景位置

  > 第一种方式 使用 `left` `right` `top` `bottom`
  > 第二种 使用百分比 向右为正 向下为正
  > 第三种 使用像素 向右为正 向下为正
  >

### 📮 盒子模型

 盒子模型 包括 边框border 内边距padding 外边距margin

网页布局的本质：拼接盒子的过程

#### 边框

需要具备width color style属性

solid 实线 dashed 虚线 dotted 点线 double 双实线

边框会影响盒子的尺寸

#### 内边距

内容与边框直接的距离

特点

- 内边框影响盒子尺寸
- 综合设置

#### 外边距

元素与其他元素之间的距离

不影响盒子尺寸

行内元素设置垂直方向的外边距无效

盒子的水平居中 margin:0 auto

> 需要为块状元素
>
> 需要设置宽高
>
> 相邻元素垂直外边距将会合并（外边距塌陷）

对于两个嵌套关系的块元素，如果父元素没有上内边距及边框，则父元素的上外边距会与子元素的上外边距发生合并，合并后的外边距为两者中的较大者

解决影响

- 父元素中设置overflow:hidden
- 添加上边框
- 添加内边框

### 🐬 浮动

标准流（文档流） 元素按照本身的特性进行排列布局

浮动 元素脱离标准流 移动的指定位置的过程

浮动初衷 文字环绕图片的效果

特点：

- 添加浮动的元素会漂浮在其他元素上方
- 浮动的元素不会占据位置
- 同时浮动的多个元素会在同一行显示
- 添加浮动的元素不会超过父元素的范围
- 浮动的元素不会覆盖边框和内边距
- 浮动的元素拥有行内块元素的特性
- 浮动后的子元素无法撑开父元素高度（子元素不占位置）
  > 通过清除浮动解决
  >

#### 清除浮动的方法

- **额外标签法** 给子元素添加额外的兄弟元素和 `clear`属性

  > 添加了对于页面结构无意义的标签
  >
- **伪元素法** 给父元素添加 `::after` 伪元素

  > 该伪元素向父元素内部末尾添加内容
  > 本质上与额外标签法相同
  > IE6一下不支持
  >

  ```css
  xxx::after{
    content:'';
    display: block;
    clear:both;
  }
  ```
- 给父元素添加 `overflow: hideen`属性

  > 会让多余内容隐藏
  >

**考试** **overflow: hidden作用**

- 隐藏溢出的内容
- 清除嵌套元素外边距合并所带来的影响
- 清除浮动

### 📍 定位

`position`将元素固定到指定位置

#### 特点

- 相对于谁定位
- 是否脱离标准流
- 是否占位置
- 是否超出父元素位置
- 配合边偏移量使用 `left` `right` `top` `bottom`

#### 相对定位

`position:relative`

- 相对原元素的原位置定位
- 不脱离标准流
- 占位置
- 会超出父元素范围

#### 绝对定位

`position:absolute`

- 如果父元素没有定位 则相对于浏览器视口定位
- 如果父元素有相对定位 则相对于父元素视口定位(子绝父相)
- 脱离标准流
- 不占位置
- 会超出父元素范围

#### 固定定位

`position:fixed`

- 相对于浏览器定位
- 脱离标准流
- 不占位置
- 会超出父元素范围

#### 静态定位(默认)

`position:static`

相当于标准流

### 浮动与定位区别

不同:
浮动不会超出父元素范围 三种定位均可
相同:
浮动 绝对 固定 都会脱离标准流 且不占位置

### CSS高级

#### 元素的显示与隐藏

隐藏

- `display:none`
  > 没有删除元素 HTML结构仍然存在
  > 不占位置
  >
- `visibility:hidden`
  > 没有删除元素 HTML结构仍然存在
  > 仍占位置
  >
- `opacity:0`

显示

- `display:block`
  > 与 `display:none` 相对应
  >
- `visibility:visible`
  > 与 `visibility:hidden` 相对应
  >
- `opacity:1`
  > 与 `opacity:0` 相对应
  >

#### 溢出元素的显示与隐藏

`overflow` 属性

- `overflow:hidden` 隐藏溢出元素
- `overflow:scroll` 设置滚动条
- `overflow:auto` 自适应显示滚动条

`word-break` 属性

- 默认根据半角空格或连接符换行
- `word-break:break-all` 在单词中换行

#### 文本显示省略号

`white-space:nowarp`强制文本在同一行显示
`overflow:hidden` 隐藏溢出元素
`text-overflow:ellipsis` 文本显示省略号

#### 鼠标指针

`cursor`

`cursor:default` 默认指针
`cursor:pointer` 指向指针
`cursor:text` 输入指针
`cursor:move` 移动指针

#### 轮廓

`outline:0`

#### 防止多行文本框拖动

`resize:0`

消除同行相邻行内块元素的默认间距

- 将其转换为块元素 然后浮动
- 父元素添加 `font-size:0`

#### 行内块元素右侧文本或行内元素相对于行内块元素垂直居中

向行内块元素添加  `vertical-align:middle` 属性

#### 给图片添加外边距后 另一个相邻图片也会有外边距

给添加外边距的图片 再加上 `vertical-align: top` 属性

#### 精灵图

减轻服务器压力

将多张小图片拼接在一张大图上，通过背景的位置属性 `background-position`属性移动到指定的小图上

在CSS中水平向右是正方向 垂直向下是正方向

#### ICONFONT

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

按照给定的属性，选择所有匹配的元素 **（CSS3 新特性）**

**语法：**`attr` `attr=value` `attr~=value` `attr|=value` `attr^=value` `attr$=value` `attr*=value`

**例子：**`autoplay` 选择所有具有 `autoplay` 属性的元素（不论这个属性的值是什么）

```html
<style>
  [type]{
    background-color: red;
  }
  [type_a]{
    background-color: red;
  }
  [type_a='p']{
    background-color: aliceblue;
  }
  [type_a^='p']{
    background-color: deepskyblue;
  }
  a[type_a^='p']{
    background-color: deepskyblue;
  }
</style>
<input type="text">
<div type_a="div"></div>
<p type_a="p"></p>
<p type_a="p_1"></p>
<p type_a="p_2"></p>
<a type_a="p_2" herf="#"></a>
```

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

`:` 伪选择器支持按照未被包含在文档树中的状态信息来选择元素 （CSS3 新特性）

**例子：**`a:visited` 匹配所有曾被访问过的 `<a>`元素

`::` 伪选择器用于表示无法用 HTML 语义表达的实体

**例子：**`p::first-line` 匹配所有 `<p>`元素的第一行

## 🐖 伪类

### `<a></a>`标签

- `:link` 链接未连接前
- `:hover` 鼠标移入时

  > 适用于所有标签
  >
- `:active` 鼠标点击时

  > 适用于所有标签
  >
- `:visited` 链接连接后




- `:first-child` 选中父元素的第一个子元素
- `:last-child` 选中父元素的最后一个子元素
- `:nth-child(n)` 选中父元素的第n个子元素
- `:nth-of-type(n)` 选中父元素的第n个子元素

## 伪元素

Element **CSS3 新特性**

- `::first-letter` 选择第一个字母或汉字
- `::first-line` 选择第一行文本
- `::after` 给当前元素末尾添加子元素
- `::before` 给当前元素开头添加子元素

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

## 三大特性

### 继承

高度和宽度无法继承 由元素本身特性决定

元素本身的样式优先级大于继承的样式

继承遵循亲代就近继承

### 层叠

选择器相同的情况下 位于后面的优先级大于前面的

### 优先级

在同一元素中  通配符选择器<标签选择器<类选择器<ID选择器<内部元素样式<!important

特殊

#### 复合选择器对比权重

|       | 千位 | 百位 | 十位 | 个位 |
| ----- | ---- | ---- | ---- | ---- |
| 标签  | 0    | 0    | 0    | 1    |
| 类名  | 0    | 0    | 1    | 0    |
| ID    | 0    | 1    | 0    | 0    |
| style | 1    | 0    | 0    | 0    |

权重相同时 再对比

## CSS3样式

### 阴影

`text-shadow:水平阴影 垂直阴影 模糊程度 颜色`
`box-shadow:水平阴影 垂直阴影 模糊程度 颜色`

### 边框圆角

 `border-radius: 左上 右上 右下 左下`
 `border-radius: 左上 右上左下 右下`
 `border-radius: 左上右下 右上左下`

- 属性值为高度一半时
- 属性值为50%时 为椭圆

### 怪异盒模型

`box-sizing:bordr-box`

### CSS3 背景

背景色剪切

- `background-clip:border-box` 背景色默认覆盖边框 内边距 内容
- `background-clip:padding-box` 背景色覆盖内边距 内容
- `background-clip:content-box` 背景色覆盖内容
  
背景图剪切

- `background-origin:border-box` 背景图默认覆盖边框 内边距 内容
- `background-origin:padding-box` 背景图覆盖内边距 内容
- `background-origin:content-box` 背景图覆盖内容

BFC
Block Formatting Context 格式化上下文 一个独立的容器

浮动