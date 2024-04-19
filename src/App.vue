<template>
  <div id="app">
    <product-list :products="products" />
    <transition name="fade">
      <add-product v-if="showAddProduct" @product-added="showAddProduct = false" />
    </transition>
    <button @click="showAddProduct = true">Add Product</button>
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
        // Initial products data
      ],
      showAddProduct: false,
    };
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>