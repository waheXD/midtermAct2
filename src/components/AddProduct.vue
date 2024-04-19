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
        id: null,
        name: "",
        description: "",
        price: 0,
      },
    };
  },
  methods: {
    addProduct() {
      this.newProduct.id = Date.now(); // Assign a unique ID
      this.$emit("product-added", this.newProduct); // Emit the new product to the parent component
      this.resetForm();
    },
    resetForm() {
      this.newProduct = {
        id: null,
        name: "",
        description: "",
        price: 0,
      };
    },
  },
};
</script>

<style>
.add-product {
  font-family: 'Roboto', sans-serif;
  width: 80%;
  margin: auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.add-product h2 {
  text-align: center;
  margin-bottom: 1rem;
}

.add-product form {
  display: flex;
  flex-direction: column;
}

.add-product input,
.add-product textarea {
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.add-product button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  cursor: pointer;
}

.add-product button:hover {
  background-color: #45a049;
}
</style>
