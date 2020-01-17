# 总结
## 闭包

### 定义
- 是一个密闭的容器，类似于set，map，存储数据
- 闭包是一个对象，存放数据的格式 ： key：value

### 形成条件
- 要有函数嵌套
- 内部函数引用外部函数的局部变量，外部函数调用

```js
function fn(){
    var a=1;
    return function(){
        console.log(a)
    }
}
var fn2=fn();
fn2();
fn2();
```

### 作用
- 延长外部函数变量的生命周期
- 从外部访问函数内部的局部变量

### 缺点
- 内存泄漏
- 不及时清除闭包容易导致内存溢出

## 如何避免
- 减少使用
- 及时清除，销毁闭包 用完设置为null

### 使用场景
- 遍历函数
- 传参

```js
var a=1;
console.log(a++)
console.log(++a)
console.log(++a)
console.log(a++)
console.log(a)
1
3
4
4
5
```

### 闭包编写模板
```js
function module(){
    var str='hello',
    function getStr(){
        return str
    }
    return{
        getStr:getStr
    }
}

// 使用

console.log(module().getStr())


(function module(window){
    var str='hello',
    function getStr(){
        return str
    }
    window.module={
        getStr:getStr
    }
})(window)

使用：
module.getStr()
```

### 闭包面试输出题
```js
function fn(n,o){
    console.log(o)
    return{
        fn:function(m){
            return fn(m,n)
        }
    }
}
var a=fn(0)//undefined
//这时 n=0，o=undefined
// a={
//     fn:function(m){
//         return fn(m,0)
//     }
// }

a.fn(1)
// 0
a.fn(2)
//0
a.fn(3)
//0


var b=fn(0).fn(1).fn(2).fn(3)
// undefined
// 0
// 1
// 2
```

## 函数
fun()
1. 自调用：fun()==>window.fun();
2. new fun():this==>实例对象
3. fun.call(obj):this==>obj


## console

可以测试一段程序执行的时间
- console.time('A')
- console.timeEnd('A')

## 函数


## Symbol
Symbol是ES6中新增的类型，它创建出来的值是唯一的；
```js
Symbol('123')==Symbol('123')//false
```
对象的属性名不能是对象，遇到对象属性名，会默认转为字符串；

## 判断url是否为正确
1. 协议: http、https、ftp
2. 域名: www.xxx.com、 xxx.cn、xxx.bbb.ccc.com.cn
3. 请求路径: /index.html /xxx/ 
```js
let str="https://www.yating.online/api?num=1&page=5"
let reg=/^(https|http|ftp):\/\/)?(([\w-]+\.\.)+[a-z0-9]+)((\/[^/]*)+)?(\?[^#]+)?(#.+)$/i;
```

## 公有私有方法
```js
function Foo(){
    Foo.a=function(){
        console.log(1)
    }
    this.a=function(){
        console.log(2)
    }
}
// 吧Foo当做类，在原型上设置实例公有属性方法
Foo.prototype.a=function(){
    console.log(4)
}
//把foo当做普通对象设置私有属性方法 
Foo.a=function(){
    console.log(3)
}

Foo.a();//3
new obj=new Foo();//会执行Foo();替换之前的
obj.a();
Foo.a();

// 结果为：3，2，1
```

## 作用域
### 全局
### 局部
局部作用域：函数定义的时候产生，作用域定义好，就一直存在，且不会反复定义

## 垃圾回收机制
### 技术清除 
看内存的地址上有几个指针指向，当一块内存地址身上指针个数为0，说明这块内存马上要被回收

```js
var obj={a:1}
obj=null
```

- IE低版本、老的chrome
- 慢慢淘汰

### 标记清除
进入代码执行的环境以后检测到需要使用的变量就在其身上加一个进场标记，代码执行完毕就在身上添加出场标记

## 同步和异步

### 同步
- 同步会阻塞后面的代码执行
- 没有回调

### 异步
- 异步是非阻塞
- 异步一定有回调

## 单线程
- 代码从上到下执行
- 同步& 一步，同步任务会导致阻塞
- 同步代表，alert()，console.log()，赋值语句


