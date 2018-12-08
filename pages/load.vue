<template>
  <div class="example-loading example">

    <p><button @click="loadContent" :disabled="!list.length">
      コンテンツをリロード
    </button></p>

    <div class="flexbox-wrapper" :style="{height: height+'px'}">
      
      <ul class="flexbox-body" ref="body">
        <li v-for="item in list" :key="item.id">
          {{item.name}} {{item.price}}
        </li>
      </ul>
      
      <transition>
        <loading v-if="!list.length" />
      </transition>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loading from '~/components/Loading.vue'
export default {
  components: { Loading },
  data() {
    return {
      height: 0,
      list: []
    }
  },
  watch: {
    list() {
      this.$nextTick(()=>{
        this.height = this.$refs.body.getBoundingClientRect().height
      })
    }
  },
  methods: {
    loadContent() {
      this.list = []
      axios.get('/api/test').then(response => {
        setTimeout(()=>{
          this.list = response.data
        }, 1500)
      })
    }
  },
  created() {
    this.loadContent()
  }
}
</script>

<style>
.flexbox-wrapper {
  width: 30%;
  position: relative;
  border: 2px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  min-height: 2em;
  transition: height .4s;
}
.flexbox-body {
  border: 1px solid #41b883;
  margin: 0 24px 0 24px;
  padding: 16px 16px 16px 32px;
}
.v-enter-active, .v-leave-active {
  transition: opacity .4s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
</style>
