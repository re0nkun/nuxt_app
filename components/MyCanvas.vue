<template>
  <div>
    <canvas width="200" height="200" class="canvas" ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
  props: {
    radius: {
      type: Number,
      default: 50
    }
  },
  mounted() {
    this.ctx = this.$refs.canvas.getContext('2d')
    // this.ctx = this.$el.getContext('2d')
    this.draw(this.radius)
  },
  watch: {
    radius() {
      this.draw(this.radius)
    }
  },
  methods: {
    draw(radius) {
      this.ctx.beginPath()
      this.ctx.clearRect(0,0,200,200)
      this.ctx.arc(100,100,radius, 0, Math.PI*2)
      this.ctx.fillStyle = 'rgba(59,128,112, 1)'
      this.ctx.fill()
    }
  }
}
</script>

<style scoped>
.canvas {
  border: 1px solid #41b883;
}
</style>
