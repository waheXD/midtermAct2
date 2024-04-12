import { createStore } from 'vuex';



export default createStore({
  state: {
    products: [
        { id: 1, name: 'Product 1', description: 'Description 1', price: 10.99 },
        { id: 2, name: 'Product 2', description: 'Description 2', price: 20.49 },
        { id: 3, name: 'Product 3', description: 'Description 3', price: 15.99 }
      ]
  },
  mutations: {
    ADD_PRODUCT(state, product) {
      state.products.push(product);
    },
    EDIT_PRODUCT(state, editedProduct) {
      const index = state.products.findIndex(p => p.id === editedProduct.id);
      if (index !== -1) {
        Vue.set(state.products, index, editedProduct);
      }
    },
    DELETE_PRODUCT(state, productId) {
      state.products = state.products.filter(p => p.id !== productId);
    }
  },
  actions: {
    addProduct({ commit }, product) {
      commit('ADD_PRODUCT', { ...product, id: Date.now() });
    },
    editProduct({ commit }, editedProduct) {
      commit('EDIT_PRODUCT', editedProduct);
    },
    deleteProduct({ commit }, productId) {
      commit('DELETE_PRODUCT', productId);
    }
  }
});
