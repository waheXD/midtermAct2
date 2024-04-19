<template>
  <div class="product-list">
    <h2>DESSERT'S</h2>
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Description</th>
          <th>Price</th>  
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td>
            <button @click="deleteProduct(product.id)">Delete Product</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  methods: {
    deleteProduct(id) {
        this.$emit("delete-product", id);
    },
  },
};
</script>

<style>
.product-list {
  font-family: 'Roboto', sans-serif;
  width: 80%;
  margin: auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-list h2 {
  text-align: center;
  margin-bottom: 1rem;
}

.product-list table {
  width: 100%;
  border-collapse: collapse;
}

.product-list th,
.product-list td {
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
  text-align: left;
  font-family: 'Roboto', sans-serif;
}

.product-list th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.product-list button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  cursor: pointer;
}

.product-list button:hover {
  background-color: #d32f2f;
}
</style>
