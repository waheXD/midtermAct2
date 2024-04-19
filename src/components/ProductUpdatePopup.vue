<template>
    <transition name="modal-fade">
      <div v-if="show" class="modal">
        <div class="modal-content">
          <span class="check-icon">✔</span> 
          <p>Product updated successfully!</p>
          <button @click="hidePopup">OK</button>
        </div>
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    data() {
      return {
        show: false
      };
    },
    methods: {
      showPopup() {
        this.show = true;
      },
      hidePopup() {
        this.show = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 255, 0.5);
    z-index: 999;
  }
  
  .modal-content {
    display: flex; 
    align-items: center;
    justify-content: center; 
    flex-direction: column; 
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
  
  .check-icon {
    color: blue; 
    font-size: 36px; 
    margin-bottom: 10px; 
  }
  
  .modal-fade-enter-active, .modal-fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .modal-fade-enter, .modal-fade-leave-to {
    opacity: 0;
  }


  button{
    color: white;
    background-color: blue;
    font-size: 15px;
    width: 100px;
    height: 50px;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    border: none;
  }



  button:hover{
    background-color: rgb(6, 6, 158);
  }

  </style>
