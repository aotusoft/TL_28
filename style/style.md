# 🌈 CSS

## 定义

Cascading Style Sheets 层叠样式表，级联样式表

## 作用

为了美化网页
标签中的属性不能满足所有样式的需求
标签中的属性会使页面变得臃肿
为了实现结构与样式的相分离

## 用法

- 行内样式表(内联样式表)
  > `<开始标签 style="css属性名A;css属性值A;css属性名B:css属性值B">`
  >> 只能作用于单个的标签
     没有实现结构与样式的相分离
- 内部样式表

  ```html
    <style>
        选择器 {
            css属性名A: css属性值A;
            css属性名B: css属性值B;
    </style>
   ```

   > 作用于选择器相同的标签
     部分实现了结构与样式的相分离

- 外部样式表
  > 在外部建立后缀名为css的文件

  ```html
    <link rel= "stylesheet" href="./css/style.css" /> 
  ```

  > 作用于整个站点所有页面
    完全实现了结构与样式的相分离

## 样式

### 字体样式

- `font-size` 字体大小
  > 默认16px Chrome中最小设置12px
- `font-family` 字形
  > 还可以使用unicode编码

  ```css
  font-family: \6977\4F53
  ```
- `font-weight` 字重
  > 无单位
- `font-style` 字体样式
  > 可用 `italic`/`oblique`/倾斜

### 外观样式

### 背景样式

### 盒子模型

### 浮动

### 定位

### CSS3动画 过渡 转换
