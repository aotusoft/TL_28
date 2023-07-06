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
