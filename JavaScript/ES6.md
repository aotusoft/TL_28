# ECMAScript 6

let

const

- 不可修改
- 不存在变量提升
- 只在当前的块作用域内有效
- 会产生暂时性的死区

## 解构赋值

按照一定模式 从数组和对象中提取值 对变量进行赋值

### 数组

- 完全分解
- 不完全分解

```javascript
arr = ["xxx", "yyy", "zzz"]
let [aaa, bbb, ccc] = arr;

let [ddd, eee, fff, ggg = "www"] = arr;
```

- 变量值交换
- 数组嵌套
数组的解构赋值会受到属性的排列次序影响

### 对象

- 对象的解构赋值不会受到属性的排列次序影响 
- 变量名同属性名一致才能成功赋值

## 字符串

反引号拼接字符串

- repeat(重复次数)
- includes() 是否有指定字符串
- startsWith() 判断给定的字符串是否处在字符串的开始
- endsWith() 判断给定的字符串是否处在字符串的结尾
- padStart(n,字符串) 判断字符串是否满足n位 如果满足直接返回 如果不满足在前边补齐指定的字符串

## 数组

- Array.from() 将有类似数组或可遍历对象转换为数组
  > 数组深拷贝
- find() 找出数组中符合条件的第一个元素
- findIndex() 找出数组中符合条件的第一个元素索引
- for-of
  - keys() 遍历索引值
  - values() 遍历元素
  - entries() 遍历索引值和元素

## 数字

- Number.isFinite()
- Number.isInteger() 不发生隐式转换
- Math.trunc() 去除小数部分 返回整数部分
- Math.sign() 判断数字类型

进制

二进制 0b
八进制 0o
十六进制 0x

最小精度误差 

Number.EPSILON 

值接近于 2.2204460492503130808472633361816E-16，或者 2-52

误差如果小于这个值 可以认为已经没有意义了 即不存在误差

## 对象

如果对象的属性值是变量且与属性名一致 可省略属性值
- 对象的方法可以省略`function`
- 对象的属性名或者方法名可以是字符串的拼接，需要添加[]

```javascript
let username = 'root';
let password = 123;
let a = 'first'
let b = 'Name'
let c = 'eat'
let d = 'Food'
const connection = {
  username,
  password,
  // "firstName":"Zhang"
  [a + b]: 'Zhang',
  linkData:function () {
    console.log(`${this.username}可以连接数据来`)
  },
  [c + d]() {
    console.log('执行了！！！')
  }
}
```

- Object.assign(target,origin) 合并两个对象 返回一个新对象
- Object.is(xxx,yyy) 判断是否全等
- Object.getPrototypeof(实例化对象) 获取实例化对象的构造函数的原型

函数

```javascript
    // 1、对形参数赋值
    function demo1(x = 5) {
      console.log(x)
    }
    demo1()
    demo1(10)
    
    // 2、参数可以是数组的解构赋值
    let arr = ['java', 'web', 'C']
    function demo2([x, y, z, w = 5]) {
      console.log(x)
      console.log(y)
      console.log(z)
      console.log(w)
    }
    demo2(arr)
    
    // 3、参数可以对象的解构赋值
    function demo3({ pageNum, pageSize, length = 15 }) {
      console.log(pageNum)
      console.log(pageSize)
      console.log(length)
    }
    demo3({
      pageSize: 10,
      pageNum: 1,
    })
    // 4、rest参数：剩下的参数，返回一个数组
    function demo4(a, b, ...rest) {
      console.log(a)
      console.log(b)
      console.log(rest)
    }
    demo4(10, 20, 30, 40, 50)
```

rest参数 剩下的参数 返回一个数组

```javascript
function Rest(a,b, ...rest) {
  console.log(rest)
}
Rest(1,2,3,4,5,6)
```


## 数组扩展运算符

+ 遍历数组
+ 当作数组元素
+ 深拷贝
+ 数据解构赋值
+ 用户函数调用
+ 将伪数组转换为数组
+ 将`arguments`对象转换为数组
+ 合并多个数组

## 对象扩展运算符

+ 对象合并