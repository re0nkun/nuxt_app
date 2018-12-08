<template>
  <div>
    <p class="button"> 
      <button @click="doAdd">追加</button>
      <button @click="current=1">すべて</button>
      <button @click="current=n" v-for="n in [3,5]" :key="n">
        {{n}}の倍数
      </button>
    </p>

    <transition-group tag="ul" class="list"
      @before-enter="beforeEnter"
      @after-enter="afterEnter"
      @enter-cancelled="afterEnter">
      <li v-for="(item, index) in filteredList"
        :key="item"
        :data-index="index"
        @click="doRemove(item)"
        class="item">{{item}}</li>       
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addEnter: false,
      current: 1,
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  computed: {
    filteredList() {
      return this.list.filter( el => el % this.current === 0)
    }
  },
  methods: {
    doAdd() {
      this.addEnter = true
      const newNumber = Math.max.apply(null, this.list) + 1
      const index = Math.floor(Math.random() * (this.list.length + 1))
      this.list.splice(index, 0, newNumber)
    },
    doRemove(item) {
      this.list.splice(this.list.indexOf(item), 1)
    },

    beforeEnter(el) {
      this.$nextTick(()=>{
        if (!this.addEnter) {
          el.style.transitionDelay = 100 * parseInt(el.dataset.index, 10) + 'ms'
        } else {
          this.addEnter = false
        }
      })
    },
    afterEnter(el) {
      el.style.transitionDelay = ''
    }
  }
}
</script>

<style>
.button>button {
  background: #eb516b;
  border-radius: 2px;
  border: 1px solid #eb516b;
  color: #fff;
  margin-left: 4px;
}
.list {
  width: 240px;
  padding: 0;
}
.item {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
  width: 40px;
  height: 40px;
  background: #f5f5f5;
}

.v-enter-active, .v-leave-active, .v-move {
  transition: opacity 1s, transform 1s;
}
.v-leave-active {
  position: absolute;
}
.v-enter {
  opacity: 0;
  transform: translateY(-20px);
}
.v-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
