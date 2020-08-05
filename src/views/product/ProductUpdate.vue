<template>
  <div>
    <product-form mode="edit"></product-form>
  </div>
</template>

<script>
import ProductForm from '@/components/product/ProductForm.vue';

export default {
  name: 'ProductUpdate',
  components: {
    'product-form': ProductForm
  }
}
</script>