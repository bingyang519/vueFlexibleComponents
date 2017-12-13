<template>
  <div class="PageTextScroll">
        <h6>scrollType : scroll-up</h6>
        <text-scroll
            :dataList="data"
            scrollType="scroll-up"
        >
        </text-scroll>
        <h6>scrollType : scroll-up-linear</h6>
        <text-scroll
            :dataList="data"
            scrollType="scroll-up-linear"
        >
        </text-scroll>
        <h6>scrollType : scroll-left</h6>
        <text-scroll
            :dataList="data"
            scrollType="scroll-left"
        >
        </text-scroll>
        <h6>scrollType : scroll-left-linear</h6>
        <text-scroll
            :dataList="data"
            scrollType="scroll-left-linear"
        >
        </text-scroll>
        <div class="use">
            <h5>使用说明</h5>
            <ul>
                <li>
                    <span>props</span>
                    <span>说明</span>
                    <span>类型</span>
                    <span>可选值</span>
                    <span>默认值</span>
                </li>
                <li>
                    <span>dataList</span>
                    <span>滚动文字数据(由于数据结构不同，需更改组件内的渲染属性)</span>
                    <span>Array</span>
                    <span></span>
                    <span>[]</span>
                </li>
                <li>
                    <span>scrollType</span>
                    <span>滚动效果</span>
                    <span>String</span>
                    <span>'scroll-up''scroll-up-linear''scroll-left''scroll-left-linear'</span>
                    <span>'scroll-up'</span>
                </li>
            </ul>
        </div>
  </div>
</template>
<script>
import TextScroll from '@/components/TextScroll'
export default {
    name: 'PageTextScroll',
    data() {
        return {
            data: [
                {id: 1, text: '放低fdfdfd辅导辅导辅导费辅导辅导辅导打发打发姿态'},
                {id: 2, text: '努力进取'},
                {id: 3, text: '勇于探索'},
                {id: 4, text: '乐于分享'}
            ]
        }
    },
    components: {
        TextScroll,
    }
}
</script>
<style scoped>
.PageTextScroll h6{
    font-size: 28px;/*px*/
    padding: 0.4rem;
}
</style>
