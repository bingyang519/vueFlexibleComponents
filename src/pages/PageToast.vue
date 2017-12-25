<template>
  <div class="PageToast">
      <toast
        message = '默认信息'
        :toastShow.sync = 'isShow1'
      ></toast>

      <toast
        message = 'success'
        iconClass = 'success'
        :toastShow.sync = 'isShow2'
      ></toast>

      <toast
        message = 'warning'
        iconClass = 'warning'
        :toastShow.sync = 'isShow3'
      ></toast>

      <toast
        message = 'close'
        iconClass = 'close'
        :toastShow.sync = 'isShow4'
      ></toast>

    <!-- 注意：duration 使用v-bind绑定，'5000'才为Number类型，否则为String类型 -->
    <!-- 参考：https://cn.vuejs.org/v2/guide/components.html#字面量语法-vs-动态语法 -->
      <toast
        message = '自定义'
        position = '70%'
        :duration = '-1'
        :iconImage='bg'
        :toastShow = 'isShow5'
        @toastClose = 'isClose5'
      ></toast>

      <button @click="button1">default</button>
      <button @click="button2">icon--success</button>
      <button @click="button3">icon--warning</button>
      <button @click="button4">icon--close</button>
      <button @click="button5">自定义(位置、图片、时间)</button>
  </div>
</template>
<script>
import Toast from '@/components/Toast'
export default {
    name: 'PageToast',
    data() {
        return {
            isShow1: false,
            isShow2: false,
            isShow3: false,
            isShow4: false,
            isShow5: false,
            bg: require('../assets/logo.png'), // 图片必须用require进来
        }
    },
    components: {
        Toast
    },
    methods: {
        button1() {
            this.isShow1 = true
        },

        button2() {
            this.isShow2 = true
        },


        button3() {
            this.isShow3 = true
        },


        button4() {
            this.isShow4 = true
        },


        button5() {
            this.isShow5 = true
        },
        isClose5() {
            setTimeout(()=>{
                this.isShow5 = false;
            }, 2000)
        }
    }
}
</script>
<style scoped>
.PageToast button{
    width: 400px;
    height: 80px;
    line-height: 80px;
    font-size: 30px;/*px*/
    display: block;
    margin:100px auto 0;
    border:1px solid #999;/*no*/
    background: #fff;
    text-align: center;
}
</style>
