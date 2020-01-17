# class的子类继承

## 创建类
- 当有n个子类的时候，方法相同，就会显得代码冗余；这个时候就需要创建一个父类来继承；
```js
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sayhi(){
        console.log(this.nam,age,'hello')
    }
}
const a1=new Person("jack",12);
```

## 创建子类继承父类
```js
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sayhi(){
        console.log(this.nam,age,'hello')
    }
}

// 在class中可以使用extends关键字实现子类继承父类；
// 子类美国人
class American extends Person{}
const a1=new American('hello',12);
a1.sayhi();//报错, 数据没有传给父类
```

---

## 子类添加构造器方法
```js
class American extends Person{
    constructor(name,age){
        super(name,age);//调用父类的constructor
    }
}
const a1=new American('hello',12);
a1.sayhi();
// hello,12,hi
```


---

？1：为什么要在constructor使用super

- 如果子类通过extends关键字继承了父类，那么子类的constructor构造函数中，必须先调用一下super()；


？2：super()是什么
- super是一个函数，是父类的构造器；子类中的super，就是父类中，constructor的引用；


？3：调用super()以后，传的参变成undefined了；
- 子类的构造器的参数传给super

---

## 在子类中添加信息
给中国人添加身份证号
```js
// 子类中国人
class Chinese extends Person{
    // idNum是Chinese独有的，就不要挂载到super上
    constructor(name,age,idNum){
        // 在子类中，this只能放在super之后，否则会报错；
        super(name,age);
        this.idNum=idNum;
    }
}
```