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
      isTwo: false,
    };
  },
  methods: {
    addPerPage: function (newPerPage: number) {
      this.perPage = newPerPage;
      if (newPerPage === 2) {
        this.isTwo = true;
      } else {
        this.isTwo = false;
      }
    },
  },
};
</script>

<template>
  <HeaderItem />
  <div class="per-page-changer">
    <span
      v-bind:class="{ perPageTwo: isTwo, perPageTwoDis: !isTwo }"
      v-on:click="addPerPage(2)"
    ></span>
    <span
      v-bind:class="{
        perPageFourDis: isTwo,
        perPageFour: !isTwo,
      }"
      v-on:click="addPerPage(4)"
    ></span>
  </div>
  <main class="main">
    <ProductsCatalog :perPage="perPage" />
  </main>
  <FooterItem />
</template>

<style>
.per-page-changer {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
  margin-right: 62px;
}

.perPageFour,
.perPageFourDis,
.perPageTwo,
.perPageTwoDis {
  cursor: pointer;
  height: 20px;
}
.perPageTwo::before {
  content: url("../components/icons/2-perPage.svg");
}
.perPageTwoDis::before {
  content: url("../components/icons/2-perPage-dis.svg");
}
.perPageFour::before {
  content: url("../components/icons/4-perPage-dis.svg");
}
.perPageFourDis {
  content: url("../components/icons/4-perPage.svg");
}
.main {
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  margin-bottom: 50px;
  min-height: calc(100vh - 144px);
}
</style>
