<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import ProductPages from "./pages/ProductPages.vue";
export default {
  components: {
    ProductPages,
  },
};
</script>

<template>
  <RouterView />
  <ProductPages />
</template>
