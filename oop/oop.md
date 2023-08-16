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
\
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

## 判断

`instanceof`