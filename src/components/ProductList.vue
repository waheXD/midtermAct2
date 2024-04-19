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
            <button class="editbtn" @click="editProduct(product)">Edit</button>
            <button class="deletebtn" @click="deleteProduct(product.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <edit-product v-if="editingProductId !== null" :product="getEditingProduct()" @updateProduct="updateProduct" />
    <product-update-popup ref="updatePopup" />

  </div>
</template>

<script>
import EditProduct from './EditProduct.vue';
import ProductUpdatePopup from './ProductUpdatePopup.vue';



export default {
  // props: {
  //   products: {
  //     type: Array,
  //     required: true
  //   }
  // },

  // // name: 'ProductList',
  // // props: ['products'],

  // data() {
  //   return {
  //     editingProductId: null
  //   };
  // },

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

      ],
      cart: [],editingProductId: null
    

    };
  },



  components: {
    EditProduct,
    ProductUpdatePopup
  },
  methods: {

    editProduct(product) {
      this.editingProductId = product.id;
    },

    getEditingProduct() {
      return this.products.find(product => product.id === this.editingProductId);
    },


    // updateProduct(updatedProduct) {
    //   this.$emit('updateProduct', updatedProduct);
    //   this.editingProductId = null;
    // },

    updateProduct(updatedProduct) {
      const index = this.products.findIndex(product => product.id === updatedProduct.id);
      if (index !== -1) {
        this.products.splice(index, 1, updatedProduct);
        this.$refs.updatePopup.showPopup();

      }
      this.editingProductId = null;
    },


    deleteProduct(id) {
      if (confirm('Are you sure you want to delete this item?')) {
        this.products = this.products.filter(product => product.id !== id);
      }
    },
  
}
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




.editbtn{
  background-color: #0000ff;
  color: white;
  border: none;
  padding: 10px 20px;
  width: 50px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 5px ;
  width: 79px;
}   

.deletebtn{
  background-color: #ff0019;
  color: white;
  border: none;
  padding: 10px 20px;

  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 5px ;
}





.deletebtn:hover {
  background-color: #a40000;
}   

.editbtn:hover {
  background-color: rgb(14, 6, 151);
} 
</style>
