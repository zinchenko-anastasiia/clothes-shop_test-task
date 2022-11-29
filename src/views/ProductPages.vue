<script lang="ts" setup>
import HeaderItem from "../components/Header.vue";
import FooterItem from "../components/Footer.vue";
import ProductsCatalog from "../components/ProductsCatalog.vue";
</script>

<template>
  <HeaderItem />
  <main class="main">
    <ProductsCatalog />
  </main>
  <FooterItem />
</template>

<style>
.main {
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
}
</style>
