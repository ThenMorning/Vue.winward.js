# Vue.winward.js
vue.js最简实现(the most simple vue.js)

> 让所有人都看得懂Vue原理

> 建议看完`代码`后，结合[mpvue源码解读](https://segmentfault.com/a/1190000016389413)
[单页应用路由实现没那么难--Vue](https://segmentfault.com/a/1190000015373559),再看一遍Vue源码

## Mind
- vue.js是一个响应式库，在这里我将它剖开:
- 实现响应式最少需要哪几个部分?
- * 数据跟踪
- * 模板编译
- * 页面渲染
- 所以你也可以看到功能性代码分到3个js文件中

## Done
- 数据跟踪 --- watchData.js
- 模板编译 --- complieData.js
- 页面渲染 --- renderData.js

## Todo
- 数据跟踪 --- 实例类型(本项目中 只有一个实例,而vue有 “`app`”，“`component`”等),props 
- 模板编译 --- 生命周期,语法糖
- 页面渲染 --- 虚拟dom

## Run Setup

- `双击index.html` (`click index.html`)

## Rendering

<img src="https://github.com/WinwardZ/Vue.winward.js/blob/master/rendering.gif">
