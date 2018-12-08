<template>
  <div class="header">
    <nuxt-link to="/">
      <h1 class="title"> 
        <!-- <Logo></Logo>  -->
        My Blog App!
      </h1>
    </nuxt-link>
    
    <div class="link">
      <nuxt-link to="/animation">animationページ</nuxt-link>
      <nuxt-link to="/transition">transitionページ</nuxt-link>
      <nuxt-link to="/load">loadページ</nuxt-link>
      <nuxt-link to="/modal">modalページ</nuxt-link>
      <nuxt-link to="/tab">tabページ</nuxt-link>
      <nuxt-link to="/posts">postsページ</nuxt-link>
      <nuxt-link to="/about">aboutページ</nuxt-link>
      <!-- <router-link to="/about">aboutページ</router-link> -->
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  // layout: 'mypage',
  components: { Logo },
  // data() { return {} },
}
</script>

<style>
.link>a {
  margin: 3px;
}
.nuxt-link-exact-active {
  border-bottom: 1.5px solid #ccc;
  padding: 3px;
} 

a:link,a:visited,a:hover,a:active {
  color: #41b883;
  text-decoration: none;
}
h1.title {
  color: #41b883;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 48px;
  word-spacing: 2px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.header {
  margin-bottom: 30px;
}
</style>

