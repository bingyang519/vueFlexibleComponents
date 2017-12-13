# vue-flexible-components

> some vue components base on flexiblecomponents
基于手淘flexible.js的Vue组件

> **前言：**

> - 目前手头的移动端Vue项目是用手淘的[lib-flexible](https://github.com/amfe/lib-flexible/tree/master)作适配的，并用[px2rem](https://www.npmjs.com/package/px2rem)来自动转换成rem。关于lib-flexible和px2rem的配置，请移步 *[vue-cli 配置flexible](https://segmentfault.com/a/1190000011883121)*。
> - 由于使用rem作适配，导致现有的很多移动端UI框架不能与之很好的配合，往往需要大动干戈更改UI框架的样式，背离了使用UI框架达到快速开发的初衷。
> - 为了以后项目的组件复用，以及提高开发可复用组件的能力，特把平时项目中*常用的、简单的* 组件单独拎出来。
> - 此为小白之作，论代码质量、难易程度、复用度，远不及各位大佬之杰作，求轻喷。同时，也恳请各位，提出意见和建议，不胜感激！
> -  GitHub地址：[vue-flexible-components]()

## TextScroll -- 文字滚动

- ### 效果展示

- ### 使用说明
  - 组件位置：[src/components/TextScroll.vue]()
  - props

    | props| 说明 | 类型 | 可选值 | 默认值
    | - | - | - | - | - |
    | dataList | 滚动文字数据(由于数据结构不同，需更改组件内的渲染属性) | Array | | [ ] |
    | scrollType | 滚动效果 | String | 'scroll-up'</br>'scroll-up-linear'</br>'scroll-left'</br>'scroll-left-linear' | 'scroll-up'


---
## 持续更新中。。。
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
