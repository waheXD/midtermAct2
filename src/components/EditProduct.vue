

<template>
    <div class="edit-product">
      <form @submit.prevent="updateProduct" class="edit-product-form">
        <h2>Edit Product</h2>
        <div class="form-group">
          <label for="name">Product Name:</label>
          <input type="text" id="name" v-model="editedProduct.name" required>
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea id="description" v-model="editedProduct.description" required></textarea>
        </div>
        <div class="form-group">
          <label for="price">Price:</label>
          <input type="number" id="price" v-model.number="editedProduct.price" required>
        </div>
        <button type="submit" class="update-button">Update Product</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EditProduct',
    props: ['product'],
    data() {
      return {
        editedProduct: { ...this.product }
      };
    },
    methods: {
      updateProduct() {
        this.$emit('updateProduct', this.editedProduct);
      }
    }
  };
  </script>
  







  <style scoped>
  .edit-product {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .edit-product-form {
    width: 80%;
    max-width: 400px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="number"],
  textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
  }
  
  textarea {
    height: 100px;
  }
  
  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  