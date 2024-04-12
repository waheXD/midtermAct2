<template>
    <div class="product-list">
      <h2>Product List</h2>
      <ul>
        <li v-for="product in products" :key="product.id">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <p>{{ product.price }}</p>
        </li>
      </ul>
      <!--Table contents-->
      <table>
            <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Product Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
            <!-- Table rows for books -->
                <tr v-for="book in displayBooks" :key="book.id">
                    <td>{{ book.id }}</td>
                    <td>{{ book.title }}</td>
                    <td>{{ book.author }}</td>
                    <td>{{ book.genre }}</td>
                    <td>{{ book.price }}</td>
                    <td><button @click="addToCart(book)">Add To Cart</button></td>
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
          // Initial products data
        ],
      };
    },
  };
  </script>