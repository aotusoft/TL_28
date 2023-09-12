# 🔍 jQuery

## 🚪 入口函数

- JavaScript 入口函数不能重复
- jQuery 入口函数可多次调用
- JavaScript 入口函数需加载外部文件完成后才会执行
- jQuery 只需要加载完 DOM 元素即可

```javascript
window.onload = function () {
    xxx
}
window.onload = function () {
    yyy
}
```

```javascript
jQuery(document).ready(function () {
    xxx
})
jQuery(document).ready(function () {
    yyy
})
```

### jQuery 入口函数可简写为

```javascript
$(function () {
    xxx
})
```

## css() 方法

- `css("属性名","属性值")`

同时设置多个属性

```javascript
css({
    xxx: xxx,
    "yy-zz": "yy-zz"
})
```

- `rgb("属性名") 获取属性值`
  > 获取到的颜色为rgb样式

### 过滤选择器

- `$("li:eq(x)") ` 选择第x个`li`元素
- `$("li:odd") ` 选择索引为奇数的`li`元素
- `$("li:even") ` 选择索引为偶数的`li`元素

### 筛选选择器

- `$("xxx").children()` 选择`xxx`的子代元素
  > $("xxx").children(".xxx")
- `$("xxx").find("yyy") ` 选择`xxx`的后代为`yyy`的元素
- `$("xxx").parent()` 选择`xxx`的父亲元素
- `$("xxx").parents()` 选择`xxx`的祖先元素
- `$("xxx").siblings()` 选择`xxx`的兄弟元素
  > `$("xxx").siblings(yyy)`
- `$("xxx").next()` 选择`xxx`的下一个兄弟元素
- `$("xxx").nextAll()` 选择`xxx`的所有下兄弟元素
- `$("xxx").prev()` 选择`xxx`的上个兄弟元素
- `$("xxx").prevAll()` 选择`xxx`的所有上个兄弟元素
- `$("xxx").eq(n)` 选择第`n`个`xxx`元素

## 🔙 返回值

- jQuery 返回 jQuery 对象
- JavaScript 中返回 DOM 对象

## 动画

- 隐藏/显示
  - hide()
  - show()
- 淡入/淡出
  - fadeIn()
  - fadeOut()
  - fadeToggle()
- 自定义动画
  > animate()
- stop() 停止动画或效果
```javascript
$("button").click(function(){
    $("div").animate({
      left:'250px',
      opacity:'0.5',
      height:'150px',
      width:'150px'
    });
});
```

## 事件

绑定

-`事件源.bind/on("事件类型","事件处理程序")`
-`事件源.bind/on({"事件类型":"事件处理程序","事件类型":"事件处理程序"})`

遍历

```javascript
$.each("数组/对象", function (index, item) {

})
$.each("对象", function (key, value) {

})
```

## DOM 操作



- $(xxx).width()
- $(xxx).height()
- $(xxx).outerWidth()
  > 返回元素宽度(包括内边距和边框) offsetWidth
- $(xxx).outerHeight()
  > 返回元素高度(包括内边距和边框) offsetHeight


添加

|      | 元素之前 | 元素之后  |
|------|----------|-----------|
| 内部 | append() | prepend() |
| 外部 | before() |  after()  |

删除

`remove()` 删除被选元素及其子元素 占位置

`empty()` 从被选元素中删除子元素 不占位置

