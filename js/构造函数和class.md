# 构造函数和class
## es6中class实现面向对象编程的新形式

```js

class Animal{
    // 每一个类中都有一个构造器，若没有指定构造器，那么这个构造器是隐形的，构造器的作用，就是每当new一个类，必然优先执行构造器中的代码
    constructor(name,age){
        this.name=name;//通过new实例的属性，叫做实例属性：dog.name
        this.age=age;
        // 静态属性，通过构造函数点出来的，直接访问到的属性叫做静态属性。构造函数名.属性
    }
    // 在class内部通过static修饰的属性就是静态属性，例如Animal.info;
    static info="白色的";
    //动物的实例方法
    say(){
        console.log("汪汪~")
    }
    //可以通过dog.say()来执行；
    //动物的静态方法
    static show(){
        console.log("yellow body")
    }
};
const dog=new Animal("大黄",3)
```

### 注意：
- 1、在class的{}区间内，只能写构造器，静态方法，静态属性，实例方法；
- 2、class关键字，还是用原来的普通构造函数，把class关键字称作语法糖

---

## 构造函数创建对象

```js
//构造函数创建对象
fucntion Person(name,age){
    this.name=name;
    this.age=age;
}
const student=new Person("tinger",12)
//实例方法
Person.prototype.say=function(){
    console.log("hello")
}
//可以通过使用student.say()来执行；

//静态方法
Person.show=function(){
    console.log("long hair");
}
//student.show()是无法用到的
```

