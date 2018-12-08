<template>
  <div>
    <MyCanvas :radius="radius"/>
    <p><input type="range" min="0" max="100" v-model.number="radius"></p>
  </div>
</template>

<script>
import MyCanvas from '~/components/MyCanvas.vue'
export default {
  components: { MyCanvas },
  data() {
    return {
      radius: 50
    }
  }
}
</script>
