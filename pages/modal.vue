<template>
  <div class="example-modal-window">
    <button @click="openModal">モーダルを開く</button>

    <ModalWindow @close-modal="closeModal" v-if="modal">
      <div class="content"><input v-model="message"></div>
      <div class="footer"><button @click="doSend">送信</button></div>
    </ModalWindow>
  </div>
</template>

<script>
import ModalWindow from '~/components/ModalWindow.vue'
export default {
  components: { ModalWindow },
  data() {
    return{
      modal: false,
      message: ''
    }
  },
  methods: {
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
    },
    doSend() {
      if (this.message.length > 0) {
        alert(this.message)
        this.message = ''
        this.closeModal()
      } else {
        alert('メッセージを入力してください')
      }
    }
  }
}
</script>
