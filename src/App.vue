<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
#nprogress .bar {
  background: red !important; //进度条自定义颜色
  height: 100px;
}
* {
        margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
html,
body {
  width: 100%;
  height: 100%;
  color: #000;
  background-color: #f5f5f5;
}
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>
