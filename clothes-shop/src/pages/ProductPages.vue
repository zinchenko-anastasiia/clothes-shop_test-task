<script lang="ts">
import HeaderItem from "../components/Header.vue";
import FooterItem from "../components/Footer.vue";
import productCatalog from '../components/Catalog.vue';
// import axios from "axios";

export default {
  name: "ProductPages",
  components: {
    FooterItem,
    HeaderItem,
    productCatalog,
  }, 
  // data() {
  //   return {
  //     info: null,
  //   };
  // },
  // mounted() {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((response: any) => (this.info = response.data))
  //     .then((response: any) => console.log(response));
  // },
  
};
</script>

<template>
  <HeaderItem />
  <main class="catalog">
    <productCatalog />
  </main>
  <FooterItem />
</template>

<style>
.catalog {
  max-width: 1332px;
  margin: 0 auto;
}
</style>
