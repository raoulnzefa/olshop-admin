<template>
  <div>
    <product-form mode="detail"></product-form>
  </div>
</template>

<script>
import ProductForm from '@/components/product/ProductForm.vue';

export default {
  name: 'ProductDetail',
  components: {
    'product-form': ProductForm
  }
}
</script>