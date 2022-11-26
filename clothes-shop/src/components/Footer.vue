<template>
  <footer class="footer">
    <a href="#home" class="logo">
      <img class="logoImage" :src="logoIcon" alt="icon" />
    </a>
  </footer>
</template>

<script lang="ts">
import Logo from "./icons/Shop-white.svg";

export default {
  name: "FooterItem",
  data() {
    return {
      logoIcon: Logo,
    };
  },
};
</script>

<style>
.footer {
  display: flex;
  align-items: center;
  bottom: 0;
  height: 144px;
  background-color: black;
}

.logo {
  padding-left: 63px;
  padding-top: 43px;
}
</style>
