<template>
  <div>
    <article v-if="post">
      <h1 class="title">{{post.title}}</h1>
      <p>ここにPOST_{{$route.params.id}}の記事が入ります</p>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: null
    }
  },
  mounted() {
    for(let post of this.$store.getters.posts) {
      if(post.id == this.$route.params.id) {
        this.post = post
      }
    }
    // for(let post of this.$store.state.posts){
    //   if(post.id == this.$route.params.id){
    //     this.post = post
    //   }
    // }
    if(!this.post) {
      this.$router.push("/")
    }
  },
  validate ({ params }) {
    // 数値でなければならない
    return /^\d+$/.test(params.id)
  }
}
</script>
