# vuex笔记


单向数据流：view==》action==》state==》view

- state：驱动数据源
- view：以声明方式将state映射到视图
- action：响应在view上的用户输入导致的状态变化

```js
vue.use(vuex);
new vuex.Store({
store,
mutations,
actions,
})
```

## state
vuex管理的状态对象
```js
const state={
    count:1
}

// 使用方法
store.count;//1
```

### store对象


## mutations
直接更新state
```js
const mutations={}
```

## actions
分发事件
```js
this.$store.dispatch()
```
## getters

