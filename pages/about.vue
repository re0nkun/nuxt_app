<template>
  <div>
    <h1 class="title">pages/about.vue</h1>

    <nuxt></nuxt>

    <router-link to="/about">/about/index</router-link> |
    <router-link to="/about/user">/about/user</router-link> |
    <a @click="$router.push('/')">トップページに戻る</a>
    <!-- <router-link to="/">トップページに戻る</router-link> -->
  </div>
</template>
