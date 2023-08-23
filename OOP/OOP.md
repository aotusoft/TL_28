# OOP

![img.png](img.png "面向对象")

Everything is object.

## 对象

对象是一个容器 封装了属性(property)和方法(method)

对象可理解为数据集  无序属性的集合

## 面向对象

将真实世界复杂关系抽象为一个个对象 然后由对象之间的分工与合作 完成对真实世界的模拟

### 秒懂

![img_1.png](img_1.png "面向对象秒懂")

### 特征

- 封装
- 继承
- 多态

### 创建对象

- 字面量创建
- `new Object()` 创建
- 工厂模式
  > `function www(xxx,yyy,zzz){}` 创建
- 构造函数
  > function Xxx(){}

实例化对象有默认的 `constructor` 属性 指向构造函数

```javascript

var fn1 = function () {
}
console.log(fn1.constructor) //f Function( )

var fn2 = new Function('num1', 'num2', "return num1+num2")
console.log(fn2(10, 20)) //30
```

### 判断

`instanceof`

### 内存

#### 内存分配

变量定义 函数声明

#### 内存使用

变量运算 操作 函数调用

#### 内存销毁

浏览器关闭 函数调用完成

JavaScript 拥有自主销毁内存的机制


## 原型

### 作用

- 节省内存空间
- 实现数据共享(继承)

考试

### 构造函数 实例对象 原型直接关系 

- 函数有 `prototype` 原型默认属性
  > `prototype` 本身为对象
- 构造函数 `prototype` 上的属性和方法可被实例化对象继承
- 对象有 `constructor` 属性，实例化对象的 `constructor` 属性指向构造函数
- `prototype` 也存在 `constructor` 属性  `constructor` 指向构造函数
  > `Xxx.prototype.constructor === Xxx`
- 对象有 `__proto__` 属性，实例化对象的 `constructor` 属性指向构造函数
  > `Xxx.__proto__ === Xxx.prototype`

![img_2.png](img_2.png)
  
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

## 原型链

Object 原型中的 `__proto__` 指向 `null`

### 查找规则

[//]: # (先从构造函数 -> 原型链 -> undefined)

最终指向 `null`

### 改变this指向

`call()`

- 进行函数的调用
- 改变 `this` 的指向 
  > 没有参数时 `this` 指向 `window`
  > 一个参数时 `this` 指向 该参数

`apply()`

- 进行函数的调用
- 改变 `this` 的指向
  > 没有参数时 `this` 指向 `window`

`bind()`

- 不会进行函数的调用
- 改变 `this` 的指向
  > 没有参数时 `this` 指向 `window`

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

原型对象的函数中的this指向

如果被实例化对象所调用 this指向实例化对象
如果被原型对象调用 this指向原型对象

new关键字底层原理

new关键字的作用
1、创建实例化对象
2、让构造函数中的this指向实例化对象
new关键字的底层原理

1、`var person = {}` 创建新对象
2、`Person.call(person)` 构造函数调用完成让this指向实例对象 所以实例对象就拥有了构造函数中的属性和方法
3、`p1.__proto__` 指向 `Person.protoType` 实例化对象的指针地址指向构造函数的原型 地址相同

```javascript
function Person(name) {
  this.name = name;
}
Person.prototype.age = 18;

var person = new Person("小明");
```

### 继承

#### 原型继承

#### 构造继承

#### 拷贝继承

## 函数

调用方式

函数名()

`call()`/`apply()`

自调用

```javascript
(function () {
  xxx
})()

var xxx = (function () {
  xxx
})()
```

对象中的调用

数组中的调用

函数作为参数调用

```javascript
function xxx(x) {
  x()
}
xxx(function () {
  console.log("xxx")
})
```

函数作为参数返回

```javascript
function xxx(x) {
  return x;
}
xxx(function () {
  console.log("xxx")
})
```

## 闭包

定义在一个函数内部的函数

作用 

获取父函数内部的变量

锁住父函数内部的变量

本质

让父函数相对于子元素成为永恒作用域

正则表达式

特定字符 元字符 限定符 其他符号

`var xxx = new RegExp()`

元字符

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
  > `^{n}$` 匹配必须重复 `n` 次
- `{n,m}` 匹配重复 `n` 到 `m` 次


Web 存储

localStorage 本地存储 永久存储

sessionStorage 会话存储 会话存储

- `length` 数据长度
- `setItem(key,value)` 存储数据
- `setItem(key)` 获取数据
- `removeItem(key)` 删除数据
- `clearItem(key)` 清空数据
- `key(index)` 获取index索引的key值