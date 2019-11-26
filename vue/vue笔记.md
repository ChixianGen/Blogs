# vue笔记

## 指令

### v-cloak
防止闪现表达式，与css配合：
```js
<div v-cloak>{{msg}}</div>
```

```css
// 匹配属性选择器：[]
[v-cloak]{
    display:none
}
```

### 自定义
1. el:指令属性所在的标签对象
2. binding：包含指令相关信息数据的对象

全局：
```js
//v-upper-text指令的写法
Vue.directive('upper-text',function(el,binding){
    el.textContent=binding.value.toUpperCase();
})
```

局部:
```js
directives:{
    'lower-text':function(el,binding){
        el.textContent=binding.value.toUpperCase();
    }
}
```

## Vue插件

### vue的插件库的创建
```js
(function(){
    // 向外暴露的插件对象
    const MyPlugin={}
    // 插件对象必须要有一个install
    MyPlugin.install=function(Vue,options){
        // 1、添加全局方法或属性
        Vue.myGlobalMethod=function(){
            //Vue函数对象的方法
        }
        // 2、添加全局资源
        Vue.directive('my-directive',function(el,binding){
            // 指定的操作
        }) 
        // 3、添加实例方法
        Vue.prototype.$myMethod=function(){
            // Vue实例对象的方法
        }
    }
    // 最后向外暴露
    window.MyPlugin=MyPlugin
})
```
引用插件

```js
// 声明使用
Vue.use(MyPlugin)
//内部会执行MyPlugin.install(Vue)
```