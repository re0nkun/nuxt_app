<template>
  <div>
    <span
      v-for="(t, index) in text"
      :key="index"
      v-text="t"
      class="item delay-anime"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '基礎から学ぶ Vue.js'
    }
  }
}
</script>

<style>
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
  animation: text-in 0.8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
}

.delay-anime:nth-child(1) {
  animation-delay: 300ms;
}
.delay-anime:nth-child(2) {
  animation-delay: 400ms;
}
.delay-anime:nth-child(3) {
  animation-delay: 500ms;
}
.delay-anime:nth-child(4) {
  animation-delay: 600ms;
}
.delay-anime:nth-child(5) {
  animation-delay: 700ms;
}
.delay-anime:nth-child(6) {
  animation-delay: 800ms;
}
.delay-anime:nth-child(7) {
  animation-delay: 900ms;
}
.delay-anime:nth-child(8) {
  animation-delay: 1000ms;
}
.delay-anime:nth-child(9) {
  animation-delay: 1100ms;
}
.delay-anime:nth-child(10) {
  animation-delay: 1200ms;
}
.delay-anime:nth-child(11) {
  animation-delay: 1300ms;
}
.delay-anime:nth-child(12) {
  animation-delay: 1400ms;
}
.delay-anime:nth-child(13) {
  animation-delay: 1500ms;
}
</style>
