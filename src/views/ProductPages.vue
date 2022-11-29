<script lang="ts" setup>
import HeaderItem from "../components/Header.vue";
import FooterItem from "../components/Footer.vue";
import ProductsCatalog from "../components/ProductsCatalog.vue";
</script>
<script lang="ts">
export default {
  data() {
    return {
      perPage: 4,
    };
  },
  methods: {
    addPerPage: function (perPage: number) {
      this.perPage = perPage;
    },
  },
};
</script>

<template>
  <HeaderItem />
  <div class="per-page-changer">
    <a class="but" v-on:click="addPerPage(2)"><span class="fa"></span></a>
    <a class="butt" v-on:click="addPerPage(4)"><span class="fa"></span></a>
  </div>
  <main class="main">
    <ProductsCatalog :perPage="perPage" />
  </main>
  <FooterItem />
</template>

<style>
.but {
  line-height: 25px;
  cursor: pointer;
}

.per-page-changer {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
  margin-right: 62px;
}

.butt {
  line-height: 25px;
  cursor: pointer;
}
.but::before {
  content: url("../components/icons/2-perPage.svg");
}
.butt::before {
  content: url("../components/icons/4-perPage.svg");
}
.main {
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
}
</style>
