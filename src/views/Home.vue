<template>
  <div class="container-fluid">
    <h1 class="mt-4">My Product &nbsp; 
      <b-button pill variant="primary" @click="add()"><b-icon icon="plus" /> New Product</b-button>
    </h1>
    <b-table class="mt-3" 
      outlined striped hover 
      :fields="fields"
      :items="products" 
      :busy="isBusy" 
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      >
      <template v-slot:cell(actions)="data">
        <b-button size="sm" variant="secondary" @click="view(data)"><b-icon icon="eye" /> </b-button> &nbsp;
        <b-button size="sm" variant="primary" @click="edit(data)"><b-icon icon="pencil" /> </b-button> &nbsp;
        <b-button size="sm" variant="danger" @click="remove(data)"><b-icon icon="trash" /> </b-button>
      </template>
      <template v-slot:table-busy>
        <div class="text-center text-primary my-2">
          <b-spinner class="align-middle"></b-spinner> &nbsp;
          <strong>Loading...</strong>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
import Api from '@/components/misc/Api.js'

export default {
  name: 'Home',
  data() {
    return {
      products: [],
      sortBy: 'id',
      sortDesc: false,
      fields: [
        { key: 'id', sortable: true },
        { key: 'uuid', sortable: false },
        { key: 'sku', sortable: false },
        { key: 'name', sortable: true },
        { key: 'price', sortable: true },
        { key: 'actions', label: 'Actions' }
      ],
      isBusy: false
    }
  },
  methods: {
    fetchProducts() {
      const self = this;
      this.isBusy = true;
      Api.ProductList().then(resp => {
        self.products = resp.data.data;
        self.isBusy = false;
      })
    },
    add() {
      this.$router.push({path: "/product/add"}).catch(e => {
        console.error(e);
      });
    },
    view(data) {
      this.$router.push({path: "/product/" + data.item.uuid + "/detail"}).catch(e => {
        console.error(e);
      });
    },
    edit(data) {
      this.$router.push({path: "/product/" + data.item.uuid + "/update"}).catch(e => {
        console.error(e);
      });
    },
    remove(data) {
      const self = this;
      let confirmed = confirm("Remove this product? (" + data.item.name + ")");
      Api.ProductDelete(data.item.uuid).then(resp => {
        self.fetchProducts();
      });
    }
  },
  mounted() {
    this.fetchProducts();
  }

}
</script>
