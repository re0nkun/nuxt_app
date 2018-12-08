import axios from 'axios'

export const state = () => ({
  posts: []
})
export const getters =  {
  posts (state) {
    return state.posts
  }
}
export const mutations = {
  set (state, items) {
    state.posts = items
  }
}
export const actions = {
  load (ctx) {
    // const items = [
    //   { "id": 1, "title": "最初の記事です。" },
    //   { "id": 2, "title": "2番目の投稿です。" },
    //   { "id": 3, "title": "３番めの投稿です。" }
    // ]
    axios.get("http://jsonplaceholder.typicode.com/posts").then(result => {
      ctx.commit("set", result.data)
    })
  }
}