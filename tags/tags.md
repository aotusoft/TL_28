# 🍂 标签

## 📑 Table

`<table></table>`表格标签

`<tr></tr>`行标签

`<td></td>`单元格标签

`<caption></caption>`表格标题标签

`<thead></thead>`表头标签
> 添加thead标签后 tr标签要替换成**th**

`<tbody></tbody>` 表主体

`<tfoot></tfoot>` 表尾

eg:

```html
<table border="1">
    <tr>
        <td></td>
        <td></td>
        <td></td>
    <tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    <tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    <tr>
</table>
```

不加border 默认无边框

### 属性

border 边框

cellspacing 外边框间距

cellpadding 内边框间距

width 宽度

height 宽度

algin 水平位置

- left 靠左
- center 居中
- right 靠右

### ⚠️ Attention

> table标签中只能使用caption/thead/tbody/tfoot/th/tr标签
> cption标签中只能在table中使用
> td和th标签中可以使用**任意**标签

### 合并单元格

先判断是跨行还是跨列合并

- rowspan 跨行合并
- colspan 跨列合并

## :newspaper: 表单

用来提交数据

### 🔰 form

#### 属性

- action 表单提交的地址
- method 表单提交的方法

### label 标签

`lable`的属性值`for=""`与`input`的`id=""`绑定时,可通过点击label获得input的焦点

### ✏️ input

#### 属性

- type 属性
- value 值
- placeholder 提示信息
- name 名称

#### type 表单域

- text 文本框
- password 密码框
- radio 单选框
  > 当name值相同时才会单选效果
  单选框中的默认选中需要加入`checked="checked"`/`checked="true"`/`check`属性
- checkbox 复选框
- select-optin组合标签 下拉类别
  > 默认选择 `selected="selected"`/`selected="true"`/`selected`
- textarea 多行文本框
- reset 重置按钮
  > 按钮的禁用 `disabled="disabled"`/`disabled="true"`/`disabled`
- submit 提交按钮

## HTML5新增元素

- header 头部标签
  - nav 导航标签