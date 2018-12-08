<template>
  <div class="example">
    <div class="tabs">
      <TabItem 
        v-for="item in list" :key="item.id" :item="item"
        :value="currentId" @input="val=>currentId=val"/>
      <!-- <TabItem 
        v-for="item in list" :key="item.id"
        :item="item" v-model="currentId"/> -->
    </div>
    <div class="contents">
      <transition>
        <section class="item" :key="currentId">
          {{current.content}}
        </section>
      </transition>
    </div>
  </div>
</template>

<script>
import TabItem from '~/components/TabItem.vue'
export default {
  components: { TabItem },
  data() {
    return {
      currentId: 1,
      list: [
        { id: 1, label: 'tab1', content: 'コンテンツ1' },
        { id: 2, label: 'tab2', content: 'コンテンツ2' },
        { id: 3, label: 'tab3', content: 'コンテンツ3' }
      ]
    }
  },
  computed: {
    current() {
      return this.list.find(el => el.id === this.currentId) || {}
    }
  }
}
</script>

<style scoped>
.contents {
  position: relative;
  overflow: hidden;
  width: 280px;
  border: 2px solid #000;
}
.item {
  box-sizing: border-box;
  padding:10px;
  width: 100%;
  transition: all 0.5s ease;
  background: #fff;
}

.v-leave-active {
  position: absolute;
}
.v-enter {
  transform: translateX(-100%);
}
.v-leave-to {
  transform: translateX(100%);
}
</style>
