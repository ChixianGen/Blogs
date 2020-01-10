# ES6笔记

es6 ECMscript 规范
## let、const
- 1、声明变量

## let、var
- 1、不存在变量提升
- 2、同一个作用于下不能重复定义同一个名称
- 3、有严格的作用域
  
### 变量提升区别  
- var：
```js
console.log(c);
var c='c'
//undefined

//等同于

var c;
console.log(c)
c='c'
```

let：
```js
console.log(c);
let c='c'

//报错
VM71:1 Uncaught ReferenceError: b is not defined
    at <anonymous>:1:13
```

### 不能重复定义
let：
```js
let t=1;
let t=100;//不能重复定义
console.log(t)

//报错
VM82:2 Uncaught SyntaxError: Identifier 't' has already been declared
```

- FAQ
```js
let t=1;
t=100;//改变值是可以的；
console.log(t)

// 100
```

### 严格作用域

- var 函数作用域
```js
function fun(){
    var n=10;
    if(true){
        var n=100
    }
    console.log(n)
}

fun()
//100

console.log(n);
//报错啦
```

- let 块级作用域，在一对{}内
```js
function fun(){
    let n=10;
    if(true){
        let n=100
    }
    console.log(n)
}

fun()
//10

console.log(n);
//报错啦
```

## const 
- 声明一个只读的`常量`，一旦声明，常量的值就不能改变
- 一定初始化，不能只声明不赋值
- 数组和对象可以添加对应的值。
```js
const obj={}
obj.name="hello"

const arr=[];
arr.push(1);
```

### 箭头函数
0. 语法简洁

`fn=()=>{}`
```js
let f=v=>v;
等同于
let f=function(v){
    return v
}
```

1. 没有this，this从属于函数所处上下文中的this，任何方式都`无法改变this`的指向；
```js
fucntion fn(x){
    return function(y){
        return x+y;
    }
}
// 等同于
let fn=x=>y=>x+y;
```

::: danger 注意
回调函数的this指向window；
:::


1. 箭头函数没有arguments（类数组）只能给予...arg获取传递的参数集合（数组）
```js
fn=(..arg)=>{
    console.log(...arg)
}
```

3. 箭头函数不能被new执行。箭头函数没有this，没有protype属性；
```js
let fn=()=>{
    this.x=200
}
```

## set、map数据结构

- set：类似于数组，成员是唯一的
- map： 类似于对象

### set
```js
const s=new Set();
s.add(1).add(2).add(3).add(2)
```
- 数组去重
```js
var arr=[1,2,2,2,1,43,5,5,4,5,6,6]
var arr1=new Set(arr)
// arr1:Set(6) {1, 2, 43, 5, 4, …}

// 变为数组
var arr2=[...new Set(arr)]
```

### map

```js
const m=new Map()
m.set('name','yating').set('age','18');

// 遍历map
for(let i of m){
    console.log(i)
}

// VM191:6 (2) ["name", "yating"]
// VM191:6 (2) ["age", "18"]


for(let [key,value] of m){
    console.log(key,value)
}
// name yating
// age 18
```

## web work
- 构造函数，加载分线程执行的js文件
- 