<template>
  <button @click="$emit('input', item.id)" :class="[active,'tab']">
    {{item.label}}
  </button>
</template>

<script>
export default {
  props: {
    item: Object,
    // id: Number,
    // label: String,
    value: Number //currentId
  },
  computed: {
    active() {
      return this.value === this.item.id ? 'active' : false
    }
  }
}
</script>

<style scoped> 
  .tab {
    border: 1px solid #fff;
    border-radius: 2px 2px 0 0;
    background-color: #fff;
    color: #311d0a;
    line-height: 24px;
  }
  .tab:hover {
    background-color: #eee;
  }
  .active {
    background-color: #f7c9c9;
  }
</style>
