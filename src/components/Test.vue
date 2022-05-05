<template>
  <div>
    <button @click="ishow=!ishow">显示隐藏</button>
    <div>
      <transition>
        <h1 v-show="ishow">你好啊</h1>
      </transition>
    </div>
  </div>
</template>

<script>
  //动画展示效果
  export default {
    data() {
      return {
        ishow: true
      }
    }

  }
</script>

<style scoped>
  h1 {
    background-color: orange;
  }

  .v-enter-active {

    animation: show 1s;

  }

  .v-leave-active {
    animation: show 1s reverse;

  }

  /* .come {
    animation: show 1s;
  }

  .go {
    animation: show 1s reverse;
  } */

  @keyframes show {
    from {
      transform: translateX(-1000px)
    }

    to {
      transform: translateX(0px)
    }
  }
</style>