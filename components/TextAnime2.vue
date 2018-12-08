<template>
  <div>
    <span
      v-for="(t, index) in text"
      :key="index"
      v-text="t"
      class="item"
      :style="{ 
        animationDelay: index * 200 + 'ms', animationPlayState: animationPlayState 
      }"
    />
    <!-- <br>
    <button @click="runPause">run/pause</button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '基礎から学ぶ Vue.js',
      animationPlayState: 'paused'
    }
  },
  methods: {
    runPause() {
      if (this.animationPlayState === 'running') {
        this.animationPlayState = 'paused'
      } else {
        this.animationPlayState = 'running'
      }
    }
  }
}
</script>

<style scoped>
@keyframes text-in {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
}
.item {
  display: inline-block;
  min-width: 0.3em;
  font-size: 2rem;
  
  /* animation: text-in 0.8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards; */
  animation-name: text-in;
  animation-duration: 1.6s;
  animation-timing-function: cubic-bezier(0.22, 0.15, 0.25, 1.43);
  animation-delay: 1.5s;
  animation-iteration-count: infinite;
  /* animation-direction: ; */
  animation-fill-mode: backward;
  /* animation-play-state: paused ; */
  }
</style>
