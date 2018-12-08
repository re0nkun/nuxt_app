<template>
  <div>
    <Canvas></Canvas>
  </div>
</template>

<script>
import Canvas from './canvas.vue'
export default {
  // layout: 'mypage',
  components: { Canvas },
  // data() { return {} },
}
</script>

<style>
.page-enter-active, .page-leave-active {
  transition: opacity .2s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 80px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
