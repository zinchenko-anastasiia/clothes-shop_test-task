<template>
  <header class="header">
    <a href="#home" class="logo">
      <img class="logoImage" :src="logoIcon" alt="icon" />
    </a>
  </header>
</template>

<script lang="ts">
import Logo from "./icons/Shop.svg";

export default {
  name: "HeaderItem",
  data() {
    return {
      logoIcon: Logo,
    };
  },
};
</script>

<style>
.header {
  display: flex;
  align-items: center;
  top: 0;
  height: 144px;
}

.logo {
  padding-left: 63px;
  padding-top: 60px;
}
</style>
