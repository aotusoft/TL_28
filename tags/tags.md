# 🍂 标签

# 📑 表格标签

`<table></table>`表格标签
`<tr></tr>`行标签
`<td></td>`单元格标签
`<caption></caption>`表格标题标签
`<thead></thead>`表头标签
  **添加thead标签后 tr标签要替换成th**
`<tbody></tbody>` 表主体
`<tfoot></tfoot>` 表尾

eg:

```html
<table border="1">
  <caption></caption>
  <thead>
      <th>
          <td></td>
          <td></td>
          <td></td>
      <th>
  </thead>
  <tbody>
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
    </tbody>
</table>
```

不加border属性默认无边框

## 属性

- `border` 边框
- `cellspacing` 外边框间距
- `cellpadding` 内边框间距
- `width` 宽度
- `height` 宽度
`align` 水平位置
  - `left` 靠左
  - `center` 居中
  - `right` 靠右

**⚠️ Attention**

> `table`标签中只能使用caption/thead/tbody/tfoot/th/tr标签
> `cption`标签中只能在`table`中使用
> `td`和`th`标签中可以使用**任意**标签

## 合并单元格

先判断是跨行还是跨列合并

- `rowspan` 跨行合并
- `colspan` 跨列合并

# 📰 表单标签

`<form></form>` 用来提交数据

## 属性

- action 表单提交的地址
- method 表单提交的方法

`novalidate` 表单或表单域不需要验证 在提交表单时开始验证 **H5新特性**

# 标记标签

`<lable></lable>`

`for=""`属性值与`input`标签的`id=""`绑定时，可通过点击label标签获得input标签焦点

# ✏️ input

## 属性

- type 属性
- value 值
- placeholder 提示信息
- name 名称

## type 表单域

- text 文本框
- password 密码框
- radio 单选框
  当name值相同时才会单选效果
  单选框中的默认选中需要加入`checked="checked"`/`checked="true"`/`checked`属性
- checkbox 复选框
- select-option组合标签 下拉类别
  默认选择 `selected="selected"`/`selected="true"`/`selected`
- textarea 多行文本框

- H5新特性
  - email 自动验证是否有@字符
  - url 自动验证是否有http字符
  - number 自动验证是否为数字
  - search 右侧有清空按钮
  - range 滑动范围
  - ⏲️ time 可选择时间
  - 📆 date 可选择日期
- reset 重置按钮
  按钮的禁用 `disabled="disabled"` `disabled="true"` `disabled`
- submit 提交按钮
  `required` 必选项 **H5新特性**
  `maxlegth` `minlegth` 验证长度 在输入时就开始验证 **H5新特性**
  `autofocus` 自动获得焦点 **H5新特性**

# HTML5新标签

- 😃 `header` 头部标签
  - `nav` 导航标签
- 💪 `section` 区间标签
  - `aside` 侧导航标签
  - `article` 文章标签
  - `button` 按钮标签
- 🦶 `footer` 底部标签

# 新增表单分组标签

- `fieldset` 分组标签
  - 自动生成边框
- `legend` 组名标签
  - 会显示在左上角的边框线上

# 新增多媒体标签

- audio 音频标签
  controls 显示控制器
  loop 循环播放
  muted 静音播放

- video 视频标签
  controls 显示控制器
  loop 循环播放
  muted 静音播放
  width 宽度
  height 高度
   宽高不影响视频内容
