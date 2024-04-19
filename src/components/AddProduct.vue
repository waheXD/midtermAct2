<template>
    <div class="add-product">
      <h2>Add Product</h2>
      <form @submit.prevent="addProduct">
        <input v-model="newProduct.name" placeholder="Product Name" />
        <textarea v-model="newProduct.description" placeholder="Product Description"></textarea>
        <input v-model.number="newProduct.price" type="number" placeholder="Product Price" />
        <button type="submit">Add Product</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newProduct: {
          id: Date.now(),
          name: "shoes nike",
          description: "ksgdkhjsbnb",
          price: 10,
        },
      };
    },
    methods: {
      addProduct() {
        this.products.push(this.newProduct);
        this.newProduct = {
          id: Date.now(),
          name: "",
          description: "",
          price: 0,
        };
  
        // Add animation
        this.$emit("product-added");
      },
    },
  };
  </script>