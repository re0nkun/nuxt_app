<template>
  <div>
    <h3>TextAnime1 
      <button @click="anime1=!anime1">切り替え</button>
    </h3>
    <TextAnime1 v-if="anime1"/>
    <p>scssでディレイを付与</p>
    <hr>

    <h3>TextAnime2 
      <button @click="anime2=!anime2">切り替え</button>
      <button @click="runPause">run/pause</button>
    </h3>
    <TextAnime2 v-if="anime2" ref="anime2"/>
    <p>bindingでディレイを付与</p>
    <hr>

    <h3>TextAnime3</h3>
    <p><label>
      <input type="checkbox" v-model="autoplay"> ５秒ごとに自動で文字を更
    </label></p>
    <TextAnime3 :autoplay="autoplay"/>
    <p><code>transition-group</code> の <code>v-move</code> を利用してゴニョゴニョしている</p>
  </div>
</template>

<script>
import TextAnime1 from '~/components/TextAnime1'
import TextAnime2 from '~/components/TextAnime2'
import TextAnime3 from '~/components/TextAnime3'
export default {
  components: {
    TextAnime1,
    TextAnime2,
    TextAnime3
  },
  data() {
    return{
      anime1: true,
      anime2: true,
      autoplay: true
    }
  },
  methods: {
    runPause() {
      this.$refs.anime2.runPause()
    }
  }
}
</script>
