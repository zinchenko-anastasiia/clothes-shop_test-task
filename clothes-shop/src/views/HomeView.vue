<template>
  <HeaderItem />
  <main></main>
</template>

<script lang="ts">
import HeaderItem from "../components/Header.vue";

export default {
  name: "HomeView",
  data() {
    return {
      HeaderItem: HeaderItem,
    };
  },
};
</script>
