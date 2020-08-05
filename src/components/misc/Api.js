import axios from 'axios';

const assestmentID = 'd558f91e-4f58-4599-a052-c37de39b27b8';
const baseURL = 'https://gm-hiring.myres.cc/api/v1/assessments/' + assestmentID;

const Api = {
  ProductList: function() {
    return axios.get(baseURL + '/products');
  },

  ProductShow: function(productId='id01') {
    return axios.get(baseURL + '/products/' + productId);
  },

  ProductAdd: function(sku='P01', name='Laptop', price=199) {
    return axios.post(baseURL + '/products', {
      sku: sku,
      name: name,
      price: price
    });
  },

  ProductUpdate: function(productId='id01', sku='P01', name='Laptop', price=199) {
    return axios.post(baseURL + '/products/' + productId, {
      _method: 'PUT',
      sku: sku,
      name: name,
      price: price
    });
  },

  ProductDelete: function(productId='id01') {
    return axios.delete(baseURL + '/products/' + productId);
  }
  
}

export default Api;