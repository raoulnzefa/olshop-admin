<template>
  <div class="container-fluid">
    <h1 class="mt-4">Product - {{ modeTitle }} <b-spinner v-show="isFetching"></b-spinner> </h1>
    <b-form @submit="onSubmit">
      <b-form-group label="Product Name:" label-for="input-name">
        <b-form-input
          id="input-name"
          v-model="productEditable.name"
          required
          placeholder="Rice Box"
          :disabled="isFormDisabled"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Product SKU:" label-for="input-sku">
        <b-form-input
          id="input-sku"
          v-model="productEditable.sku"
          required
          placeholder="R003"
          :disabled="isFormDisabled"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Price:" label-for="input-price">
        <b-form-input
          id="input-price"
          v-model="productEditable.price"
          required
          type="number"
          placeholder="199"
          :disabled="isFormDisabled"
        ></b-form-input>
      </b-form-group>

      <b-button type="button" @click="backToHome()" variant="secondary">Go Back</b-button>
      &nbsp; &nbsp;
      <template v-if="! isFormDisabled">
        <b-button v-show="! isSubmitting" type="submit" variant="primary">{{ modeTitle }}</b-button> 
        <b-button v-show="isSubmitting" type="submit" variant="primary" disabled=""><b-spinner small /> Submitting</b-button> 
      </template>
    </b-form>
  </div>
</template>

<script>
import Api from '@/components/misc/Api.js'

const FORM_MODE = {
  ADD: "add",
  EDIT: "edit",
  DETAIL: "detail"
}
const cleanForm =  {
  name: null,
  sku: null,
  price: null
}

export default {
  name: 'ProductForm',
  props: ['mode'],
  data() {
    return {
      productEditable: {
        name: null,
        sku: null,
        price: null
      },
      isSubmitting: false,
      isFetching: false
    }
  },
  computed: {
    modeTitle() {
      switch(this.mode) {
        case FORM_MODE.ADD: 
          return "Add New";
          break;
        case FORM_MODE.EDIT: 
          return "Update";
          break;
        case FORM_MODE.DETAIL: 
          return "Detail";
          break;
        default:
          return "-Wrong Mode-"
          break;
      }
    },
    isFormDisabled() {
      return this.mode == FORM_MODE.DETAIL;
    },
    productId() {
      return this.$route.params.productId ? this.$route.params.productId : null;
    },
    products: {
      get () {
        return this.$store.state.product.items;
      },
      set (value) {
        this.$store.commit('STORE_ITEMS', value);
      }
    },
  },
  methods: {
    toEditableData() {
      const self = this;
      if(this.mode == FORM_MODE.ADD) {
        this.resetForm();
        return true;
      }
      // clone without the observer data
      self.isFetching = true;
      Api.ProductShow(this.productId)
        .then(resp => {
          self.productEditable = resp.data.data;
          self.isFetching = false;
        })
    },
    backToHome() {
      this.$router.push({path: "/"}).catch(e => {
        console.error(e);
      });
    },
    onSubmit(e) {
      e.preventDefault();

      const self = this;
      this.isSubmitting = true;
      let submitResponse = null;
      let product = this.productEditable;
      switch(this.mode) {
        case FORM_MODE.ADD:
          submitResponse = Api.ProductAdd(product.sku, product.name, product.price);
          break;
        case FORM_MODE.EDIT:
          submitResponse = Api.ProductUpdate(this.productId, product.sku, product.name, product.price);
          break;
        default:
          break;
      }

      submitResponse.then(resp => {
        self.isSubmitting = false;
        self.reFetchProducts();
        self.backToHome();
      }).catch(err => {
        self.isSubmitting = false;
        console.error(err);
      })
    },
    resetForm() {
      this.productEditable = cleanForm;
    },
    reFetchProducts() {
      const self = this;
      Api.ProductList().then(resp => {
        self.products = resp.data.data;
      })
    },
  },
  mounted() {
    this.toEditableData();
  }
}
</script>