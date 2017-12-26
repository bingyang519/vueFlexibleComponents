# vue-flexible-components

> some vue components base on flexible<br>
基于手淘 flexible.js 的 Vue 组件

> **前言：**
> - 目前手头的移动端Vue项目是用手淘的 [lib-flexible](https://github.com/amfe/lib-flexible/tree/master) 作适配的，并用 [px2rem](https://www.npmjs.com/package/px2rem) 来自动转换成rem。关于lib-flexible和px2rem的配置，请移步 *[vue-cli 配置 flexible](https://segmentfault.com/a/1190000011883121)*。
> - 由于使用rem作适配，导致现有的很多移动端UI框架不能与之很好的配合，往往需要大动干戈更改UI框架的样式，背离了使用UI框架达到快速开发的初衷。
> - 为了以后项目的组件复用，以及提高开发可复用组件的能力，特把平时项目中*常用的、简单的* 组件单独拎出来。
> - 此为小白之作，论代码质量、难易程度、复用度，远不及各位大佬之杰作，求轻喷。同时，也恳请各位，提出意见和建议，不胜感激！
> -  GitHub地址：[vue-flexible-components](https://github.com/bingyang519/vueFlexibleComponents)

## [TextScroll -- 文字滚动](https://segmentfault.com/a/1190000012432631)

- ### 效果展示
  ![效果展示](https://sfault-image.b0.upaiyun.com/210/767/2107671534-5a3267d06e99b_articlex)
- ### 使用说明
  - 组件位置：[src/components/TextScroll.vue](https://github.com/bingyang519/vueFlexibleComponents/tree/master/src/components)（不能npm，只能手动下载使用）
  - 下载并放入自己项目中 —— import 引入组件 —— components中注册组件 —— 使用
  - props

    | props| 说明 | 类型 | 可选值 | 默认值
    | - | - | - | - | - |
    | dataList | 滚动文字数据<br>(由于数据结构不同，需更改组件内的dom结构) | Array | | [ ] |
    | scrollType | 滚动效果 | String | 'scroll-up'</br>'scroll-up-linear'</br>'scroll-left'</br>'scroll-left-linear' | 'scroll-up'
  - 示例
    ```
    <text-scroll
        :dataList="data"
        scrollType="scroll-up"
    >
    </text-scroll>
    ```
## [Toast -- 显示框](https://segmentfault.com/a/1190000012580979)

- ### 效果展示
  ![效果展示](https://sfault-image.b0.upaiyun.com/408/670/4086701058-5a40edd6eec66_articlex)
- ### 使用说明
  - 组件位置：[src/components/TextScroll.vue](https://github.com/bingyang519/vueFlexibleComponents/tree/master/src/components)（不能npm，只能手动下载使用）
  - 下载并放入自己项目中 —— import 引入组件 —— components中注册组件 —— 使用
  - props

      | props| 说明 | 类型 | 可选值 | 默认值 |
      | - | - | - | - | - |
      | toastShow | 控制显示框显示、隐藏。需添加[.sync修饰符](https://cn.vuejs.org/v2/guide/components.html#sync-修饰符)才能自动关闭，详见例子 | Boolean| false</br>true | false |
      | message| 提示信息 | String |  |  |
      | iconClass| icon小图标| String| success</br>warning</br>close |  |
      | iconImage| 自定义小图标(图片需require引入) |  | |  |
      | duration| 定时器(毫秒)，控制弹框显示时间，负数代表不执行定时任务| Number|  | 1500 |
      | position| 弹框位置（距顶） | String |  | '50%' |

  -  $emit

      | $emit| 说明 | 参数 |
      | - | - | - |
      | toastClose| 弹框关闭回调 |  |

   - 示例
      ```vue
        // 默认效果，只有提示信息
        <toast
            message = '默认信息'
            :toastShow.sync = 'isShow1'  // 需添加.sync修饰符，才能达到自动关闭的效果，否则只能监听toastClose手动关闭
        ></toast>                        // 关于sync的说明，请看官网（主要是为了达到双向数据绑定，子组件修改父组件状态）

        // 增加自带小图标
        <toast
            message = 'success'
            iconClass = 'success'
            :toastShow.sync = 'isShow2'
        ></toast>
      ```
      ```vue
        // 自定义类型
        <toast
            message = '自定义'
            position = '70%'
            :duration = '-1'  //负数代表不执行定时任务，自己根据需要去关闭
            :iconImage='bg'   // 自定义icon小图标，在data中需require引入，看下面
            :toastShow = 'isShow5'  // 因为需要手动关闭，所以不需要.sync了
            @toastClose = 'isClose5'  // 监听回调，手动关闭，看下面
        ></toast>

        data() {
            return {
                this.isShow5 : true,
                bg: require('../assets/logo.png'), // 图片必须用require进来
            }
        },
        isClose5() {
            setTimeout(()=>{
                this.isShow5 = false;
            }, 2000)
        }
      ```

---
## 持续更新中。。。
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8780
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
