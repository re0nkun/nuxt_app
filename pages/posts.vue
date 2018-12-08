<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <!-- <nuxt-link :to="`/post/${post.id}`">
          {{post.title}}
        </nuxt-link> -->

        <router-link :to="{name:'post-id',params:{id: post.id}}">
          {{post.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  // layout: 'mypage',
  components: { Logo },
  // data() { return {} },
  computed: {
    posts() {
      return this.$store.getters.posts
    }
  },
  mounted() {
    this.$store.dispatch("load")
  }
}
</script>
