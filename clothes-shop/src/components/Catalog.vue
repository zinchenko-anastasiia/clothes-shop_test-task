<script lang="ts">
import ProductItem from "./ProductItem.vue";
import axios from "axios";

export default {
  name: "productCatalog",
  components: {
    ProductItem,
  },
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    const options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v2/list",
      params: {
        store: "US",
        offset: "0",
        categoryId: "4209",
        limit: "48",
        country: "US",
        sort: "freshness",
        currency: "USD",
        sizeSchema: "US",
        lang: "en-US",
      },
      headers: {
        "X-RapidAPI-Key": "85ca08cc2dmsh3d93916504112dcp11362bjsne30e6a0e374c",
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response: any) => (this.info = response.data.products))
      .then((res) => console.log(res))
      .catch(function (error) {
        console.error(error);
      });
  },
};
</script>

<template>
  <div class="catalog">
    <ProductItem
      v-for="product in info"
      :key="product.id"
      :product_data="product"
    />
  </div>
</template>

<style>
.catalog {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 60px;
}
</style>
