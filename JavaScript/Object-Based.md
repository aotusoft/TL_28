# 基于对象

![img.png](img.png "面向对象")

**Everything is object.**

# 对象

对象是一个容器 封装了**属性(property)**和**方法(method)**
对象可理解为数据集  无序属性的集合

# 面向对象

将真实世界复杂关系抽象为一个个对象 然后由对象之间的分工与合作 完成对真实世界的模拟

## 秒懂

![img_1.png](img_1.png "面向对象秒懂")

## 特征

- 封装
- 继承
- 多态

## 创建对象

- 字面量创建
- `new Object()` 创建
- 工厂模式
  - `function www(xxx,yyy,zzz){}` 创建
- 构造函数
  - function Xxx(){}

实例化对象有默认的 `constructor` 属性 指向构造函数

```javascript

var fn1 = function () {
}
console.log(fn1.constructor) //f Function( )

var fn2 = new Function('num1', 'num2', "return num1+num2")
console.log(fn2(10, 20)) //30
```

## 判断

`instanceof`

## 内存

### 内存分配

变量定义 函数声明

### 内存使用

变量运算 操作 函数调用

### 内存销毁

浏览器关闭 函数调用完成
JavaScript 拥有自主销毁内存的机制


# 原型

## 作用

- 节省内存空间
- 实现数据共享(继承)

考试

## 构造函数 实例对象 原型直接关系 

- 函数有 `prototype` 原型默认属性
  - `prototype` 本身为对象
- 构造函数 `prototype` 上的属性和方法可被实例化对象继承
- 对象有 `constructor` 属性，实例化对象的 `constructor` 属性指向构造函数
- `prototype` 也存在 `constructor` 属性  `constructor` 指向构造函数
  - `Xxx.prototype.constructor === Xxx`
- 对象有 `__proto__` 属性，实例化对象的 `constructor` 属性指向构造函数
  - `Xxx.__proto__ === Xxx.prototype`

将公共的属性和方法挂载到原型上

```javascript
function Person(name) {
    this.name = name;
    // this.age = age;
    // this.sex = sex;
}

Person.prototype.age = "xxx";
Person.prototype.sex = "yyy";

new Person("aaa");
new Person("bbb");
```
基于原型拷贝

## Prototype和__proto__关系

### prototype 属性

- prototype 是函数对象特有的属性，它指向一个对象，这个对象就是实例化该构造函数后的对象的原型。
- 当使用 new 关键字创建一个对象实例时，该对象的 `__proto__` 属性就会指向构造函数的 prototype 属性。

## `__proto__` 属性：

`__proto__` 是每个对象（包括函数对象）都具有的属性，它指向该对象的原型。
在现代 JavaScript 中，推荐使用 `Object.getPrototypeOf()` 方法或者 `Object.setPrototypeOf()` 方法来访问或设置对象的原型，而不是直接使用 `__proto__`。

虽然 prototype 和 `__proto__` 都涉及原型链，但它们用途不同，一个是函数特有的，用于指定构造函数的原型，而另一个是每个对象实例都具有的，用于指向该对象的原型。在现代 JavaScript 中，更推荐使用 `Object.getPrototypeOf()` 和 `Object.setPrototypeOf()` 来操作原型链，而不是直接操作 `__proto__`。

# 原型链

`__proto__` 用于访问对象的原型，是 JavaScript 中的一个非标准属性

## 查找规则

[//]: # (先从构造函数 -> 原型链 -> undefined)

对象 -> 原型对象1 -> 原型对象2 -> ... -> Object.prototype -> null

 - **对象**：JavaScript 中的对象实例，拥有自己的属性和方法。
 - **原型对象1、原型对象2、...**：对象的原型链上的对象，通过 `__proto__` 属性或 `Object.create()` 方法连接起来。每个对象都有一个指向其原型的引用。
 - **Object.prototype**：所有对象的最终原型，即 Object.prototype。这是原型链的顶端，包含一些通用的属性和方法，如 toString()。
 - **null**：原型链的终点。当对象在原型链中找不到属性或方法时，查找会一直向上进行，直到达到 Object.prototype，最终到达 null，这意味着没有更多的原型可查找。

**最终指向 `null`**

## 改变this指向

### call()

- 进行函数的调用
- 改变 `this` 的指向 
  - 没有参数时 `this` 指向 `window`
  - 一个参数时 `this` 指向 该参数

### apply()

- 进行函数的调用
- 改变 `this` 的指向
  - 没有参数时 `this` 指向 `window`

### bind()

- 不会进行函数的调用
- 改变 `this` 的指向
  - 没有参数时 `this` 指向 `window`

```javascript
var name = "xxx";
var obj = {
  name: "yyy",
  getName:function () {
    console.log(this.name)
  }
}
obj.apply();
obj.getName.apply();
obj.apply();

var obg = {
  name: "yyy",
  getName:function () {
    console.log(this.name)
  }.bind()
}
```

## 原型对象的函数中的this指向

如果被实例化对象所调用 this指向实例化对象
如果被原型对象调用 this指向原型对象


## new关键字的作用

- 创建实例化对象
- 让构造函数中的this指向实例化对象

## new关键字的底层原理

1. `var person = {}` 创建新对象
2. `Person.call(person)` 构造函数调用完成让this指向实例对象 实例对象拥有构造函数中的属性和方法
3. `p1.__proto__` 指向 `Person.protoType` 实例化对象的指针地址指向构造函数的原型 地址相同

```javascript
function Person(name) {
  this.name = name;
}
Person.prototype.age = 18;

var person = new Person("小明");
```

# 继承

## 原型继承

## 构造继承

## 拷贝继承

# 函数

## 调用方式

函数名()

`call()`/`apply()`

### 自调用

```javascript
(function () {
  xxx
})()

var xxx = (function () {
  xxx
})()
```

## 对象中的调用

## 数组中的调用

## 函数作为参数调用

```javascript
function xxx(x) {
  x()
}
xxx(function () {
  console.log("xxx")
})
```

## 函数作为参数返回

```javascript
function xxx(x) {
  return x;
}
xxx(function () {
  console.log("xxx")
})
```

# 闭包

定义在一个函数内部的函数

## 作用 

- 获取父函数内部的变量
- 锁住父函数内部的变量

## 本质

让父函数相对于子元素成为永恒作用域

# 正则表达式

- 特定字符
- 元字符
- 限定符
- 其他符号

`var xxx = new RegExp()`

## 元字符

- `\d` 匹配至少一个数字字符
- `\D` 匹配至少一个非数字任意字符
- `\w` 匹配至少一个字母数字下划线字符
- `\W` 匹配至少有一个不是字母数字下划线字符
- `\s` 匹配至少任意的空白字符
- `\S` 匹配至少一个不是空白字符
- `\.` 匹配至少一个换行符
- `^` 匹配行首的文本
- `$` 匹配行尾的文本

限定符

- `*` 匹配重复0次或无限次
- `?` 匹配重复0次或1次
- `+` 匹配至少重复1次或无限次
- `{n}` 匹配至少重复 `n` 次
  - `^{n}$` 匹配必须重复 `n` 次
- `{n,m}` 匹配重复 `n` 到 `m` 次


# Web 存储

- localStorage 本地存储 永久存储
- sessionStorage 会话存储 会话存储

## 方法

- `length` 数据长度
- `setItem(key,value)` 存储数据
- `setItem(key)` 获取数据
- `removeItem(key)` 删除数据
- `clear()` 清空数据
- `key(index)` 获取index索引的key值