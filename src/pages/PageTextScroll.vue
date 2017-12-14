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
  </div>
</template>
<script>
import TextScroll from '@/components/TextScroll'
export default {
    name: 'PageTextScroll',
    data() {
        return {
            data: [
                {id: 1, text: '放低姿态'},
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
