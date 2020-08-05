<template>
  <div>
    <product-form mode="add" :product="null"></product-form>
  </div>
</template>

<script>
import ProductForm from '@/components/product/ProductForm.vue';

export default {
  name: 'ProductAdd',
  components: {
    'product-form': ProductForm
  }
}
</script>