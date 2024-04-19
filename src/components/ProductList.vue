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
        <tr v-for="product in displayProducts" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td>
            <button @click="deleteProduct(product.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: "Brown Butter Chocolate Chip Cookies",
         description: "Brown butter is made by melting butter and caramelizing the milk solids, turning the butter a lovely golden-brown hue and imparting a deep, nutty flavor. ",
          price: 150, },

        { id: 2, name: "Chocolate Cobbler", 
        description: "A simple list of ingredients that you probably almost always have on hand in your pantry is used to create a decadent chocolate dessert that can be described as a mix of cake and pudding.",
         price: 350,},

        { id: 3, name: "Cream Cheese Pound Cake", 
        description: "This cream cheese cake recipe takes all of the best parts of a classic pound cake and kicks it up with a creamy, dreamy, and slightly tart ingredient that makes us wonder why we didn't think of this little concoction sooner. ",
         price: 250,},

        { id: 4, name: "Egg Custard Pie", 
        description: "Custard pies date back all the way to the Middle Ages, when Romans first discovered the binding properties of eggs. ",
         price: 200,},

        // ...
      ],
      cart: [],
    };
  },
  computed: {
    displayProducts() {
      // Implement a computed property to filter or sort products if needed
      return this.products;
    },
  },
  methods: {
    deleteProduct(id) {
      this.products = this.products.filter(product => product.id !== id);
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
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  cursor: pointer;
}

.product-list button:hover {
  background-color: #45a049;
}
</style>