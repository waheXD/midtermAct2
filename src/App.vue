<template>
  <div id="app">
    <product-list :products="products" @delete-product="deleteProduct" />
    <transition name="fade" :duration="{ enter: 2000, leave: 2000 }"> 
      <add-product v-if="showAddProduct" @product-added="addProduct" />
    </transition>
    <div class="add-product-btn-container"> 
      <button class="add-product-btn" @click="showAddProduct = true">Add Product</button>
    </div>
  </div>
</template>

<script>
import ProductList from "./components/ProductList.vue";
import AddProduct from "./components/AddProduct.vue";

export default {
  name: "App",
  components: {
    ProductList,
    AddProduct,
  },
  data() {
    return {
      products: [
        { id: 1, name: "Brown Butter Chocolate Chip Cookies", description: "Brown butter is made by melting butter and caramelizing the milk solids, turning the butter a lovely golden-brown hue and imparting a deep, nutty flavor.", price: 150 },
        { id: 2, name: "Chocolate Cobbler", description: "A simple list of ingredients that you probably almost always have on hand in your pantry is used to create a decadent chocolate dessert that can be described as a mix of cake and pudding.", price: 350 },
        { id: 3, name: "Cream Cheese Pound Cake", description: "This cream cheese cake recipe takes all of the best parts of a classic pound cake and kicks it up with a creamy, dreamy, and slightly tart ingredient that makes us wonder why we didn't think of this little concoction sooner. ", price: 250},
        { id: 4, name: "Egg Custard Pie", description: "Custard pies date back all the way to the Middle Ages, when Romans first discovered the binding properties of eggs. ", price: 200},
      
      ],
      showAddProduct: false,
    };
  },
  methods: {
    addProduct(newProduct) {
      this.products.push(newProduct);
    },
    editProduct(updatedProduct) {
      const index = this.products.findIndex(product => product.id === updatedProduct.id);
      if (index !== -1) {
        this.products.splice(index, 1, updatedProduct);
      }
    },
    deleteProduct(productId) {
      if (confirm("Are you sure you want to delete this product?")) {
        this.products = this.products.filter(product => product.id !== productId);
      }
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s; 
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.add-product-btn-container {
  text-align: center;
  margin-top: 20px;
}

.add-product-btn {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.add-product-btn:hover {
  background-color: #45a049;
}
</style>