<template> 
  <transition name="modal" appear>
    <div class="overlay" @click.self="$emit('close-modal')">
        <div class="window">
          <slot/>
        </div>
    </div>  
  </transition>
</template>

<style>
  .overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  .window {
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;
  }
  .content {
    padding: 10px 20px;
  }
  .footer {
    background-color: #ccc;
    padding: 10px;
    text-align: right;
  }

.modal-enter-active, .modal-leave-active {
  transition: opacity 0.4s;
}

.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;
}
</style>