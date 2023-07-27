# 👣 JavaScript

## ✨ 特点

编程、脚本、解释性、动态类型、基于对象

编程语言：指计算机能够接受和处理的、具有一定语法规则的语言
脚本语言：直接解释执行，缩短了编写-编译-链接-运行过程
解释行语言：解释执行不需要编译，直接由解释器解析执行代码
动态类型语言：在运行时才确定数据类型
基于对象语言：非面向对象，而是具有某些面向对象的特征

## 作用

- 网页动画效果
- 前后端交互
- 服务端运行
- 客户端运行

## ✍️ 注释

### 单行注释

`// xxx`

### 多行注释

```javascript
/*
  xxx
*/
```

## 🌀 JavaScript 与 Java 关系

- JavaScript 是运行在客户端的编程语言
- Java 是运行在服务端的编程语言

## 组成部分

考试

- ECMAScript
  > 规定 Javascript 的语法 简称**ES**
  >
- DOM
  > Document Object Model 文档对象模型
  >
- BOM
  > Bowser Object Model 浏览器对象模型
  >

## 位置

内部 `script` 标签
外部js文件
在标签内
在浏览器控制台输入

## 变量

### 定义

变量：计算机内存中存储数据的标识符

### 声明

`var/const 变量名;`
声明并赋值
`var 变量名 = xxx;`
`var a,b,c;`
`var a=xxx,b=xxx,c=xxx;`
`a=xxx;` 不推荐

### 规则规范

规范

- 驼峰命名

规则

- 由字母、数字、下划线、$符号组成，不能以数字开头 不能使用连字符
- 不能是关键字和保留字
- 区分大小写

### 字面量

## 数据类型

基本数据类型

- number 数字
- string 字符串
- boolean 布尔
- null 空型
- undefined 未定义
- symbol 唯一值

引用数据类型

- array 数组
- function 函数
- object 对象
- set
- map

判断方式 `type_of` 返回值

### number 数字

可代表 八进制 十进制 十六进制 科学计数法
最大值 `Number.MAX_VALUE` 最小值 `Number.MIN_VALUE`
正无穷 `Infinity` 负无穷 `-Infinity`

#### NaN 非数值

`NaN` 数字类型

与任何值都不相等 包括他自己

`isNaN()` 判断是否为非数值

### string 字符串

`length` 长度
空字符串 字符串的长度为0
字符串的拼接
使用 `var a = '12.34'` 判断 `isNaN(a)` 时 `a` 发生隐式转换

隐式转换 不用人工干预的情况下进行的转换

### boolean 布尔

使用 `isNaN()` 判断时仍会发生隐式转换

### null 空型

使用 `typeof` 判断 `null` 时出现 `object` 为bug

### undefined 未定义

变量只定义未赋值时
会被隐式转换为0

## 数据转换

### 转换为 string

number/boolean --> toString() --> string
null/undefind --> String() --> string

### 转换为 boolean

number/string/null/undefind --> Boolean() --> boolean

`0` 和 `NaN` 转换为 `false`
`""` 转换为 `false`
`null` 和 `undefined` 转换为 `false`
`" "`

### 转换为 number

`Number()`  `parseInt()`   `parseFloat()`

undefind --> Number()/parseInt()/parseFloat() --> number (NaN)

null --> Number() --> number (0)
null --> parseInt()/parseFloat() --> number (NaN)

boolean (true) --> Number() --> number (1)
boolean (fasle) --> Number() --> number (0)
boolean (true/fasle) --> parseInt()/parseFloat() --> number (NaN)

string (""/"xxx") --> parseInt()/parseFloat() --> number (NaN)
string ("12x"/"12.45") --> parseInt() --> number (12)
string ("12.45") --> parseFloat() --> number (12.45)
string ("0xf") --> Number() --> number (15)

## 运算

### 算数运算

`+ - * / %`

toFixed(n)` 保留n位小数 返回字符串类型

### 一元运算

前置++  先运算再赋值

后置++ 先赋值再运算

<!-- ABCDEFGHIJKLNMOPQRSTUVWXYZ -->

<!-- abcdefghijklnmopqrstuvwxyz -->

### 逻辑运算

`&&  ||`

### 关系运算

`< > <= >= != == === !==`
`==` 只比较数值 不比较类型
`===` 恒等于

### 赋值运算

### 优先级

从高到低

- 一元运算符：包括递增（`++`）、递减（`--`）、逻辑非（`!`）等一元操作符。
- 乘法、除法和取模运算符：`*`、`/` 和 `%`。
- 加法和减法运算符：`+` 和 `-`。
- 关系运算符：`>`、`<`、`>=`、`<=`、`instanceof` 和 `in`。
- 相等运算符：`==`、`!=`、`===`、`!==`。
- 逻辑与运算符：`&&`。
- 逻辑或运算符：`||`。
- 条件（三元）运算符：`?` `:`。
- 赋值运算符：`=` `+=` `-=` 等。

## 流程控制

### 顺序结构

从上到下执行的代码

### 分支结构

根据不同的情况执行对应的代码

```javascript
if () {

} else {

}
```

三目运算符

`switch case`

### 循环结构

`while`  `do while`

```javascript
for () {

}
```

`window.prompt(xxx,yyy)`  `xxx` 提示信息 `yyy` 默认值
返回值为字符串

## 🌠 高级
