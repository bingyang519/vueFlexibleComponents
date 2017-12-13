<template>
  <div class="Index">
      <h6>基于 flexible.js 的 Vue 组件</h6>
      <ul>
          <router-link to='/TextScroll' tag="li">
              <span>文字滚动</span>
              <em>&gt;</em>
          </router-link>
      </ul>
  </div>
</template>
<script>
export default {
    name: 'Index'
}
</script>

<style scoped>
.Index h6{
    width: 100%;
    text-align: center;
    padding: 0.4rem 0;
    font-size: 30px;/*px*/
    background: #fff;
}
.Index ul{
    margin-top: 0.3rem;
    background: #fff;
    padding: 0 0.4rem;
}
.Index ul li{
    padding: 0.3rem 0;
    display: flex;
    justify-content: space-between;
}
.Index ul li span{
    font-size: 28px;/*px*/
}
.Index ul li em{
    font-size: 30px;/*px*/
}
</style>
